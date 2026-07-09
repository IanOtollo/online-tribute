import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function Gallery() {
  const { t, language } = useLanguage();
  const gallery = t.gallery;
  const [order, setOrder] = useState(() => gallery.map((_, i) => i));

  const shuffle = (dir: 1 | -1) => {
    setOrder((prev) => {
      const next = [...prev];
      if (dir === 1) next.push(next.shift()!);
      else next.unshift(next.pop()!);
      return next;
    });
  };

  const total = gallery.length;

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="relative mx-auto h-[520px] w-full select-none"
        onTouchStart={(e) => {
          const startX = e.touches[0].clientX;
          const onEnd = (ev: TouchEvent) => {
            const dx = ev.changedTouches[0].clientX - startX;
            if (Math.abs(dx) > 40) shuffle(dx < 0 ? 1 : -1);
            window.removeEventListener("touchend", onEnd);
          };
          window.addEventListener("touchend", onEnd);
        }}
      >
        {order.map((idx, position) => {
          const item = gallery[idx];
          const depth = position; // 0 is top
          const rotate = position === 0 ? -2 : position === 1 ? 3 : position === 2 ? -5 : 4;
          const translateX = position * 6;
          const translateY = position * 8;
          const scale = 1 - position * 0.03;

          return (
            <figure
              key={idx}
              className="absolute inset-0 mx-auto flex h-[500px] w-[340px] flex-col bg-paper p-3 shadow-[0_20px_40px_-20px_rgba(28,28,26,0.4)] ring-1 ring-ink/5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                zIndex: total - depth,
                opacity: depth > 3 ? 0 : 1,
              }}
            >
              <div className="relative flex-1 overflow-hidden bg-vellum">
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>
              <figcaption className="flex items-baseline justify-between px-1 pt-3">
                <span className="font-italic text-sm italic text-ink">
                  {item.caption}
                </span>
                <span className="font-serif text-[9px] uppercase tracking-[0.25em] text-ink-muted">
                  {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </figcaption>
              <p className="px-1 pt-1 text-xs text-ink-muted">{item.note}</p>
            </figure>
          );
        })}
      </div>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          onClick={() => shuffle(-1)}
          aria-label="Previous card"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brass hover:text-brass"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="font-serif text-[10px] uppercase tracking-[0.3em] text-ink-muted">
          {language === "sw" ? "Sogeza kupitia kumbukumbu" : "Swipe to shuffle memories"}
        </span>
        <button
          onClick={() => shuffle(1)}
          aria-label="Next card"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brass hover:text-brass"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
