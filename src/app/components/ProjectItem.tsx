"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectDialog from "./ProjectDialog";

export type Project = {
  title: string;
  subTitle: string;
  role: string;
  description: string;
  imgages: {
    url: string;
    alt: string;
    width: number;
    height: number;
  }[];
  clips: {
    url: string;
    alt: string;
    width: number;
    height: number;
  }[];
  tags: string[];
};

type ProjectItemProps = {
  project: Project;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <div
        role="button"
        onClick={() => setIsDialogOpen(true)}
        key={project.title}
        className="group bg-neutral-900/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-neutral-800/50 transition-all duration-300 w-full border border-orange-300/10 hover:border-orange-300"
      >
        {/* Project Image Container */}
        <div className="relative w-full">
          {/* Main Image */}
          <div className="relative aspect-video w-full overflow-hidden">
            {project.imgages.length ? (
              <Image
                src={project.imgages[0].url}
                alt={project.imgages[0].alt}
                fill
                style={{
                  objectFit: "cover",
                }}
                className="group-hover:scale-105 transition-transform duration-300"
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
        <div className="p-8 opacity-80 group-hover:opacity-100">
          <div className="space-y-4">
            {/* Header */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
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
      <ProjectDialog
        project={project}
        isOpen={isDialogOpen}
        setOpen={setIsDialogOpen}
      />
    </>
  );
}
