import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { ExternalLink } from "lucide-react";

import logoMoH from "@assets/ministry-of-health_1781523740610.jpg";
import logoGHS from "@assets/ghana-health-service_1781523740611.jpg";
import logoNoguchi from "@assets/noguchi-nmimr_1781523740609.jpg";
import logoUG from "@assets/university-of-ghana_1781523740610.jpg";
import logoBU from "@assets/boston-university_1781523740608.jpg";

// Redeploy

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const partners = [
  {
    logo: logoMoH,
    name: "Ministry of Health",
    subtitle: "Republic of Ghana",
    desc: "Providing national leadership for health policy and health sector coordination across Ghana.",
    country: "Ghana",
    color: "bg-red-50 border-red-200",
    accent: "text-primary",
    logoBg: "bg-white",
    website: "https://www.moh.gov.gh",
  },
  {
    logo: logoGHS,
    name: "Ghana Health Service",
    subtitle: "",
    desc: "Leading implementation of public health programmes and service delivery across Ghana.",
    country: "Ghana",
    color: "bg-green-50 border-green-200",
    accent: "text-green-800",
    logoBg: "bg-white",
    website: "https://www.ghs.gov.gh",
  },
  {
    logo: null,
    abbr: "NTCP",
    name: "National Tuberculosis Control Programme",
    subtitle: "",
    desc: "Providing strategic leadership for tuberculosis prevention, diagnosis, treatment, and care in Ghana.",
    country: "Ghana",
    color: "bg-amber-50 border-amber-200",
    accent: "text-amber-800",
    logoBg: "bg-amber-50",
    website: "https://www.ghs.gov.gh",
  },
  {
    logo: logoNoguchi,
    name: "Noguchi Memorial Institute for Medical Research",
    subtitle: "NMIMR · University of Ghana",
    desc: "A leading biomedical research institution advancing health research and innovation in Ghana and beyond.",
    country: "Ghana",
    color: "bg-blue-50 border-blue-200",
    accent: "text-blue-800",
    logoBg: "bg-white",
    website: "https://nmimr.ug.edu.gh",
  },
  {
    logo: logoUG,
    name: "University of Ghana",
    subtitle: "",
    desc: "Ghana's premier university and a key contributor to research, education, and policy development.",
    country: "Ghana",
    color: "bg-indigo-50 border-indigo-200",
    accent: "text-indigo-800",
    logoBg: "bg-white",
    website: "https://www.ug.edu.gh",
  },
  {
    logo: logoBU,
    name: "Boston University",
    subtitle:
      "Tuberculosis Interdisciplinary Approach to Research Alliance (TIARA)",
    desc: "Advancing multidisciplinary research and innovation to improve tuberculosis outcomes globally.",
    country: "USA",
    color: "bg-red-50 border-red-200",
    accent: "text-primary",
    logoBg: "bg-white",
    website:
      "https://www.bu.edu/sph/research/research-landing-page/tb-interdisciplinary-approach-to-research-alliance-tiara/",
  },
  {
    logo: logoBU,
    name: "Boston University",
    subtitle: "Global Health Nutrition Lab",
    desc: "Generating evidence and solutions to improve nutrition and health outcomes in diverse settings worldwide.",
    country: "USA",
    color: "bg-orange-50 border-orange-200",
    accent: "text-orange-800",
    logoBg: "bg-white",
    website:
      "https://sites.bu.edu/globalnutrition/our-team/",
  },
];

export default function Partners() {
  useSEO({
    title: "Partners & Collaborators | TB Nutrition Ghana",
    description:
      "Meet the national and international partners, research institutions, and government bodies collaborating to advance TB nutrition integration in Ghana.",
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
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">
              Collaboration
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 md:mb-6">
              Convening Partners
            </h1>
            <div className="w-20 h-1 bg-accent mb-6 md:mb-8" />
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              TB Nutrition Ghana is convened through the collaborative
              leadership of national and international institutions committed to
              advancing tuberculosis and nutrition outcomes in Ghana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PARTNER GRID */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8">
            {partners.map((partner, i) => (
              <motion.a
                key={i}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                className={`rounded-2xl border-2 p-6 md:p-8 ${partner.color} hover:shadow-xl transition-all group cursor-pointer block`}
              >
                {/* Logo area */}
                <div
                  className={`w-full h-28 md:h-32 rounded-xl ${partner.logoBg} border border-black/5 flex items-center justify-center mb-5 md:mb-6 overflow-hidden px-6 py-3`}
                >
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-1">
                      <span
                        className={`font-bold text-xl ${partner.accent} opacity-40 tracking-tight`}
                      >
                        {partner.abbr}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50">
                        Logo coming soon
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <span className="inline-block bg-white/80 text-xs font-bold uppercase tracking-widest px-2 py-1 rounded text-muted-foreground">
                    {partner.country}
                  </span>
                  <ExternalLink
                    size={14}
                    className="text-muted-foreground/40 group-hover:text-muted-foreground transition-colors"
                  />
                </div>

                <h3
                  className={`font-serif text-lg md:text-xl font-bold ${partner.accent} mb-1 leading-snug`}
                >
                  {partner.name}
                </h3>
                {partner.subtitle && (
                  <p className="text-sm font-semibold text-muted-foreground mb-2 md:mb-3">
                    {partner.subtitle}
                  </p>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed mt-2 md:mt-3">
                  {partner.desc}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATION STATEMENT */}
      <section className="py-14 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-1 bg-accent mx-auto mb-6 md:mb-8" />
            <blockquote className="font-serif text-2xl md:text-4xl font-bold italic text-white/90 mb-6 md:mb-8 leading-relaxed">
              "TB Nutrition Ghana brings together policymakers, programme
              managers, clinicians, researchers, development partners, and
              communities — unified by a common purpose."
            </blockquote>
            <p className="text-white/50 uppercase tracking-widest text-sm font-bold">
              Better Nutrition. Better Recovery. Better Health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BECOME A PARTNER */}
      <section className="py-14 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
              Get Involved
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-5 md:mb-6">
              Interested in Partnership?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              We welcome inquiries from institutions and organisations
              interested in contributing to the national conversation on
              integrating nutrition support into tuberculosis care.
            </p>
            <a
              href="mailto:aasante-poku@noguchi.ug.edu.gh"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 md:px-8 py-3.5 md:py-4 rounded-lg hover:bg-primary/90 transition-colors text-sm uppercase tracking-wide"
            >
              Contact the Secretariat
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
