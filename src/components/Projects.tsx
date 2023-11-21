import { content } from "@/content";
import { motion } from "framer-motion";
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
            <motion.div initial={{opacity: 0, y: 150}} whileInView={{opacity: 100, y: 0}} transition={{duration: 0.3}} className="p-1 bg-yellow-500 border-black border-4 mb-2">
              <div className="relative w-full aspect-video max-h-[608px] ">
                <Image
                  src={eachProject.image}
                  alt={`${eachProject.name} Image`}
                  objectFit="cover"
                  fill
                  quality={100}
                />
              </div>
            </motion.div>
            <span className="text-lg font-bold">{eachProject.name}</span>
            <br />
            <span className="font-medium">{eachProject.description}</span>
            <div className="flex gap-2 mt-4">
              <Link
                className="h-10 px-6 bg-white border-4 border-black font-bold flex items-center"
                target="_blank"
                href={`${eachProject.live}`}
              >
                Live Site
              </Link>
              {/* <a className="h-10 px-6 bg-white border-4 border-black font-bold flex items-center" href={eachProject.live} target="_blank">Live Site</a> */}
              {eachProject.github && (
                <Link
                  className="h-10 px-6 bg-white border-4 border-black font-bold flex items-center"
                  target="_blank"
                  href={eachProject.github}
                >
                  GitHub
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
