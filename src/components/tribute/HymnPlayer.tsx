import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export function HymnPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const { t, language } = useLanguage();
  const { hymn } = t;

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onEnd = () => setPlaying(false);
    el.addEventListener("ended", onEnd);
    return () => el.removeEventListener("ended", onEnd);
  }, [hymn.audioUrl]);

  const toggle = () => {
    const el = audioRef.current;
    if (!el || !hymn.audioUrl) {
      alert(language === "sw" ? "Sauti haipatikani kwa sasa." : "Audio file is not yet available.");
      setPlaying(false);
      return;
    }
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      el.play().catch(() => {
        alert(language === "sw" ? "Sauti imeshindwa kucheza." : "Audio file could not be played.");
        setPlaying(false);
      });
      setPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 sm:bottom-6">
      <div className="flex items-center gap-3 rounded-full border border-ink/10 bg-paper/95 py-1.5 pl-1.5 pr-4 shadow-[0_10px_40px_-15px_rgba(28,28,26,0.35)] backdrop-blur-xl sm:gap-4 sm:py-2 sm:pl-2 sm:pr-5">
        <button
          onClick={toggle}
          aria-label={playing ? "Pause hymn" : "Play hymn"}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-transform active:scale-95 sm:h-10 sm:w-10"
        >
          {playing ? (
            <Pause className="h-3.5 w-3.5" fill="currentColor" />
          ) : (
            <Play className="h-3.5 w-3.5 translate-x-[1px]" fill="currentColor" />
          )}
        </button>
        <div className="flex min-w-0 flex-col">
          <span className="font-serif text-[9px] uppercase tracking-[0.28em] text-brass">
            {playing ? (language === "sw" ? "Inacheza sasa" : "Now Playing") : (language === "sw" ? "Wimbo wa Dini" : "Gospel Hymn")}
          </span>
          <span className="truncate font-italic text-sm italic text-ink">
            {hymn.title}
          </span>
        </div>
        {playing && (
          <span className="hidden h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-brass sm:block" />
        )}
      </div>
      {hymn.audioUrl && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <audio ref={audioRef} src={hymn.audioUrl} preload="none" />
      )}
    </div>
  );
}
