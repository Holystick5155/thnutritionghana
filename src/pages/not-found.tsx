import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  useSEO({
    title: "Page Not Found | TB Nutrition Ghana",
    description: "The page you are looking for does not exist or has been moved.",
  });

  return (
    <div className="w-full">
      {/* PAGE HEADER */}
      <section className="relative bg-primary py-16 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">
              Error
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 md:mb-6">
              404 — Page Not Found
            </h1>
            <div className="w-20 h-1 bg-accent mb-6 md:mb-8" />
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              The page you are looking for does not exist, has been moved, or is
              temporarily unavailable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 404 CONTENT */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-dashed border-primary/30 flex items-center justify-center mx-auto mb-8">
              <span className="font-serif text-4xl font-bold text-primary/40">
                404
              </span>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto">
              We couldn't find the page you were looking for. It may have been
              removed, renamed, or is temporarily unavailable.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-bold"
                >
                  <Home className="mr-2" size={18} />
                  Go to Home
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-bold"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2" size={18} />
                Go Back
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}