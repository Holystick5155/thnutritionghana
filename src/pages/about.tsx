import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import workshopFlyer from "@assets/artwork.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function About() {
  useSEO({
    title: "About the Initiative | TB Nutrition Ghana",
    description:
      "Learn about Ghana's national effort to integrate nutrition support into tuberculosis prevention, treatment, and care services — the evidence base, the goals, and the people driving change.",
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
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill="white"
              d="M42.7,-65.2C54.9,-56.1,64,-42.8,70.3,-28.1C76.7,-13.4,80.3,2.7,76.4,16.7C72.5,30.7,61,42.5,48.1,51.8C35.1,61.1,20.6,68,4.4,70.2C-11.9,72.4,-29.9,70,-44.3,61.3C-58.7,52.7,-69.4,37.8,-73.7,21.2C-78,4.7,-75.8,-13.5,-67.5,-27.7C-59.1,-41.9,-44.6,-52.1,-30.1,-60.4C-15.6,-68.8,-1,-75.4,13.3,-75.5C27.7,-75.6,30.5,-74.2,42.7,-65.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">
              About the Platform
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 md:mb-6">
              About TB Nutrition Ghana
            </h1>
            <div className="w-20 h-1 bg-accent mb-6 md:mb-8" />
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
              A national platform dedicated to advancing the integration of
              nutrition support into tuberculosis prevention, treatment, and
              care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ABOUT BODY */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.div
              {...fadeUp}
              className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                <strong className="text-foreground">TB Nutrition Ghana</strong>{" "}
                is a national platform dedicated to advancing the integration of
                nutrition support into tuberculosis prevention, treatment, and
                care.
              </p>
              <p>
                The platform brings together researchers, policymakers, health
                professionals, development partners, civil society
                organizations, and communities to strengthen collaboration and
                improve health outcomes for people affected by tuberculosis.
              </p>
              <p>
                The initiative is being launched through the{" "}
                <em>
                  First National Stakeholder Consultation and Co-Design Workshop
                  on Integrating Nutrition Support into Tuberculosis Services in
                  Ghana
                </em>
                .
              </p>
              <p>
                The platform recognizes that effective tuberculosis care extends
                beyond diagnosis and treatment. Nutritional wellbeing is
                fundamental to recovery, treatment adherence, resilience, and
                long-term health.
              </p>
              <p>
                Through evidence generation, stakeholder engagement, policy
                dialogue, knowledge sharing, and implementation innovation, TB
                Nutrition Ghana seeks to contribute to a future where nutrition
                support is fully integrated into comprehensive TB care.
              </p>
            </motion.div>

            <div className="space-y-6 md:space-y-8">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[80px]" />
                <div className="relative z-10">
                  <div className="w-10 h-1 bg-accent mb-4" />
                  <h3 className="font-serif text-xl md:text-2xl font-bold mb-4">
                    Our Vision
                  </h3>
                  <p className="text-primary-foreground/90 leading-relaxed font-serif italic text-base md:text-lg">
                    "A Ghana where every person affected by tuberculosis has
                    access to comprehensive, nutrition-sensitive care that
                    supports recovery, wellbeing, and long-term health."
                  </p>
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative bg-accent/10 border border-accent/30 rounded-2xl p-6 md:p-8 overflow-hidden"
              >
                <div className="w-10 h-1 bg-primary mb-4" />
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-4 text-foreground">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  To advance evidence-informed policies, partnerships, and
                  practical solutions that integrate nutrition support into
                  tuberculosis prevention, treatment, and care across Ghana.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM PILLARS */}
      <section className="py-14 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
          >
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
              What We Do
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Approach
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                num: "01",
                title: "Evidence Generation",
                desc: "Building the research base that informs evidence-driven nutrition-sensitive TB policies and programmes across Ghana.",
              },
              {
                num: "02",
                title: "Stakeholder Engagement",
                desc: "Convening policymakers, health professionals, researchers, civil society, and communities in sustained national dialogue.",
              },
              {
                num: "03",
                title: "Policy Dialogue",
                desc: "Creating space for translating research evidence into practical, scalable policy recommendations and programme reforms.",
              },
              {
                num: "04",
                title: "Knowledge Sharing",
                desc: "Disseminating insights, innovations, and implementation learnings across the national and global health community.",
              },
              {
                num: "05",
                title: "Implementation Innovation",
                desc: "Piloting and scaling practical integration models that fit within Ghana's existing TB service delivery infrastructure.",
              },
              {
                num: "06",
                title: "Partnership Building",
                desc: "Strengthening cross-sector collaboration to build the coalition needed for sustained, nationwide impact.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl p-5 md:p-6 border border-border hover:shadow-lg transition-shadow group"
              >
                <div className="font-serif text-4xl md:text-5xl font-bold text-primary/15 group-hover:text-primary/25 transition-colors mb-2 md:mb-3 leading-none">
                  {item.num}
                </div>
                <h4 className="font-serif font-bold text-base md:text-lg text-foreground mb-2 md:mb-3">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP FLYER */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-5xl mx-auto">
            <img
              src={workshopFlyer}
              alt="The 1st National Stakeholder Consultation and Co-Design Workshop on Integrating Nutrition into Tuberculosis Services in Ghana — 18 June 2026, Labadi Beach Hotel, Accra"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="flex flex-col sm:flex-row gap-3 mt-5 justify-center">
              <a
                href={workshopFlyer}
                download="TB-Nutrition-Ghana-Workshop-Flyer.jpg"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Flyer
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "TB Nutrition Ghana — 18 June 2026",
                      text: "The 1st National Stakeholder Consultation & Co-Design Workshop on Integrating Nutrition into Tuberculosis Services in Ghana. Thursday 18 June 2026, Labadi Beach Hotel, Accra.",
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary font-semibold text-sm px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                Share Event
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
