import { useLanguage } from "@/lib/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-paper/50 rounded-full p-1 border border-hairline backdrop-blur-sm shadow-sm pointer-events-auto">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-xs font-serif tracking-widest transition-colors ${
          language === "en" ? "bg-ink text-paper" : "text-ink-muted hover:text-ink"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("sw")}
        className={`px-3 py-1 rounded-full text-xs font-serif tracking-widest transition-colors ${
          language === "sw" ? "bg-ink text-paper" : "text-ink-muted hover:text-ink"
        }`}
      >
        SW
      </button>
    </div>
  );
}
