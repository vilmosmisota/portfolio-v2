import React from "react";

export default function IntroSection() {
  return (
    <section className="w-full">
      <div className="max-w-3xl mx-auto px-6">
        <div className="space-y-8">
          {/* Introduction text with improved flow and emphasis */}
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              Welcome to my corner of the digital world. As a versatile software
              developer, I find joy in solving complex problems and bringing
              ideas to life through code.
            </p>

            <p>
              My approach combines technical expertise with creative thinking —
              whether I&apos;m collaborating with a team or diving into personal
              projects, I&apos;m constantly exploring new technologies and
              pushing the boundaries of what&apos;s possible.
            </p>

            <p>
              Beyond the screen, you&apos;ll find me embracing life&apos;s
              adventures: catching waves at dawn, scaling rock faces, and
              capturing moments through my camera lens. These pursuits, along
              with precious time spent with family, bring balance to my
              tech-driven world and fuel my creative energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
