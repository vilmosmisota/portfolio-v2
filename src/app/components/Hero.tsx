import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative min-h-screen w-full flex items-center justify-center px-4">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.02] -z-10" />

      <div className="max-w-5xl mx-auto w-full text-center space-y-12 py-16">
        {/* Text content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 text-transparent bg-clip-text">
              Vilmos Misota
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-neutral-600 font-light max-w-2xl mx-auto">
            Software Developer with a drive to{" "}
            <span className="relative inline-block">
              <span className="relative z-10 font-medium">create</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-300 -rotate-2" />
            </span>{" "}
            and{" "}
            <span className="relative inline-block">
              <span className="relative z-10 font-medium">progress</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-300 rotate-1" />
            </span>
            .
          </h2>
        </div>

        {/* Image container */}
        <div className="relative w-72 md:w-96 aspect-square mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-400 to-orange-200 rounded-2xl rotate-3 opacity-50 blur-xl" />
          <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-neutral-700 shadow-2xl">
            <Image
              src={"/images/portfolio.jpg"}
              alt="Vilmos Misota"
              placeholder="blur"
              priority
              className="object-cover"
              quality={95}
              fill
              sizes="(max-width: 768px) 288px, 384px"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
