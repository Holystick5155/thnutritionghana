import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, CheckCircle, Trash2, ExternalLink, Eye, EyeOff, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PIN = "tbnghana2026";
const STORAGE_EMBED = "tbng_form_embed_url";
const STORAGE_DIRECT = "tbng_form_direct_url";

function PinGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const attempt = () => {
    if (value === PIN) {
      onUnlock();
    } else {
      setError(true);
      setValue("");
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-2xl shadow-xl p-8 w-full max-w-sm text-center"
      >
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
          <Lock className="text-primary" size={24} />
        </div>
        <h1 className="font-serif text-2xl font-bold text-foreground mb-1">Admin Access</h1>
        <p className="text-muted-foreground text-sm mb-6">Enter the admin PIN to continue.</p>

        <form onSubmit={(e) => { e.preventDefault(); attempt(); }}>
          <div className="relative mb-4">
            <input
              type={show ? "text" : "password"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter PIN"
              className={`w-full border rounded-xl px-4 py-3 text-base text-center tracking-widest pr-12 outline-none transition-colors ${
                error
                  ? "border-destructive bg-destructive/5 text-destructive"
                  : "border-border bg-background focus:border-primary"
              }`}
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              tabIndex={-1}
            >
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-destructive text-xs font-semibold mb-3 flex items-center justify-center gap-1"
              >
                <AlertCircle size={12} /> Incorrect PIN
              </motion.p>
            )}
          </AnimatePresence>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
          >
            Unlock
          </Button>
        </form>
      </motion.div>
    </div>
  );
}

export default function Admin() {
  const [unlocked, setUnlocked] = useState(false);
  const [embedUrl, setEmbedUrl] = useState("");
  const [directUrl, setDirectUrl] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (unlocked) {
      setEmbedUrl(localStorage.getItem(STORAGE_EMBED) ?? "");
      setDirectUrl(localStorage.getItem(STORAGE_DIRECT) ?? "");
    }
  }, [unlocked]);

  const save = () => {
    localStorage.setItem(STORAGE_EMBED, embedUrl.trim());
    localStorage.setItem(STORAGE_DIRECT, directUrl.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const clear = () => {
    localStorage.removeItem(STORAGE_EMBED);
    localStorage.removeItem(STORAGE_DIRECT);
    setEmbedUrl("");
    setDirectUrl("");
  };

  const isActive = embedUrl.trim().length > 0;

  if (!unlocked) return <PinGate onUnlock={() => setUnlocked(true)} />;

  return (
    <div className="min-h-screen bg-secondary/30 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Lock className="text-primary" size={16} />
            </div>
            <p className="text-primary font-bold uppercase tracking-widest text-xs">Admin Panel</p>
          </div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Registration Form Settings</h1>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            Paste your Google Form URLs below. Once saved, the Register page will show the embedded form automatically. No code change required.
          </p>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 ${
            isActive
              ? "bg-green-100 text-green-700 border border-green-200"
              : "bg-secondary text-muted-foreground border border-border"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-green-500" : "bg-muted-foreground"}`} />
          {isActive ? "Form Active" : "Form Not Yet Set"}
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-card border border-border rounded-2xl shadow-sm p-6 md:p-8 space-y-6"
        >
          {/* How-to guide */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs text-blue-800 leading-relaxed space-y-1">
            <p className="font-bold uppercase tracking-wide text-blue-900 mb-1.5">How to get your Google Form URLs</p>
            <p><strong>Embed URL:</strong> Open your form in Google Forms → click Send → click the embed icon (&lt;&nbsp;&gt;) → copy the URL from the <code className="bg-blue-100 px-1 rounded">src="…"</code> attribute.</p>
            <p><strong>Direct URL:</strong> Same Send menu → click the link icon → copy the URL. This opens the form in a new tab.</p>
          </div>

          {/* Embed URL */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
              Google Form Embed URL <span className="text-primary">*</span>
            </label>
            <input
              type="url"
              value={embedUrl}
              onChange={(e) => setEmbedUrl(e.target.value)}
              placeholder="https://docs.google.com/forms/d/e/XXXX/viewform?embedded=true"
              className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background outline-none focus:border-primary transition-colors font-mono"
            />
            <p className="text-xs text-muted-foreground mt-1.5">Required — activates the embedded form on the Register page.</p>
          </div>

          {/* Direct URL */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
              Direct Form URL <span className="text-muted-foreground/50">(optional)</span>
            </label>
            <input
              type="url"
              value={directUrl}
              onChange={(e) => setDirectUrl(e.target.value)}
              placeholder="https://forms.gle/XXXX"
              className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background outline-none focus:border-primary transition-colors font-mono"
            />
            <p className="text-xs text-muted-foreground mt-1.5">Adds an "Open in new tab" link beside the embedded form.</p>
          </div>

          {/* Preview link */}
          {embedUrl.trim() && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex items-center gap-2 text-xs text-primary font-semibold"
            >
              <CheckCircle size={14} />
              Embed URL set.{" "}
              <a href="/register" className="underline underline-offset-2 hover:opacity-80 inline-flex items-center gap-1">
                Preview Register page <ExternalLink size={11} />
              </a>
            </motion.div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 border-t border-border">
            <Button
              onClick={save}
              className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              {saved ? (
                <span className="flex items-center gap-2">
                  <CheckCircle size={16} /> Saved!
                </span>
              ) : (
                "Save Settings"
              )}
            </Button>
            <Button
              variant="outline"
              onClick={clear}
              className="flex items-center gap-2 text-destructive border-destructive/30 hover:bg-destructive/5"
            >
              <Trash2 size={15} />
              Clear URLs
            </Button>
          </div>
        </motion.div>

        {/* Security note */}
        <p className="text-center text-xs text-muted-foreground mt-6 leading-relaxed">
          Settings are stored in this browser only. Each team member needs to enter them once on their own device, or set the URLs directly in{" "}
          <code className="bg-secondary px-1 py-0.5 rounded text-primary font-mono">src/pages/register.tsx</code> for a permanent fix.
        </p>
      </div>
    </div>
  );
}
