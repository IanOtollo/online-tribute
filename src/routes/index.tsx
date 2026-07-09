import { createFileRoute } from "@tanstack/react-router";
import { WifiOff } from "lucide-react";
import { TocRail } from "@/components/tribute/TocRail";
import { HymnPlayer } from "@/components/tribute/HymnPlayer";
import { Gallery } from "@/components/tribute/Gallery";
import { ShareDialog } from "@/components/tribute/ShareDialog";
import { MobileNav } from "@/components/tribute/MobileNav";
import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";
import { LanguageToggle } from "@/components/tribute/LanguageToggle";
import { WreathCorner } from "@/components/tribute/WreathCorner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "In Loving Memory — Elias Ouma (1942–2024)" },
      {
        name: "description",
        content:
          "A memorial tribute to the life of Elias Ouma. Read the story, view the gallery, and share in remembrance.",
      },
      { property: "og:title", content: "In Loving Memory — Elias Ouma" },
      {
        property: "og:description",
        content: "A quiet memorial. Read the story, view the gallery, share in remembrance.",
      },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: "#1c1c1a" },
    ],
    links: [{ rel: "manifest", href: "/manifest.webmanifest" }],
  }),
  component: TributePage,
});

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-14 flex items-baseline gap-6">
      <span className="font-italic text-2xl italic text-brass">{number}</span>
      <div className="h-px flex-1 bg-hairline" />
      <span className="font-serif text-[10px] uppercase tracking-[0.35em] text-ink-muted">
        {title}
      </span>
    </div>
  );
}

function TributePageContent() {
  const { t } = useLanguage();
  const { tribute, biography, timeline, speeches, family, hymn, ui } = t;

  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        <WreathCorner position="top-left" className="left-0 top-0 sm:left-4 sm:top-4" />
        <WreathCorner position="top-right" className="right-0 top-0 sm:right-4 sm:top-4" />
        <WreathCorner position="bottom-right" className="right-0 bottom-0 sm:right-4 sm:bottom-4" />
        <WreathCorner position="bottom-left" className="left-0 bottom-0 sm:left-4 sm:bottom-4" />
      </div>
      <MobileNav />
      <TocRail />
      <HymnPlayer />

      {/* Language Toggle for Desktop */}
      <div className="hidden lg:block fixed top-6 right-8 z-50 animate-fade-slow">
        <LanguageToggle />
      </div>

      <main>
        {/* HERO */}
        <section
          id="hero"
          className="relative flex min-h-[100svh] flex-col items-center justify-end overflow-hidden px-6 pb-20 pt-32 sm:pb-28"
        >
          <div className="absolute inset-0 z-0">
            <img
              src={tribute.heroPortrait}
              alt={`Portrait of ${tribute.fullName}`}
              className="h-full w-full object-cover object-[center_20%] grayscale"
              width={1600}
              height={1808}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-paper" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(28,28,26,0.55)_100%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center text-paper animate-rise">
            <p className="mb-6 font-serif text-[10px] uppercase tracking-[0.4em] text-brass-soft">
              {ui.inMemoriam}
            </p>
            <h1 className="text-balance font-serif text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
              {tribute.fullName.split(" ").slice(0, -1).join(" ")}
              <br />
              <span className="font-italic italic">
                {tribute.fullName.split(" ").slice(-1)}
              </span>
            </h1>
            <div className="mx-auto mt-10 flex max-w-xs items-center justify-center gap-4 font-serif text-xs uppercase tracking-[0.3em] text-paper/85">
              <span>{tribute.born}</span>
              <span className="h-px flex-1 bg-brass-soft/60" />
              <span>{tribute.passed}</span>
            </div>
            <p className="mx-auto mt-12 max-w-xl text-pretty font-italic text-lg italic leading-relaxed text-paper/85 sm:text-xl">
              "{tribute.epithet}"
            </p>
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-fade-slow">
            <span className="font-serif text-[9px] uppercase tracking-[0.4em] text-paper/60">
              {ui.scroll}
            </span>
          </div>
        </section>

        {/* BIOGRAPHY */}
        <section
          id="biography"
          className="mx-auto max-w-5xl px-6 py-28 sm:py-36 lg:px-16"
        >
          <SectionLabel number={t.sections[1].number} title={t.sections[1].label} />
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
                {ui.lifeSubtitle}
                <br />
                <span className="font-italic italic text-brass">{ui.lifeSubtitleSpan}</span>
              </h2>
              <p className="mt-6 font-serif text-[10px] uppercase tracking-[0.3em] text-ink-muted">
                {tribute.location}
              </p>
            </div>
            <div className="space-y-6">
              {biography.map((para, i) => (
                <p
                  key={i}
                  className="max-w-[62ch] text-pretty text-[15px] leading-[1.85] text-ink-soft"
                >
                  {para}
                </p>
              ))}
              <div className="!mt-10 flex flex-wrap items-center gap-3">
                <ShareDialog />
                <span className="inline-flex items-center gap-2 border border-hairline bg-vellum/50 px-4 py-2.5 font-serif text-[10px] uppercase tracking-[0.28em] text-ink-muted">
                  <WifiOff className="h-3 w-3" />
                  {ui.offline}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CHRONOLOGY */}
        <section
          id="chronology"
          className="border-y border-hairline bg-vellum/40 px-6 py-28 sm:py-36 lg:px-16"
        >
          <div className="mx-auto max-w-5xl">
            <SectionLabel number={t.sections[2].number} title={t.sections[2].label} />
            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-brass/25 sm:left-1/2 sm:-translate-x-px" />
              <ol className="space-y-14">
                {timeline.map((e, i) => (
                  <li
                    key={e.year}
                    className={`relative grid grid-cols-[auto_1fr] gap-6 sm:grid-cols-2 sm:gap-16 ${
                      i % 2 === 1 ? "sm:[&>*:first-child]:col-start-2" : ""
                    }`}
                  >
                    <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border border-brass bg-paper sm:left-1/2 sm:-translate-x-1/2" />
                    <div className={`pl-8 sm:pl-0 ${i % 2 === 0 ? "sm:text-right sm:pr-10" : "sm:pl-10"}`}>
                      <span className="font-serif text-[11px] uppercase tracking-[0.3em] text-brass">
                        {e.year}
                      </span>
                      <h3 className="mt-2 font-serif text-xl italic text-ink sm:text-2xl">
                        {e.title}
                      </h3>
                    </div>
                    <div className={`hidden sm:block ${i % 2 === 0 ? "sm:pl-10" : "sm:pr-10 sm:text-right"}`}>
                      <p className="max-w-sm text-[14px] leading-relaxed text-ink-soft">
                        {e.detail}
                      </p>
                    </div>
                    <p className="col-span-2 pl-8 text-[14px] leading-relaxed text-ink-soft sm:hidden">
                      {e.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* SPEECHES */}
        <section
          id="speeches"
          className="mx-auto max-w-5xl px-6 py-28 sm:py-36 lg:px-16"
        >
          <SectionLabel number={t.sections[3].number} title={ui.eulogiesLabel} />
          <div className="space-y-16">
            {speeches.map((s) => (
              <blockquote
                key={s.speaker}
                className="grid gap-6 border-t border-hairline pt-10 lg:grid-cols-[220px_1fr] lg:gap-16"
              >
                <div>
                  <p className="font-serif text-[10px] uppercase tracking-[0.3em] text-brass">
                    {s.title}
                  </p>
                  <p className="mt-3 font-italic text-xl italic text-ink">
                    {s.speaker}
                  </p>
                  <p className="mt-1 text-xs text-ink-muted">{s.relation}</p>
                </div>
                <p className="relative max-w-[60ch] text-pretty font-serif text-lg leading-[1.7] text-ink-soft italic sm:text-xl">
                  <span className="absolute -left-4 -top-6 font-italic text-6xl italic text-brass/30 sm:-left-8 sm:text-7xl">
                    "
                  </span>
                  {s.body}
                </p>
              </blockquote>
            ))}
          </div>
        </section>

        {/* FAMILY */}
        <section
          id="family"
          className="border-y border-hairline bg-vellum/40 px-6 py-28 sm:py-36 lg:px-16"
        >
          <div className="mx-auto max-w-5xl">
            <SectionLabel number={t.sections[4].number} title={ui.familyLabel} />
            <div className="grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
              {family.map((m) => (
                <div
                  key={m.name}
                  className="bg-paper p-8 transition-colors hover:bg-vellum/60"
                >
                  <p className="font-serif text-[9px] uppercase tracking-[0.3em] text-brass">
                    {m.relation}
                  </p>
                  <p className="mt-3 font-italic text-2xl italic text-ink">
                    {m.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section
          id="gallery"
          className="mx-auto max-w-5xl px-6 py-28 sm:py-36 lg:px-16"
        >
          <SectionLabel number={t.sections[5].number} title={ui.galleryLabel} />
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
                {ui.gallerySubtitle}
                <br />
                <span className="font-italic italic text-brass">{ui.gallerySubtitleSpan}</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
                {ui.galleryDesc}
              </p>
            </div>
            <Gallery />
          </div>
        </section>

        {/* HYMN */}
        <section
          id="hymn"
          className="relative overflow-hidden bg-ink px-6 py-28 text-paper sm:py-36 lg:px-16"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--brass)_0%,transparent_60%)]" />
          </div>
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="font-serif text-[10px] uppercase tracking-[0.4em] text-brass-soft">
              {ui.hymnLabel}
            </p>
            <h2 className="mt-6 font-serif text-4xl italic text-paper sm:text-5xl">
              {hymn.title}
            </h2>
            <p className="mt-3 font-serif text-[10px] uppercase tracking-[0.3em] text-paper/40">
              {hymn.composer}
            </p>
            <div className="mt-14 space-y-3 font-italic text-lg italic leading-relaxed text-paper/75 sm:text-xl">
              {hymn.lyrics.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <p className="mt-14 font-serif text-[10px] uppercase tracking-[0.3em] text-paper/40">
              {ui.hymnInstruction}
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-hairline bg-paper px-6 py-16 lg:px-16">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <p className="font-italic text-3xl italic text-ink">
              {tribute.shortName}
            </p>
            <p className="font-serif text-[10px] uppercase tracking-[0.35em] text-ink-muted">
              {tribute.born}  ·  {tribute.passed}
            </p>
            <div className="my-2 h-px w-16 bg-brass/40" />
            <p className="max-w-md font-italic text-base italic text-ink-soft">
              {ui.footerQuote}
            </p>
            <p className="mt-6 font-serif text-[9px] uppercase tracking-[0.3em] text-ink-muted">
              {ui.service} · {tribute.service.date} · {tribute.service.venue}
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function TributePage() {
  return (
    <LanguageProvider>
      <TributePageContent />
    </LanguageProvider>
  );
}
