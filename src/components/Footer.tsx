import { Link } from "wouter";
import LogoMark from "./LogoMark";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-border/10">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-4">
              <LogoMark size={150} dark />
              <div className="hidden">
                <h2 className="font-serif font-bold text-xl leading-none text-white">TB Nutrition</h2>
                <p className="text-sm font-medium text-white/70 tracking-widest uppercase">Ghana</p>
              </div>
            </div>
            <p className="text-white/60 font-serif italic text-lg">
              "Nourishing Recovery. Strengthening TB Care."
            </p>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed">
              A national multi-stakeholder platform advancing the integration of nutrition support into tuberculosis prevention, treatment, and care services in Ghana.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-5 uppercase tracking-wider text-sm">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/workshop" className="text-white/60 hover:text-white transition-colors">Workshop</Link></li>
              <li><Link href="/partners" className="text-white/60 hover:text-white transition-colors">Partners</Link></li>
              <li><Link href="/media" className="text-white/60 hover:text-white transition-colors">Media Centre</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-5 uppercase tracking-wider text-sm">Event Details</h3>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex gap-3">
                <span className="text-primary font-bold">Date</span>
                <span>18 June 2026</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">Venue</span>
                <span>Labadi Beach Hotel, Accra</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">Format</span>
                <span>In-Person</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 md:mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} TB Nutrition Ghana. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <p className="text-white/30 text-xs">
              Powered by <span className="font-semibold text-white/50">CIVIQ REPUBLIQ&copy;</span>
            </p>
            <span className="hidden sm:block text-white/20 text-xs">·</span>
            <p className="text-white/30 text-xs">
              Built by{" "}
              <a
                href="https://amenyuie-tamakloe-israel.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/50 hover:text-accent transition-colors underline underline-offset-2"
              >
                iAmTamakloe
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
