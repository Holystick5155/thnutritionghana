import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EVENT_DATE = new Date("2026-06-18T09:00:00+00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, started: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    started: false,
  };
}

function Digit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <motion.div
          key={display}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-black/25 backdrop-blur border border-white/15 rounded-lg px-4 py-3 min-w-[64px] text-center"
        >
          <span className="font-serif font-bold text-3xl md:text-4xl text-white tabular-nums leading-none">
            {display}
          </span>
        </motion.div>
      </div>
      <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-white/50">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (time.started) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/40 rounded-full">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span className="text-sm font-bold text-white uppercase tracking-widest">
          Workshop in Progress — 18 June 2026
        </span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="flex flex-col gap-3"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-white/50">
        Time to the workshop
      </p>
      <div className="flex items-start gap-3">
        <Digit value={time.days} label="Days" />
        <span className="font-serif font-bold text-2xl text-white/40 mt-3">
          :
        </span>
        <Digit value={time.hours} label="Hours" />
        <span className="font-serif font-bold text-2xl text-white/40 mt-3">
          :
        </span>
        <Digit value={time.minutes} label="Mins" />
        <span className="font-serif font-bold text-2xl text-white/40 mt-3">
          :
        </span>
        <Digit value={time.seconds} label="Secs" />
      </div>
    </motion.div>
  );
}
