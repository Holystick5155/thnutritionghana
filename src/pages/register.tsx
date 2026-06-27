import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { Calendar, MapPin, Clock, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Register() {
  useSEO({
    title: "Workshop Concluded | TB Nutrition Ghana",
    description:
      "The First National Stakeholder Consultation & Co-Design Workshop on Integrating Nutrition Support into Tuberculosis Services in Ghana was held on 18 June 2026 at Labadi Beach Hotel, Accra. Thank you to all participants.",
  });

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
              Workshop Concluded
            </h1>
            <div className="w-20 h-1 bg-accent mb-6 md:mb-8" />
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Thank you to all who participated in the First National Stakeholder
              Consultation &amp; Co-Design Workshop on Integrating Nutrition
              Support into Tuberculosis Services in Ghana.
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

      {/* WORKSHOP CONCLUDED MESSAGE */}
      <section className="py-12 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center mx-auto mb-6 md:mb-8">
              <CheckCircle size={36} className="text-accent" />
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Thank You for Your Interest
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-lg mx-auto">
              Registration for the First National Stakeholder Consultation &amp;
              Co-Design Workshop has now closed. The workshop was successfully
              held on <strong>Thursday, 18 June 2026</strong> at Labadi Beach
              Hotel, Accra.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/media">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold"
                >
                  View Media Coverage
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
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
