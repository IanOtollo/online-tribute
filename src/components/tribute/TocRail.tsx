import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export function TocRail() {
  const [active, setActive] = useState<string>("hero");
  const { t } = useLanguage();
  const sections = t.sections;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside
      aria-label="Table of contents"
      className="pointer-events-none fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 pr-8 lg:block mix-blend-difference text-white"
    >
      <nav className="pointer-events-auto flex flex-col gap-5">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group flex items-center justify-end gap-3 text-right"
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={`font-serif text-[11px] uppercase tracking-[0.25em] transition-all duration-500 ${
                  isActive
                    ? "opacity-100 font-bold"
                    : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              >
                {s.label}
              </span>
              <span
                className={`block h-[1px] transition-all duration-500 ${
                  isActive
                    ? "w-10 bg-white"
                    : "w-5 bg-white/40 group-hover:w-8 group-hover:bg-white"
                }`}
              />
              <span
                className={`font-italic text-[10px] italic transition-colors ${
                  isActive ? "font-bold opacity-100" : "opacity-40 group-hover:opacity-100"
                }`}
              >
                {s.number}
              </span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
