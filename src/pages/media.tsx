import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import {
  FileText, Image, Video, Mic, Quote, BookOpen, Presentation, BookMarked, ClipboardList, X, ChevronLeft, ChevronRight,
} from "lucide-react";
import img1 from "@assets/IMG_2183.JPG_1781479894394.jpeg";
import img2 from "@assets/IMG_2184.JPG_1781479894393.jpeg";

const preEventPhotos = [
  { src: img1, caption: "Workshop Planning Consortium in discussion at the pre-event briefing dinner, Accra." },
  { src: img2, caption: "National and international partners engaging ahead of the workshop." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const resources = [
  {
    icon: FileText,
    title: "Press Releases",
    desc: "Official statements and media announcements from the convening partners and the secretariat.",
    status: "Coming Soon",
    color: "bg-red-50 border-red-100 text-primary",
  },
  {
    icon: Image,
    title: "Photo Gallery",
    desc: "Photography from the workshop and pre-event consortium briefing in Accra.",
    status: "Pre-Event Photos Available",
    color: "bg-amber-50 border-amber-100 text-amber-700",
  },
  {
    icon: Video,
    title: "Video Library",
    desc: "Recordings of keynote addresses, panel discussions, and event highlights.",
    status: "Coming Soon — Post Workshop",
    color: "bg-blue-50 border-blue-100 text-blue-700",
  },
  {
    icon: Mic,
    title: "Speaker Interviews",
    desc: "In-depth conversations with keynote speakers, panellists, and technical experts.",
    status: "Coming Soon — Post Workshop",
    color: "bg-purple-50 border-purple-100 text-purple-700",
  },
  {
    icon: Quote,
    title: "Picture Quotes",
    desc: "Shareable visual quotes from workshop participants and thought leaders.",
    status: "Coming Soon — Post Workshop",
    color: "bg-green-50 border-green-100 text-green-700",
  },
  {
    icon: BookOpen,
    title: "Workshop Communiqué",
    desc: "The official communiqué summarising key decisions, outcomes, and recommendations from the workshop.",
    status: "Coming Soon — Post Workshop",
    color: "bg-orange-50 border-orange-100 text-orange-700",
  },
  {
    icon: Presentation,
    title: "Presentations",
    desc: "Slide decks and presentation materials shared by speakers and technical experts.",
    status: "Coming Soon — Post Workshop",
    color: "bg-teal-50 border-teal-100 text-teal-700",
  },
  {
    icon: BookMarked,
    title: "Research Resources",
    desc: "Selected peer-reviewed studies, policy briefs, and evidence briefs on TB and nutrition.",
    status: "Coming Soon",
    color: "bg-indigo-50 border-indigo-100 text-indigo-700",
  },
  {
    icon: ClipboardList,
    title: "Technical Reports",
    desc: "Comprehensive technical reports and implementation guidance from the national consultation.",
    status: "Coming Soon — Post Workshop",
    color: "bg-rose-50 border-rose-100 text-rose-700",
  },
];

export default function Media() {
  useSEO({
    title: "Media Centre | TB Nutrition Ghana",
    description: "Press resources, photo gallery, and media materials from the TB Nutrition Ghana initiative and the First National Stakeholder Consultation Workshop.",
  });

  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i === null ? 0 : (i - 1 + preEventPhotos.length) % preEventPhotos.length));
  const next = () => setLightbox((i) => (i === null ? 0 : (i + 1) % preEventPhotos.length));

  const scrollToGallery = () => {
    document.getElementById("photo-gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* PAGE HEADER */}
      <section className="relative bg-foreground py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(30deg, hsl(var(--primary)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary)) 87.5%, hsl(var(--primary))), linear-gradient(150deg, hsl(var(--primary)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary)) 87.5%, hsl(var(--primary))), linear-gradient(30deg, hsl(var(--primary)) 12%, transparent 12.5%, transparent 87%, hsl(var(--primary)) 87.5%, hsl(var(--primary)))", backgroundSize: "60px 104px" }} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Media Centre</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 md:mb-6 leading-tight">
              Stories. Insights. Impact.
            </h1>
            <div className="w-20 h-1 bg-accent mb-6 md:mb-8" />
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Explore workshop highlights, interviews, presentations, reports, photographs, videos, and key resources documenting the national conversation on integrating nutrition support into tuberculosis services in Ghana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NOTICE BANNER */}
      <div className="bg-accent/20 border-y border-accent/30 py-3 md:py-4">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm font-semibold text-foreground"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
            The workshop takes place on <strong>18 June 2026</strong>. Media resources will be published progressively before, during, and after the event.
          </motion.p>
        </div>
      </div>

      {/* RESOURCE GRID */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Media Resources</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Resource Library</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-5 md:mb-6" />
            <p className="text-muted-foreground text-sm md:text-base">
              All resources will be made available here. Subscribe to our updates to be notified when new materials are published.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {resources.map(({ icon: Icon, title, desc, status, color }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`rounded-xl border-2 p-5 md:p-6 ${color.split(" ").slice(0, 2).join(" ")} hover:shadow-lg transition-all group ${title === "Photo Gallery" ? "cursor-pointer" : "cursor-default"}`}
                onClick={title === "Photo Gallery" ? scrollToGallery : undefined}
              >
                <div className="w-11 md:w-12 h-11 md:h-12 rounded-lg bg-white/60 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-white transition-colors">
                  <Icon className={color.split(" ")[2]} size={20} />
                </div>
                <h3 className="font-serif font-bold text-base md:text-lg text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3 md:mb-4">{desc}</p>
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-white/70 border border-white px-2 py-1 rounded text-muted-foreground">
                  {status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRE-EVENT PHOTO GALLERY */}
      <section id="photo-gallery" className="py-10 md:pb-18 md:pt-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 md:gap-4 mb-2">
              <div>
                <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Photo Gallery</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Pre-Event Meeting</h2>
              </div>
              <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-3 py-2 rounded-full self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {preEventPhotos.length} Photos
              </span>
            </div>
            <div className="w-16 h-1 bg-primary mb-4 md:mb-5" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              Workshop Planning Consortium dine in pre-event briefing in Accra — national and international partners convening ahead of the First National Stakeholder Consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {preEventPhotos.map((photo, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                onClick={() => setLightbox(i)}
                className={`relative overflow-hidden rounded-xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  i === 0 ? "col-span-1 row-span-1" : ""
                }`}
                data-testid={`gallery-photo-${i}`}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-44 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end">
                  <div className="w-full p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-medium leading-snug line-clamp-2">{photo.caption}</p>
                  </div>
                </div>
                <div className="absolute top-2 md:top-3 right-2 md:right-3 w-7 md:w-8 h-7 md:h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={preEventPhotos[lightbox].src}
                alt={preEventPhotos[lightbox].caption}
                className="w-full max-h-[70vh] object-contain rounded-xl"
              />

              <div className="mt-3 md:mt-4 text-center">
                <p className="text-white/80 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
                  {preEventPhotos[lightbox].caption}
                </p>
                <p className="text-white/40 text-xs mt-2 uppercase tracking-widest font-bold">
                  {lightbox + 1} / {preEventPhotos.length}
                </p>
              </div>

              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 md:-top-12 right-0 w-8 md:w-9 h-8 md:h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                data-testid="button-lightbox-close"
              >
                <X size={16} />
              </button>

              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 md:-translate-x-14 w-8 md:w-10 h-8 md:h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
                data-testid="button-lightbox-prev"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 md:translate-x-14 w-8 md:w-10 h-8 md:h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
                data-testid="button-lightbox-next"
              >
                <ChevronRight size={20} />
              </button>

              <div className="flex gap-1.5 md:gap-2 justify-center mt-4 md:mt-5">
                {preEventPhotos.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(i)}
                    className={`w-10 md:w-12 h-7 md:h-9 rounded overflow-hidden flex-shrink-0 transition-all ${
                      i === lightbox ? "ring-2 ring-white scale-110" : "opacity-50 hover:opacity-80"
                    }`}
                    data-testid={`button-lightbox-thumb-${i}`}
                  >
                    <img src={photo.src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PRESS CONTACT */}
      <section className="py-14 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} className="bg-primary rounded-2xl p-7 md:p-10 text-primary-foreground relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-bl-[120px]" />
              <div className="relative z-10">
                <p className="text-accent font-bold uppercase tracking-widest text-xs mb-3">Media Enquiries</p>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 md:mb-4">Press & Media Contact</h2>
                <p className="text-primary-foreground/80 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                  For all press enquiries, interview requests, and media accreditation, please contact the workshop secretariat directly.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">Secretariat Email</p>
                    <a href="mailto:aasante-poku@noguchi.ug.edu.gh" className="text-white font-medium hover:underline break-all text-sm md:text-base">
                      aasante-poku@noguchi.ug.edu.gh
                    </a>
                  </div>
                  <div>
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">Telephone</p>
                    <a href="tel:+233541359112" className="text-white font-medium hover:underline text-sm md:text-base">
                      +233-541-359-112
                    </a>
                  </div>
                  <div>
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">Co-Chair Email</p>
                    <a href="mailto:hmavedzi@bu.edu" className="text-white font-medium hover:underline break-all text-sm md:text-base">
                      hmavedzi@bu.edu
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
