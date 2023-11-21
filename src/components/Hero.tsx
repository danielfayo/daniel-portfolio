import { motion } from "framer-motion";
import React from "react";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div>
      <div className="pt-24 space-y-2">
        <h1 className="font-bold text-5xl md:text-7xl">Hello, I&#39;m a</h1>
        <h2 className="font-bold text-5xl md:text-7xl">Frontend Developer</h2>
        <span className="font-bold">(ReactJS)</span>
      </div>
      <motion.div initial={{width: 0}} whileInView={{width: "100%"}} transition={{ duration: 1, delay: 0.3 }} className="h-1 w-full bg-black mt-4"/>
    </div>
  );
};
export default Hero;
