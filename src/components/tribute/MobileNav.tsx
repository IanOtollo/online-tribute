import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const { tribute, sections, ui } = t;

  return (
    <>
      <nav className="sticky top-0 z-40 flex items-center justify-between border-b border-hairline bg-paper/90 px-5 py-4 backdrop-blur-md lg:hidden">
        <div className="flex flex-col leading-none">
          <span className="font-serif text-[9px] uppercase tracking-[0.3em] text-brass">
            {ui.inMemoriam}
          </span>
          <span className="mt-1 font-italic text-lg italic text-ink">
            {tribute.shortName}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <button
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            className="flex items-center gap-2 font-serif text-[10px] uppercase tracking-[0.28em] text-ink"
          >
            {ui.index}
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[90] bg-paper animate-fade-slow lg:hidden overflow-y-auto">
          <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
            <span className="font-serif text-[10px] uppercase tracking-[0.3em] text-brass">
              {ui.toc}
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
              className="text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-hairline py-5"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-italic text-xs italic text-brass">
                    {s.number}
                  </span>
                  <span className="font-serif text-xl text-ink">{s.label}</span>
                </span>
                <span className="h-px w-6 bg-ink/20 transition-all group-hover:w-10 group-hover:bg-brass" />
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
