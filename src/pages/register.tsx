import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";

// ─────────────────────────────────────────────────────────────────
// OPTION A: Hard-code the URLs here for a permanent fix.
// OPTION B: Use the admin panel at /admin to set them via the browser
//           without touching this file.
// ─────────────────────────────────────────────────────────────────
const HARDCODED_EMBED_URL = "";
const HARDCODED_DIRECT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeu5vBPTXTm87_cJqTujY4lfUdkPdi1ig8q9njMzP-Qjs-loA/viewform?usp=publish-editor";

const STORAGE_EMBED = "tbng_form_embed_url";
const STORAGE_DIRECT = "tbng_form_direct_url";

export default function Register() {
  useSEO({
    title: "Register to Attend | TB Nutrition Ghana",
    description:
      "Secure your place at the First National Stakeholder Consultation & Co-Design Workshop on Integrating Nutrition Support into Tuberculosis Services in Ghana — 18 June 2026, Accra.",
  });

  const [embedUrl, setEmbedUrl] = useState(HARDCODED_EMBED_URL);
  const [directUrl, setDirectUrl] = useState(HARDCODED_DIRECT_URL);

  useEffect(() => {
    if (!HARDCODED_EMBED_URL) {
      const stored = localStorage.getItem(STORAGE_EMBED);
      if (stored) setEmbedUrl(stored);
    }
    if (!HARDCODED_DIRECT_URL) {
      const stored = localStorage.getItem(STORAGE_DIRECT);
      if (stored) setDirectUrl(stored);
    }
  }, []);

  const hasForm = Boolean(embedUrl || directUrl);

  return (
    <div className="w-full">
      {/* PAGE HEADER */}
      <section className="relative bg-primary py-14 md:py-24 overflow-hidden">
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
              18 June 2026 · Labadi Beach Hotel, Accra
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 md:mb-6 leading-tight">
              Register to Attend
            </h1>
            <div className="w-20 h-1 bg-accent mb-6 md:mb-8" />
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Secure your place at the First National Stakeholder Consultation
              &amp; Co-Design Workshop on Integrating Nutrition Support into
              Tuberculosis Services in Ghana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QUICK DETAILS */}
      <div className="bg-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 py-4 md:py-5 text-xs md:text-sm font-medium text-white/70">
            {[
              { icon: Calendar, text: "Thursday, 18 June 2026" },
              { icon: Clock, text: "9:00 AM – 4:00 PM (GMT)" },
              { icon: MapPin, text: "Labadi Beach Hotel, Accra, Ghana" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2">
                <Icon size={14} className="text-accent" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FORM SECTION */}
      <section className="py-12 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {hasForm ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border"
              >
                <div className="bg-primary/5 border-b border-border px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">
                  <p className="font-serif font-bold text-foreground text-base md:text-lg">
                    Registration Form
                  </p>
                  {directUrl && (
                    <a
                      href={directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary font-semibold flex items-center gap-1 hover:underline"
                    >
                      Open in new tab <ExternalLink size={12} />
                    </a>
                  )}
                </div>
                <iframe
                  src={embedUrl || directUrl}
                  title="TB Nutrition Ghana — Workshop Registration"
                  className="w-full border-0"
                  style={{ height: "900px" }}
                  loading="lazy"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl shadow-xl border-2 border-dashed border-primary/25 p-8 md:p-16 text-center"
              >
                <div className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-primary/10 border-2 border-dashed border-primary/30 flex items-center justify-center mx-auto mb-6 md:mb-8">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary/50"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                  Registration Form Coming Soon
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto">
                  The registration form will be published here shortly. In the
                  meantime, please contact the secretariat directly to express
                  your interest in attending.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-lg mx-auto text-left mb-7 md:mb-10">
                  <div className="bg-secondary/50 rounded-xl p-4 md:p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      Secretariat Email
                    </p>
                    <a
                      href="mailto:aasante-poku@noguchi.ug.edu.gh"
                      className="text-primary font-medium hover:underline text-sm break-all"
                    >
                      aasante-poku@noguchi.ug.edu.gh
                    </a>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-4 md:p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      Telephone
                    </p>
                    <a
                      href="tel:+233541359112"
                      className="text-primary font-medium hover:underline text-sm"
                    >
                      +233-541-359-112
                    </a>
                  </div>
                </div>

                <div className=" bg-primary/8 border border-primary/15 rounded-xl px-5 md:px-6 py-3 md:py-4 text-sm text-muted-foreground hidden">
                  {/* inline-block */}
                  <strong className="text-foreground">
                    For the organising team:
                  </strong>{" "}
                  visit{" "}
                  <a
                    href="/admin"
                    className="text-primary font-semibold hover:underline"
                  >
                    /admin
                  </a>{" "}
                  to activate the form without touching code.
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
              At the Workshop
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              What to Expect
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                num: "01",
                title: "Plenary Keynotes",
                desc: "High-level presentations from national and international experts setting the context for Ghana's TB-nutrition agenda.",
              },
              {
                num: "02",
                title: "Panel Discussions",
                desc: "Structured dialogue across policy, research, and service delivery sectors exploring implementation opportunities.",
              },
              {
                num: "03",
                title: "Co-Design Breakouts",
                desc: "Collaborative workshops generating actionable, feasible recommendations for national programme integration.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 md:p-8 rounded-2xl bg-secondary/30 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="font-serif text-4xl md:text-5xl font-bold text-primary/15 mb-3 md:mb-4">
                  {item.num}
                </div>
                <h3 className="font-serif font-bold text-lg md:text-xl text-foreground mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
