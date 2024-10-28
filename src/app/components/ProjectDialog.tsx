"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import Image from "next/image";

import { Project } from "./ProjectItem";

export default function ProjectDialog({
  project,
  isOpen,
  setOpen,
}: {
  project: Project;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent
        className={" max-w-screen-xl overflow-y-scroll max-h-screen"}
      >
        <DialogTitle className="hidden">{project.title}</DialogTitle>
        <div
          key={project.title}
          className="bg-white/50 max-w-screen-md relative mx-auto backdrop-blur-sm rounded-xl overflow-hidden w-full border-2 border-neutral-400"
        >
          {/* Project Image Container */}

          {/* Main Image */}
          <div className="relative group w-full aspect-video">
            <div className="relative  w-full h-full overflow-hidden">
              {project.imgages.length ? (
                <Image
                  src={project.imgages[0].url}
                  alt={project.imgages[0].alt}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  className=" transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-800/90">
                  <p className="leading-relaxed text-neutral-500">
                    Under Construction
                  </p>
                </div>
              )}
            </div>

            {/* Hover GIF Overlay */}
            {project.clips && project.clips.length > 0 && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={project.clips[0].url}
                  alt={project.clips[0].alt}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  className="transition-transform duration-300"
                />
              </div>
            )}
          </div>

          {/* Project Content */}
          <div className="p-8">
            <div className="space-y-4">
              {/* Header */}
              <div>
                <h3 className="text-2xl text-neutral-800 font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-500">{project.subTitle}</p>
              </div>

              {/* Role */}
              <div className="inline-block">
                <span className="px-4 py-1.5 bg-neutral-300 rounded-full text-sm text-neutral-800">
                  {project.role}
                </span>
              </div>

              {/* Project Description */}
              <div>
                <p className="text-neutral-700">{project.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-neutral-300 rounded-full text-sm text-neutral-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
