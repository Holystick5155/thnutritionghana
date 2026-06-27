import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Activity,
  Users,
  Shield,
  Lightbulb,
  HeartPulse,
} from "lucide-react";
import { Link } from "wouter";
import Countdown from "@/components/Countdown";

import logoMoH from "@assets/ministry-of-health_1781523740610.jpg";
import logoGHS from "@assets/ghana-health-service_1781523740611.jpg";
import logoNoguchi from "@assets/noguchi-nmimr_1781523740609.jpg";
import logoUG from "@assets/university-of-ghana_1781523740610.jpg";
import logoBU from "@assets/boston-university_1781523740608.jpg";

const partnerLogos = [
  { src: logoMoH, alt: "Ministry of Health, Republic of Ghana" },
  { src: logoGHS, alt: "Ghana Health Service" },
  { src: logoNoguchi, alt: "Noguchi Memorial Institute for Medical Research" },
  { src: logoUG, alt: "University of Ghana" },
  { src: logoBU, alt: "Boston University" },
];

export default function Home() {
  useSEO({
    title:
      "TB Nutrition Ghana — First National Stakeholder Consultation & Co-Design Workshop",
    description:
      "Join Ghana's first national stakeholder consultation and co-design workshop on integrating nutrition support into tuberculosis services. 18 June 2026 · Labadi Beach Hotel, Accra.",
  });

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Health workers in Ghana clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 z-10 text-white py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur border border-white/20 rounded-full mb-6 md:mb-8">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                First National Stakeholder Consultation — 18 June 2026
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-5 md:mb-6">
              TB NUTRITION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                GHANA
              </span>
            </h1>

            <p className="font-serif italic text-xl md:text-3xl text-accent mb-6 md:mb-8">
              Nourishing Recovery. Strengthening TB Care.
            </p>

            <div className="bg-black/20 backdrop-blur-sm border-l-4 border-accent p-4 md:p-6 mb-8 md:mb-10 max-w-2xl rounded-r-lg">
              <p className="text-base md:text-xl font-light text-white/90">
                A national multi-stakeholder platform advancing the integration
                of nutrition support into tuberculosis prevention, treatment,
                and care services in Ghana.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 md:mb-12 text-sm md:text-base font-medium">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white/10 rounded">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <span>18 June 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white/10 rounded">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span>Labadi Beach Hotel, Accra</span>
              </div>
            </div>

            <Countdown />

            <div className="flex flex-wrap gap-3 md:gap-4 mt-4">
              <Link href="/media">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-bold shadow-lg"
                  data-testid="button-media-hero"
                >
                  View Media
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base font-bold bg-transparent border-white text-white hover:bg-white/10"
                  data-testid="button-about-hero"
                >
                  About the Initiative
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/80"></div>
      </section>

      {/* PARTNER LOGO STRIP */}
      <section className="bg-foreground py-5 md:py-6 overflow-hidden">
        <div className="container mx-auto px-4 mb-3">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-white/30">
            Convened by
          </p>
        </div>

        {/* Marquee wrapper — infinite scroll on all screen sizes */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-foreground to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-foreground to-transparent" />

          {/* Animate the whole track — duplicate logos for seamless loop */}
          <motion.div
            className="flex"
            style={{ width: "max-content" }}
            animate={{ x: [`0px`, `-${partnerLogos.length * 224}px`] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center mx-4 md:mx-6 flex-shrink-0"
              >
                <div className="h-14 md:h-16 bg-white/90 hover:bg-white transition-colors rounded-xl flex items-center justify-center px-4 py-2 shadow-sm">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY TB NUTRITION GHANA */}
      <section className="py-14 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-5 md:mb-6">
                Why TB Nutrition <span className="text-primary">Ghana?</span>
              </h2>
              <div className="w-20 h-1 bg-accent mb-6 md:mb-8"></div>

              <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">
                    Tuberculosis remains one of the world's leading infectious
                    diseases.
                  </strong>
                </p>
                <p>
                  Nutrition and tuberculosis are deeply interconnected.
                  Undernutrition increases susceptibility to tuberculosis
                  infection, worsens disease progression, and contributes to
                  poorer treatment outcomes.
                </p>
                <p className="p-4 md:p-6 bg-secondary/50 border-l-4 border-primary rounded-r">
                  TB Nutrition Ghana seeks to bridge this gap by creating a
                  national platform for dialogue, research translation,
                  partnership building, policy development, and implementation
                  innovation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-full border border-dashed border-primary/30 flex items-center justify-center bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center flex-col p-12 text-center">
                  <Activity
                    size={48}
                    className="text-primary mb-6 opacity-50"
                  />
                  <p className="font-serif text-2xl font-medium text-foreground">
                    "Effective tuberculosis care extends beyond diagnosis and
                    treatment."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NATIONAL OPPORTUNITY */}
      <section className="py-14 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-5xl font-bold mb-6 md:mb-8"
            >
              The National Opportunity
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 md:space-y-6 text-base md:text-xl text-primary-foreground/90 font-light mb-8 md:mb-12"
            >
              <p>
                Ghana has made significant progress in strengthening
                tuberculosis prevention and treatment services.
              </p>
              <p>
                The country's successful scale-up of TB Preventive Treatment
                (TPT) and robust household contact-tracing systems provide a
                unique opportunity to expand support for vulnerable households
                affected by tuberculosis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-block"
            >
              <h3 className="font-serif text-2xl md:text-4xl font-bold text-accent px-6 md:px-8 py-5 md:py-6 border-2 border-accent/50 rounded-lg bg-black/10 backdrop-blur">
                Better Nutrition.
                <br className="md:hidden" /> Better Recovery.
                <br className="md:hidden" /> Better Health.
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="py-14 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Strategic Pillars
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-5 md:mb-6"></div>
            <p className="text-base md:text-lg text-muted-foreground">
              Five core objectives guiding the national conversation on
              integrating nutrition support into TB services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {[
              {
                icon: Shield,
                title: "Strengthen Evidence-Based Policy",
                desc: "Promote the use of research and implementation evidence to inform nutrition-sensitive tuberculosis policies and programmes.",
              },
              {
                icon: HeartPulse,
                title: "Advance Integrated Care",
                desc: "Support practical approaches for integrating nutrition assessment, counselling, and support into TB service delivery.",
              },
              {
                icon: Users,
                title: "Foster Strategic Partnerships",
                desc: "Create stronger collaboration between government, academia, development partners, healthcare providers, and communities.",
              },
              {
                icon: Lightbulb,
                title: "Generate Actionable Recommendations",
                desc: "Develop feasible, scalable recommendations capable of improving outcomes for individuals and families affected by tuberculosis.",
              },
              {
                icon: Activity,
                title: "Promote Sustainable Impact",
                desc: "Build a long-term ecosystem that supports nutrition-sensitive TB care across Ghana.",
              },
            ].map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow bg-card relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
                  <CardHeader>
                    <div className="w-12 md:w-14 h-12 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 text-primary">
                      <obj.icon size={26} />
                    </div>
                    <CardTitle className="font-serif text-lg md:text-xl">
                      {obj.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {obj.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-14 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-5 md:mb-8">
            Join the National Conversation
          </h2>
          <p className="text-base md:text-xl text-muted/80 mb-8 md:mb-12 font-light">
            Explore the workshop programme, meet the speakers, and reach out to
            the secretariat for any enquiries about the First National
            Stakeholder Consultation & Co-Design Workshop.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/workshop">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold"
                data-testid="button-programme-cta"
              >
                View Programme
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <a href="mailto:aasante-poku@noguchi.ug.edu.gh">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold border-muted/20 text-muted hover:bg-muted/10"
                data-testid="button-contact-cta"
              >
                Contact Organisers
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
