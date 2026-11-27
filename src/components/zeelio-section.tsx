import { SectionLabel } from "./section";

export function ZeelioSection() {
  return (
    <section
      id="zeelio"
      className="enter mt-24 scroll-mt-8 border-y border-rule bg-sunken [--enter-step:5]"
    >
      <div className="mx-auto grid max-w-[46rem] gap-4 px-5 py-16 sm:grid-cols-[8.5rem_1fr] sm:gap-6 sm:px-8 sm:py-20">
        <SectionLabel>Side project</SectionLabel>
        <div>
          <div className="flex items-baseline justify-between gap-6">
            <h3 className="font-semibold">
              Zeelio
              <span className="mx-2 font-normal text-muted" aria-hidden>
                ·
              </span>
              <span className="font-normal text-ink-soft">Software for youth sports clubs</span>
            </h3>
            <span className="shrink-0 text-sm text-muted tabular-nums">2025 – Now</span>
          </div>

          <p className="mt-6 font-serif text-[2rem] leading-[1.15] tracking-[-0.02em] text-balance sm:text-[2.5rem]">
            Flexible tools for growth in youth sport.
          </p>

          <p className="mt-6 text-pretty text-ink-soft">
            Zeelio is my passion project: one place for youth sports clubs to organise the club,
            support each member’s development and share progress with families. Building it on my
            own lets me stretch in every direction, from product and design to the services
            underneath, experiment with new ways of working, and be fully creative while making
            something genuinely useful for youth sport.
          </p>

          <p className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-sm text-muted">
            <span>Invitation-only, in use with its founding clubs.</span>
            <a className="text-link font-medium" href="https://zeelio.app">
              zeelio.app
              <span aria-hidden className="ml-1 text-muted">
                ↗
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
