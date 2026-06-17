import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoMark from "./LogoMark";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/workshop", label: "Workshop" },
  { href: "/partners", label: "Partners" },
  { href: "/media", label: "Media Centre" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Ghana flag stripe */}
        <div className="flex w-full">
          <div className="flex-1 h-[6px] bg-[#CE1126]" />
          <div className="flex-1 h-[6px] bg-[#FCD116] flex items-center justify-center">
            <span
              className="text-black leading-none select-none"
              style={{ fontSize: "5px", lineHeight: 1 }}
            >
              ★
            </span>
          </div>
          <div className="flex-1 h-[6px] bg-[#006B3F]" />
        </div>
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={close} className="flex items-center gap-3">
            <LogoMark size={150} />
            <div className="hidden">
              <h1 className="font-serif font-bold text-lg leading-none text-foreground">
                TB Nutrition
              </h1>
              <p className="text-sm font-medium text-primary tracking-widest uppercase">
                Ghana
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/register">
              <Button
                className={`hidden font-semibold shadow-sm ${
                  location === "/register"
                    ? "bg-primary/80 text-white"
                    : "bg-primary hover:bg-primary/90 text-white"
                }`}
                data-testid="button-register-nav"
              >
                Register
              </Button>
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden relative z-[60] p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-testid="button-hamburger"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile menu — backdrop + slide-down panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={close}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-20 left-0 right-0 z-50 md:hidden bg-background border-b shadow-2xl"
            >
              <div className="h-0.5 w-full bg-primary" />

              <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.22 }}
                  >
                    <Link
                      href={link.href}
                      onClick={close}
                      className={`flex items-center justify-between w-full px-3 py-3.5 rounded-lg text-base font-medium transition-colors ${
                        location === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.label}
                      {location === link.href && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: links.length * 0.055, duration: 0.22 }}
                  className="hidden pt-3 mt-2 border-t"
                >
                  <Link href="/workshop" onClick={close}>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-5 text-base"
                      data-testid="button-register-mobile"
                    >
                      Coming Workshop
                    </Button>
                  </Link>
                </motion.div>

                <p className="text-center text-xs text-muted-foreground pt-3 pb-1">
                  18 June 2026 · Labadi Beach Hotel, Accra
                </p>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
