import Image from "next/image";

const ProjectSection = () => {
  return (
    <div className="w-full bg-neutral-950 text-neutral-200 py-20 px-4 lg:px-0">
      <div className="max-w-screen-xl mx-auto ">
        <div className="space-y-6 text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center">
            <span className="bg-gradient-to-r  from-neutral-100 via-neutral-400 to-neutral-200 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>

          <p className="space-y-6 text-lg text-neutral-400 text-center leading-relaxed">
            Some of the projects listed here are personal side projects that I
            have undertaken to challenge myself and expand my knowledge. Others
            are from working with small businesses, where I have helped them
            establish an online presence and increase their reach through custom
            web design and development solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-neutral-900/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-neutral-800/50 transition-all duration-300 w-full border border-orange-300/10 hover:border-orange-300"
            >
              {/* Project Image Container */}
              <div className="relative w-full">
                {/* Main Image */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.imgages[0].url}
                    alt={project.imgages[0].alt}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Hover GIF Overlay */}
                {project.clips && project.clips.length > 0 && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src={project.clips[0].url}
                      alt={project.clips[0].alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300"
                    />
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-8 opacity-80 group-hover:opacity-100">
                <div className="space-y-4">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400">{project.subTitle}</p>
                  </div>

                  {/* Role */}
                  <div className="inline-block">
                    <span className="px-4 py-1.5 bg-neutral-800 rounded-full text-sm text-neutral-300">
                      {project.role}
                    </span>
                  </div>

                  {/* Project Description */}
                  <div className="h-28">
                    <p className="text-neutral-300 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-neutral-800/50 rounded-full text-sm text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

const projects = [
  {
    title: "SportWise",
    subTitle: "Multi-tenant Platform for Youth Sports Management - Ongoing",
    role: "Full-stack Developer",
    description:
      "SportWise is a versatile platform serving both sports leagues and individual organizations. It streamlines operations with tailored interfaces for different tenant types - leagues can manage competitions and standings, while organizations track training attendance and handle administrative tasks. The application utilizes Next.js with hybrid rendering strategies: server-side rendering for public-facing pages ensuring fast initial loads, and client-side rendering with TanStack Query for dynamic admin interfaces. This approach provides optimal performance while maintaining real-time data synchronization across the platform.",
    imgages: [
      {
        url: "/images/sportwise.jpg",
        alt: "SportWise dashboard interface",
        width: 1920,
        height: 960,
      },
    ],
    clips: [
      {
        url: "/clips/sportwise.gif",
        alt: "SportWise platform demonstration",
        width: 600,
        height: 338,
      },
    ],
    tags: ["Next.js", "TypeScript", "TanStack Query", "Supabase", "Tailwind"],
  },
  {
    title: "Cinery",
    subTitle: "Interactive Multimedia Platform for Photography - Ongoing",
    role: "Creator & Full-stack Developer",
    description:
      "Born from my passion for photography, Cinery is an innovative platform that transforms how we experience photo stories. It combines visual narratives with dynamic audio landscapes to create truly immersive experiences. The platform enables photographers to present their long-form projects in a cinematic format, where each image transition is choreographed with sound design. Using Next.js for seamless navigation, the Web Audio API for dynamic sound processing, and Tailwind for responsive design. Cinery offers a unique way to engage with visual storytelling.",
    imgages: [
      {
        url: "/images/cinery.jpg",
        alt: "Cinery",
        width: 1920,
        height: 960,
      },
    ],
    clips: [
      {
        url: "/clips/cinery.gif",
        alt: "Cinery",
        width: 600,
        height: 338,
      },
    ],
    tags: ["Next.js", "WebAudio API", "Tailwind", "Framer Motion", "Supabase"],
  },
  {
    title: "The Surfskate Academy",
    subTitle: "Website with Booking Engine - 2023",
    role: "Full-stack Developer & Designer",
    description:
      "Website was developed using Next.js, TypeScript, Supabase, Tailwind and Framer Motion. It features an admin interface built with Supabase, which enables the coach to manage classes and class availability. The website also allows visitors to view all available classes and submit class requests, as well as a CMS-controlled section for posting highlights. I am proud of the final outcome and the opportunity to help a small business grow with my skillset",
    imgages: [
      {
        url: "/images/surfskate-new.jpg",
        alt: "surfskate academy website",
        width: 1920,
        height: 960,
      },
    ],
    clips: [
      {
        url: "/clips/surfskate-new.gif",
        alt: "surfskate academy website",
        width: 600,
        height: 338,
      },
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind", "Framer Motion"],
  },
  {
    title: "Glass",
    subTitle: "Ecommerce Website - 2022",
    role: "Full-stack Developer & Designer & Contributor",
    description:
      "This project was an e-commerce website that sells a photobook, with plans to expand to additional products in the future. I used Next.js to create a server-generated static website that was connected to a headless CMS. The financial transactions were handled by Stripe API. This was a straightforward setup that utilized prop drilling, layout components, custom hooks, and Framer-motion for animations. This was my first time using TypeScript in a real-world project, it was a big learning curve but it was worth it in the end.",
    imgages: [
      {
        url: "/images/glass.jpg",
        alt: "glass",
        width: 1920,
        height: 960,
      },
    ],
    clips: [
      {
        url: "/clips/glass.gif",
        alt: "glass",
        width: 600,
        height: 338,
      },
    ],
    tags: [
      "NextJs",
      "TypeScript",
      "SCSS",
      "Framer Motion",
      "Stripe API",
      "CMS",
    ],
  },
  {
    title: "Crypto-unity",
    subTitle: "Web Application - 2021",
    role: "Frontend Developer",
    description:
      "This project was one of my first experiences building a web application using React and the Redux state management library. It was a side project that consumed multiple APIs. It is not a perfect one, and looking back I have identified many mistakes I made during the development process. However, this experience has allowed me to appreciate the learning process and how much I have improved as a developer since then, and it was a valuable learning experience.",
    imgages: [
      {
        url: "/images/crypto-unity.jpg",
        alt: "crypto",
        width: 1920,
        height: 960,
      },
    ],
    clips: [
      {
        url: "/clips/crypto.gif",
        alt: "crypto",
        width: 600,
        height: 338,
      },
    ],
    tags: ["React", "Redux", "CSS"],
  },

  {
    title: "Wildcat",
    subTitle: "Broucher - 2021",
    role: "Web Developer & Designer & Photographer",
    description:
      "This project was a one-page website for a bar in Edinburgh. I was responsible for the photography, design and web development of the site. The website was built from scratch using HTML, CSS, and JavaScript, without the use of any frameworks. The goal was to create a simple, yet visually appealing website that showcased the bar's atmosphere and offerings",
    imgages: [
      {
        url: "/images/wildcat.jpg",
        alt: "Wildcat bar",
        width: 1920,
        height: 960,
      },
    ],
    clips: [
      {
        url: "/clips/wildcat.gif",
        alt: "Wildcat bar",
        width: 600,
        height: 338,
      },
    ],
    tags: ["JavaScript", "HTML", "CSS", "Intersection Observer", "Figma"],
  },
];
