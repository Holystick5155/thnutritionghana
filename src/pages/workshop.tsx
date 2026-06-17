import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Award,
  CheckCircle,
  Mic,
  LayoutGrid,
} from "lucide-react";
import chairAdwoa from "@assets/co-chair-adwoa.jpeg";
import chairBernard from "@assets/co-chair-bernard.jpeg";
import speakerMeredith from "@assets/speaker-meredith.jpeg";
import speakerSeth from "@assets/speaker-seth.png";
import logoNoguchi from "@assets/noguchi-nmimr_1781523740609.jpg";
import logoUG from "@assets/university-of-ghana_1781523740610.jpg";
import logoBU from "@assets/boston-university_1781523740608.jpg";
import logoUNICEF from "@assets/unicef.png";
import workshopFlyer from "@assets/artwork.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const details = [
  { icon: Calendar, label: "Date", value: "Thursday, 18 June 2026" },
  { icon: Clock, label: "Time", value: "9:00 AM – 4:00 PM (GMT)" },
  { icon: MapPin, label: "Venue", value: "Labadi Beach Hotel, Accra, Ghana" },
  {
    icon: Users,
    label: "Format",
    value: "In-Person; Plenary, Panel & Co-Design Breakout Sessions",
  },
];

const outcomes = [
  "Identify opportunities for integrating nutrition support into TB services.",
  "Assess existing policy and programme environments.",
  "Explore implementation pathways and operational models.",
  "Strengthen cross-sector collaboration.",
  "Develop actionable recommendations for national consideration.",
  "Establish foundations for future partnership and learning.",
];

const keynotes = [
  {
    photo: speakerSeth,
    name: "Prof. Seth Adu-Afarwuah",
    role: "Keynote Speaker",
    tag: "Nutrition Science & Research",
    org: "Department of Nutrition and Food Science, University of Ghana",
    bgColor: "bg-emerald-50",
    accentColor: "border-primary/30",
    labelColor: "text-primary",
  },
  {
    photo: chairBernard,
    name: "Dr. Bernard Ziem",
    role: "Keynote Speaker",
    tag: "TB Programme Leadership",
    org: "National TB Control Programme, Ghana Health Service",
    bgColor: "bg-amber-50",
    accentColor: "border-amber-300/50",
    labelColor: "text-amber-700",
  },
  {
    photo: speakerMeredith,
    name: "Dr. Meredith Brooks",
    role: "Keynote Speaker",
    tag: "Global Health Nutrition",
    org: "Boston University School of Public Health",
    bgColor: "bg-blue-50",
    accentColor: "border-blue-300/50",
    labelColor: "text-blue-700",
  },
];

const panellists = [
  {
    logo: logoNoguchi,
    tag: "Research",
    org: "Noguchi Memorial Institute for Medical Research",
  },
  { logo: logoUG, tag: "Academia", org: "University of Ghana" },
  { logo: logoBU, tag: "TB Research", org: "Boston University TIARA" },
  { logo: logoUNICEF, tag: "UN Development Partner", org: "UNICEF Ghana" },
  {
    logo: null,
    logoLabel: "Global Fund",
    tag: "Development Partnerships",
    org: "Global Fund Country Office",
  },
  // {
  //   logo: null,
  //   logoLabel: "TBA",
  //   tag: "Health Systems",
  //   org: "To Be Announced",
  // },
];

const chairs = [
  {
    name: "Prof. Adwoa Asante-Poku",
    role: "Workshop Co-Chair",
    org: "Noguchi Memorial Institute for Medical Research",
    email: "aasante-poku@noguchi.ug.edu.gh",
    photo: chairAdwoa,
  },
  {
    name: "Dr. Bernard Ziem",
    credentials: "BSc. MBChB, MSc.IH, MGCP",
    role: "Workshop Co-Chair / National TB Control Programme Manager",
    org: "Ghana Health Service",
    email: "bernard@ghs.gov.gh",
    photo: chairBernard,
  },
  {
    name: "Dr. Meredith Brooks",
    credentials: null,
    role: "Workshop Co-Chair",
    org: "Boston University School of Public Health",
    email: null,
    photo: speakerMeredith,
  },
];

export default function Workshop() {
  useSEO({
    title: "Workshop Programme | TB Nutrition Ghana",
    description:
      "Full programme for the First National Stakeholder Consultation & Co-Design Workshop on Integrating Nutrition Support into Tuberculosis Services in Ghana — 18 June 2026, Labadi Beach Hotel, Accra.",
  });

  return (
    <div className="w-full">
      {/* PAGE HEADER */}
      <section className="relative bg-foreground py-16 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%), linear-gradient(-45deg, hsl(var(--primary)) 25%, transparent 25%)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">
              National Convening
            </p>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 md:mb-6 leading-tight">
              The First National Stakeholder Consultation & Co-Design Workshop
            </h1>
            <div className="w-20 h-1 bg-accent mb-6 md:mb-8" />
            <p className="text-white/70 text-lg md:text-xl font-light">
              Integrating Nutrition Support into Tuberculosis Services in Ghana
            </p>
          </motion.div>
        </div>
      </section>

      {/* WORKSHOP FLYER */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
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

      {/* EVENT DETAILS CARDS */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 -mt-8 relative z-10">
            {details.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-xl p-5 md:p-6 shadow-lg"
              >
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <Icon className="text-primary" size={20} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5 md:mb-2">
                  {label}
                </p>
                <p className="font-serif font-semibold text-foreground text-base md:text-lg leading-snug">
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP OVERVIEW */}
      <section className="py-14 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.div {...fadeUp}>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                Overview
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-5 md:mb-6">
                Workshop Overview
              </h2>
              <div className="w-16 h-1 bg-accent mb-6 md:mb-8" />
              <div className="space-y-4 md:space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
                <p>
                  The workshop convenes key national and international
                  stakeholders to explore opportunities for integrating
                  nutrition support into tuberculosis services in Ghana.
                </p>
                <p>
                  Participants include policymakers, development partners,
                  researchers, clinicians, programme managers, and technical
                  experts working across tuberculosis, nutrition, public health,
                  and health systems strengthening.
                </p>
                <p>
                  The workshop adopts a{" "}
                  <strong className="text-foreground">
                    collaborative co-design approach
                  </strong>
                  , enabling participants to identify implementation pathways,
                  assess system readiness, and develop practical recommendations
                  to inform policy and programme delivery.
                </p>
                <p>
                  Approximately 30 senior stakeholders and technical experts
                  will participate from the Ghana Health Service, Ministry of
                  Health, University of Ghana, NMIMR, Boston University, UNICEF
                  Ghana, the Global Fund Country Office, and other invited
                  partners.
                </p>
              </div>
            </motion.div>

            {/* Expected Outcomes */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-primary rounded-2xl p-6 md:p-8 text-primary-foreground relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-[100px]" />
                <p className="text-accent font-bold uppercase tracking-widest text-xs mb-3">
                  By the End of the Workshop
                </p>
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-6 md:mb-8">
                  Expected Outcomes
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {outcomes.map((outcome, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle
                        className="text-accent mt-0.5 flex-shrink-0"
                        size={18}
                      />
                      <span className="text-primary-foreground/90 leading-relaxed text-sm md:text-base">
                        {outcome}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="py-8 md:py-16 bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            className="flex flex-col md:flex-row items-center gap-5 md:gap-6 max-w-4xl mx-auto text-center md:text-left"
          >
            <div className="flex-shrink-0 w-14 md:w-16 h-14 md:h-16 rounded-full bg-accent/20 border-2 border-accent/40 flex items-center justify-center">
              <Award className="text-accent-foreground" size={26} />
            </div>
            <div>
              <h3 className="font-serif text-lg md:text-xl font-bold text-foreground mb-2">
                Recognition
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                A formal{" "}
                <strong className="text-foreground">
                  certificate of appreciation
                </strong>{" "}
                will be presented to all speakers and participants.{" "}
                <strong className="text-foreground">CPD points</strong> are
                pending approval for eligible healthcare professionals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WORKSHOP CO-CHAIRS */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-10 md:mb-16">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
              Leadership
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Workshop Co-Chairs
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 max-w-4xl mx-auto">
            {chairs.map((chair, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-secondary/30 rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-20 md:w-24 h-20 md:h-24 rounded-full overflow-hidden border-4 border-primary/20 mb-4 md:mb-5 flex-shrink-0">
                  <img
                    src={chair.photo}
                    alt={chair.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h4 className="font-serif text-lg md:text-xl font-bold text-foreground mb-1">
                  {chair.name}
                </h4>
                {chair.credentials && (
                  <p className="text-xs text-muted-foreground mb-2">
                    {chair.credentials}
                  </p>
                )}
                <p className="text-primary font-semibold text-sm mb-1">
                  {chair.role}
                </p>
                <p className="text-muted-foreground text-sm mb-3 md:mb-4">
                  {chair.org}
                </p>
                <a
                  href={`mailto:${chair.email}`}
                  className="text-xs text-primary/70 hover:text-primary transition-colors break-all"
                >
                  {chair.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMME / AGENDA */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
          >
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
              18 June 2026
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Programme at a Glance
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-5 md:mb-6" />
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              The workshop runs from 9:00 AM to 4:00 PM. The detailed programme
              will be circulated to registered participants ahead of the event.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[110px] top-0 bottom-0 w-px bg-border hidden sm:block" />

            {[
              {
                time: "9:00 AM",
                type: "arrival",
                title: "Registration & Welcome Coffee",
                desc: "Participants arrive, register, and network informally over refreshments.",
                color: "bg-secondary text-secondary-foreground",
                dot: "bg-border",
              },
              {
                time: "9:30 AM",
                type: "plenary",
                title: "Opening Ceremony",
                desc: "Welcome addresses from convening partners and national programme leadership. Scene-setting on the TB-nutrition agenda in Ghana.",
                color: "bg-primary text-primary-foreground",
                dot: "bg-primary",
                badge: "Plenary",
              },
              {
                time: "10:00 AM",
                type: "keynote",
                title: "Keynote Addresses",
                desc: "High-level presentations from national and international experts on the evidence base, global recommendations, and Ghana's unique opportunity.",
                color: "bg-foreground text-background",
                dot: "bg-foreground",
                badge: "Keynote",
              },
              {
                time: "11:00 AM",
                type: "panel",
                title: "Panel Discussion — Evidence & Policy Landscape",
                desc: "Cross-sector dialogue exploring the current policy and programme environment for TB-nutrition integration in Ghana.",
                color: "bg-accent/20 text-foreground",
                dot: "bg-accent",
                badge: "Panel",
              },
              {
                time: "12:00 PM",
                type: "break",
                title: "Lunch Break",
                desc: "Informal networking and refreshments.",
                color: "bg-secondary text-secondary-foreground",
                dot: "bg-border",
              },
              {
                time: "1:00 PM",
                type: "breakout",
                title: "Co-Design Breakout Sessions",
                desc: "Participants work in facilitated groups to identify implementation pathways, assess system readiness, and draft actionable recommendations.",
                color: "bg-primary text-primary-foreground",
                dot: "bg-primary",
                badge: "Co-Design",
              },
              {
                time: "3:00 PM",
                type: "plenary",
                title: "Plenary — Report-Back & Synthesis",
                desc: "Breakout groups present findings. Facilitators synthesise key themes, consensus points, and priority recommendations.",
                color: "bg-foreground text-background",
                dot: "bg-foreground",
                badge: "Plenary",
              },
              {
                time: "3:45 PM",
                type: "close",
                title: "Closing Remarks & Next Steps",
                desc: "Summary of outcomes, commitments, and forward plans. Certificates of appreciation presented to all speakers and participants.",
                color: "bg-accent/20 text-foreground",
                dot: "bg-accent",
              },
              {
                time: "4:00 PM",
                type: "end",
                title: "Close of Workshop",
                desc: "",
                color: "bg-secondary text-secondary-foreground",
                dot: "bg-border",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="flex gap-0 sm:gap-6 mb-4 md:mb-5 items-start"
              >
                <div className="hidden sm:flex flex-col items-end w-[102px] flex-shrink-0 pt-3">
                  <span className="text-xs font-bold text-muted-foreground tabular-nums">
                    {item.time}
                  </span>
                </div>

                <div className="hidden sm:flex flex-col items-center flex-shrink-0 relative z-10 mt-3.5">
                  <div
                    className={`w-3.5 h-3.5 rounded-full ring-2 ring-background ${item.dot} flex-shrink-0`}
                  />
                </div>

                <div
                  className={`flex-1 rounded-xl px-4 md:px-5 py-3.5 md:py-4 ${item.color} ${item.desc ? "" : "py-3"}`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="sm:hidden text-[10px] font-bold uppercase tracking-widest opacity-60">
                      {item.time}
                    </span>
                    {item.badge && (
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/20 backdrop-blur">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif font-bold text-sm md:text-base leading-snug">
                    {item.title}
                  </h4>
                  {item.desc && (
                    <p className="text-xs md:text-sm mt-1.5 opacity-80 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeUp}
            className="text-center text-xs text-muted-foreground mt-8 md:mt-10 italic"
          >
            Programme is indicative and subject to revision. Registered
            participants will receive the confirmed agenda in advance.
          </motion.p>
        </div>
      </section>

      {/* SPEAKERS & PRESENTERS */}
      <section className="py-14 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            className="text-center max-w-2xl mx-auto mb-6"
          >
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
              Programme
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Speakers &amp; Presenters
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-5 md:mb-6" />
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              The workshop convenes senior national and international voices
              across tuberculosis, nutrition, health systems, and policy.
              Speaker details will be confirmed and published here shortly.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="max-w-xl mx-auto mb-10 md:mb-16 items-center gap-3 bg-accent/10 border border-accent/30 rounded-xl px-5 py-3 justify-center hidden"
          >
            {/* flex */}
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
            <p className="text-sm font-semibold text-foreground">
              Full speaker list to be announced. Confirmed names will appear
              below.
            </p>
          </motion.div>

          {/* KEYNOTE SPEAKERS */}
          <div className="mb-10 md:mb-16">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mic className="text-primary" size={18} />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                Keynote Speakers
              </h3>
              <div className="flex-1 h-px bg-border ml-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {keynotes.map((speaker, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`${speaker.bgColor} rounded-2xl p-5 md:p-6 border-2 ${speaker.accentColor} group hover:shadow-xl transition-all`}
                >
                  <div className="w-20 md:w-24 h-20 md:h-24 rounded-full overflow-hidden border-2 border-white shadow-md mx-auto mb-4 md:mb-5">
                    <img
                      src={speaker.photo}
                      alt={speaker.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="text-center mb-3">
                    <span
                      className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/70 ${speaker.labelColor}`}
                    >
                      {speaker.role}
                    </span>
                  </div>

                  <div className="text-center mb-1">
                    <p className="font-serif font-bold text-foreground text-base leading-snug">
                      {speaker.name}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/40 text-center space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                      {speaker.tag}
                    </p>
                    <p className="text-xs text-muted-foreground font-medium">
                      {speaker.org}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* PANELLISTS */}
          <div>
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <LayoutGrid className="text-primary" size={18} />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                Panellists &amp; Technical Experts
              </h3>
              <div className="flex-1 h-px bg-border ml-2" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {panellists.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="bg-card border border-border rounded-xl p-3 md:p-4 flex flex-col items-center text-center gap-2 md:gap-3 hover:shadow-lg transition-all group"
                >
                  <div className="w-16 md:w-20 h-16 md:h-20 rounded-xl bg-white border border-border flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:shadow-md transition-shadow p-1.5">
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={p.org}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-[10px] font-bold text-center leading-tight text-muted-foreground px-1">
                        {p.logoLabel}
                      </span>
                    )}
                  </div>

                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary/70 bg-primary/5 px-2 py-0.5 rounded-full">
                    {p.tag}
                  </span>
                  <p className="text-[10px] text-muted-foreground leading-tight">
                    {p.org}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
