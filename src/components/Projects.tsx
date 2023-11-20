import { content } from "@/content";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div>
      <span className="font-bold">Projects</span>
      <div className="space-y-6 mt-4">
        {content.projects.map((eachProject) => (
          <div key={eachProject.order}>
            <div className="relative w-full aspect-video max-h-[608px] mb-2">
              <Image
                src={eachProject.image}
                alt={`${eachProject.name} Image`}
                objectFit="cover"
                fill
                quality={100}
              />
            </div>
            <span className="text-lg font-bold">{eachProject.name}</span>
            <br />
            <span className="font-medium">{eachProject.description}</span>
            <div className="flex gap-2 mt-4">
                <Link className="h-10 px-6 bg-white border-4 border-black font-bold flex items-center" target="_blank" href={eachProject.live}>Live Site</Link>
                {eachProject.github && <Link className="h-10 px-6 bg-white border-4 border-black font-bold flex items-center" target="_blank" href={eachProject.github}>GitHub</Link>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
