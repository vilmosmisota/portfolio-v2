import Image from "next/image";
import { Avatar } from "@/components/avatar";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Section } from "@/components/section";
import { ThemeToggle } from "@/components/theme-toggle";
import { ZeelioSection } from "@/components/zeelio-section";
import outdoorsPhoto from "@/assets/outdoors-1280.jpg";

const EMAIL = "misotavilmos@gmail.com";

const profileLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vilmos-misota-586204210" },
  { label: "GitHub", href: "https://github.com/vilmosmisota" },
  { label: "CV", href: "/Vilmos-Misota-CV.pdf", note: "PDF" },
];

type Role = {
  company: string;
  title: string;
  dates: string;
  summary: string;
  highlights: string[];
};

const career: Role[] = [
  {
    company: "Opus 2",
    title: "Software Developer",
    dates: "2023 – Now",
    summary:
      "I joined to build frontend features for legal case management software, then followed the problems further down. Today I work mostly on the services behind Opus 2’s multi-tenant platform.",
    highlights: [
      "Keep distributed workflows reliable as they scale, working across teams when the edges between systems don’t line up.",
      "Take features from first commit to production, and help shape how the platform is designed, including how the API should validate requests and explain errors.",
      "Built the worksheets and data-heavy tables lawyers work in all day, plus testing tools so other developers stopped rebuilding the same setup for every scenario.",
    ],
  },
  {
    company: "80 Days",
    title: "Frontend Developer",
    dates: "2021 – 2023",
    summary:
      "Built client websites and helped shape the frontend of new projects, making them noticeably faster by being deliberate about what loads, and when.",
    highlights: [
      "Took over a hotel benchmarking application, kept it growing with new features, and automated the analytics work people were repeating by hand.",
    ],
  },
  {
    company: "Freelance",
    title: "Web Developer",
    dates: "2021 – 2023",
    summary:
      "Designed and built websites for small businesses, from the first conversation to launch, including one for The SurfSkate Academy where students can request classes.",
    highlights: [],
  },
];

const principles = [
  {
    name: "Taste",
    detail:
      "Good software feels obvious to use. I care about the small decisions that get it there, from the words on a button to how a screen responds.",
  },
  {
    name: "Craft",
    detail:
      "Simple on the surface, solid underneath: clear architecture, strict checks and tests that prove the risky parts, so it keeps working as it grows.",
  },
];

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-[46rem] px-5 sm:px-8">
        <TopBar />
        <main>
          <Intro />
          <div className="enter [--enter-step:4]">
            <Section id="experience" label="Experience">
              <ol className="space-y-10">
                {career.map((role) => (
                  <li key={role.company}>
                    <EntryHeading name={role.company} detail={role.title} dates={role.dates} />
                    <p className="mt-2 text-pretty text-ink-soft">{role.summary}</p>
                    {role.highlights.length > 0 && (
                      <ul className="mt-3 space-y-2">
                        {role.highlights.map((highlight) => (
                          <li key={highlight} className="relative pl-5 text-pretty text-ink-soft">
                            <span
                              aria-hidden
                              className="absolute top-[0.8em] left-0.5 h-px w-2 bg-accent"
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            </Section>
          </div>
        </main>
      </div>

      <ZeelioSection />

      <div className="mx-auto max-w-[46rem] px-5 pb-24 sm:px-8">
        <Section label="How I work">
          <dl className="space-y-6">
            {principles.map((principle) => (
              <div key={principle.name}>
                <dt className="font-medium">{principle.name}</dt>
                <dd className="mt-1 text-pretty text-ink-soft">{principle.detail}</dd>
              </div>
            ))}
          </dl>
        </Section>
        <Section label="Outside work">
          <Image
            src={outdoorsPhoto}
            alt="Vilmos on a rocky beach, the sea breaking behind him"
            sizes="(min-width: 640px) 31rem, calc(100vw - 2.5rem)"
            placeholder="blur"
            className="aspect-[3/2] w-full rounded-2xl object-cover outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
          />
          <p className="mt-5 text-pretty text-ink-soft">
            I’m happiest outdoors: surfing, photographing waves or rock climbing. Back home, I like
            to pick up a guitar and make music.
          </p>
        </Section>
        <Section id="contact" label="Contact">
          <p className="font-serif text-2xl leading-snug tracking-[-0.01em] text-balance">
            If you’re working on something worth caring about, I’d like to hear about it.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
            <CopyEmailButton email={EMAIL} />
            <a className="text-link text-sm" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            <ProfileLinks />
          </div>
        </Section>
        <footer className="mt-24 flex justify-between border-t border-rule pt-6 text-sm text-muted">
          <span>Vilmos Misota</span>
          <span>Edinburgh, UK</span>
        </footer>
      </div>
    </>
  );
}

function TopBar() {
  return (
    <nav
      aria-label="Page"
      className="enter flex h-16 items-center justify-between gap-4 [--enter-step:0] sm:h-20"
    >
      <Avatar />
      <div className="flex items-center gap-1 text-sm text-ink-soft sm:gap-2">
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#zeelio">Zeelio</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <span aria-hidden className="mx-1 h-4 w-px bg-rule" />
        <ThemeToggle />
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="rounded-full px-2.5 py-1.5 transition-colors duration-150 ease-out hover:bg-accent-tint hover:text-ink"
    >
      {children}
    </a>
  );
}

function Intro() {
  return (
    <header id="top" className="pt-10 sm:pt-16">
      <h1 className="enter font-serif text-[2.75rem] leading-none tracking-[-0.025em] [--enter-step:0] sm:text-6xl">
        Vilmos Misota
      </h1>
      <p className="enter mt-3 font-medium text-accent [--enter-step:1]">
        Software Developer <span className="text-muted">· Edinburgh</span>
      </p>
      <p className="enter mt-10 font-serif text-[1.375rem] leading-[1.45] tracking-[-0.005em] text-pretty [--enter-step:2] sm:text-2xl">
        I build software across the stack with taste and creativity, from the services underneath
        to the details people touch. I’m genuinely curious about how things get built, so I keep
        learning, experimenting and refining the way I work.
      </p>
      <div className="enter mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 [--enter-step:3]">
        <CopyEmailButton email={EMAIL} />
        <ProfileLinks />
      </div>
    </header>
  );
}

function ProfileLinks() {
  return (
    <>
      {profileLinks.map((link) => (
        <a key={link.label} className="text-link text-sm" href={link.href}>
          {link.label}
          {link.note && <span className="ml-1.5 text-xs text-muted">{link.note}</span>}
        </a>
      ))}
    </>
  );
}

function EntryHeading({ name, detail, dates }: { name: string; detail: string; dates: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6">
      <h3>
        <span className="font-semibold">{name}</span>
        <span className="mx-2 text-muted" aria-hidden>
          ·
        </span>
        <span className="text-ink-soft">{detail}</span>
      </h3>
      <span className="shrink-0 text-sm text-muted tabular-nums">{dates}</span>
    </div>
  );
}
