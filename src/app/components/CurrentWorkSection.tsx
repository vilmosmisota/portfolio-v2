import React from "react";

const works = [
  {
    title: "Current Work",
    role: "Frontend Developer",
    company: "Opus 2",
    description:
      "Working at the forefront of legal technology, I specialize in creating and maintaining essential case management features. My focus is on developing and enhancing core application components, including complex data-driven tables and interactive worksheets. I work with intricate frontend architectures to deliver robust, user-friendly tools that empower legal professionals.",
    tags: ["React", "TypeScript", "MobX", "Jest"],
  },
  {
    title: "Side Project",
    role: "Fullstack Developer & Founder",
    company: "SportWise",
    description:
      "Building a multitenant sports management system to assist youth sports team coaches with administrative tasks, streamlining operations and improving team management.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
  },
  {
    title: "Hobby Project",
    role: "Fullstack Developer & Founder",
    company: "Cinery",
    description:
      "Creating an immersive platform for photography enthusiasts, driven by my passion for photography, where long-form photo projects can be viewed with audiovisual harmony.",
    tags: ["Next.js", "WebAudio API", "Tailwind", "Supabase"],
  },
];

export default function CurrentWorkSection() {
  return (
    <section className="relative w-full py-24 px-4 lg:px-0">
      <div className="absolute inset-0 bg-grid-slate-900/[0.02] -z-10" />

      <div className="max-w-screen-xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 text-transparent bg-clip-text">
              What I&apos;m Working On
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 font-light">
            A glimpse into my{" "}
            <span className="relative inline-block">
              <span className="relative z-10 font-medium">current</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-300 rotate-1" />
            </span>{" "}
            projects and endeavors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {works.map((work) => (
            <WorkCard
              key={work.title}
              title={work.title}
              role={work.role}
              company={work.company}
              description={work.description}
              tags={work.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const WorkCard = ({
  title,
  role,
  company,
  description,
  tags,
}: {
  title: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}) => (
  <div className="relative h-full">
    <div className="absolute inset-0 bg-gradient-to-r from-neutral-400 to-orange-200 rounded-2xl rotate-3 opacity-50 blur-xl" />

    {/* Card content - dark theme */}
    <div className="relative h-full flex flex-col justify-between p-8 text-left space-y-6 rounded-2xl  bg-neutral-800 shadow-xl">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-neutral-200 to-neutral-100 text-transparent bg-clip-text">
            {title}
          </span>
        </h3>
        <div>
          <div className="text-lg text-neutral-200 font-medium">{role}</div>
          <div className="text-neutral-400">{company}</div>
        </div>
        <p className="text-neutral-300 leading-relaxed">{description}</p>
        {/* Tags container */}
      </div>
      <div className="flex flex-wrap gap-2 pt-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  </div>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 text-sm text-neutral-300 bg-neutral-950 border border-neutral-700 rounded-full">
    {children}
  </span>
);
