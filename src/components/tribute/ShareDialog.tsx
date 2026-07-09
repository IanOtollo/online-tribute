import { QRCodeSVG } from "qrcode.react";
import { Copy, Share2, X, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export function ShareDialog() {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let base = window.location.origin;
      if (base.includes('localhost') || base.includes('127.0.0.1') || base.includes('192.168') || base.includes('0.0.0.0')) {
        base = 'https://onlinetribute.vercel.app';
      }
      setUrl(`${base}${window.location.pathname}${window.location.search}`);
    }
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const shareText = language === "sw" ? "Shiriki Kumbukumbu" : "Share Memorial";
  const shareSave = language === "sw" ? "Shiriki na Hifadhi" : "Share & Save";
  const keepClose = language === "sw" ? "Weka kumbukumbu hii karibu" : "Keep this memorial close";
  const desc = language === "sw" 
    ? "Changanua msimbo na kamera ya simu kufungua. Unaweza kuhifadhi ukurasa kwenye simu yako kama kumbukumbu."
    : "Scan the code with a phone camera to open the tribute. Once opened, the page may be saved to a home screen for keepsake access.";
  const copiedText = language === "sw" ? "Imenakiliwa" : "Copied";
  const copyText = language === "sw" ? "Nakili" : "Copy";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-2 border border-ink/15 bg-paper px-4 py-2.5 font-serif text-[10px] uppercase tracking-[0.28em] text-ink transition-colors hover:border-brass hover:text-brass"
      >
        <Share2 className="h-3 w-3" />
        {shareText}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 px-4 backdrop-blur-sm animate-fade-slow"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md border border-hairline bg-paper p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-ink-muted hover:text-ink"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-6">
              <p className="font-serif text-[10px] uppercase tracking-[0.3em] text-brass">
                {shareSave}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-ink">
                {keepClose}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {desc}
              </p>
            </div>

            <div className="flex justify-center border border-hairline bg-vellum/40 p-6">
              {url && (
                <QRCodeSVG
                  value={url}
                  size={200}
                  level="M"
                  bgColor="transparent"
                  fgColor="#1c1c1a"
                />
              )}
            </div>

            <div className="mt-6 flex items-center gap-2 border border-hairline bg-vellum/30 py-2 pl-3 pr-1">
              <input
                readOnly
                value={url}
                className="flex-1 truncate bg-transparent text-xs text-ink-soft focus:outline-none"
              />
              <button
                onClick={copy}
                className="flex items-center gap-1.5 bg-ink px-3 py-1.5 font-serif text-[9px] uppercase tracking-[0.25em] text-paper hover:bg-brass"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3" /> {copiedText}
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" /> {copyText}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
