import React from "react";

const OutroSection = () => {
  return (
    <div className="w-full  text-gray-200 py-32">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-5xl md:text-7xl font-bold">
          <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 text-transparent bg-clip-text">
            Let&apos;s Create Something Together
          </span>
        </h2>

        <p className="text-neutral-600 font-light text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Whether you have a project in mind or just want to chat about web
          development and technology, I&apos;d love to hear from you.
        </p>

        <a
          href="mailto:vilmosmisota@outlook.com"
          className="inline-block  text-2xl md:text-3xl font-medium text-neutral-700 hover:text-neutral-900 transition-all duration-300 border-b-2pb-2"
        >
          <span className="relative inline-block">
            <span className="relative z-10 font-medium">
              vilmosmisota@outlook.com
            </span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-300 rotate-1 " />
          </span>{" "}
        </a>
      </div>
    </div>
  );
};

export default OutroSection;
