import React from "react";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div>
      <div className="pt-24 space-y-2">
        <h1 className="font-bold text-5xl md:text-8xl">Hello, I am a</h1>
        <h2 className="font-bold text-5xl md:text-7xl">Frontend Developer</h2>
        <span className="font-bold">(ReactJS)</span>
      </div>
      <div className="h-1 w-full bg-black mt-4"/>
    </div>
  );
};
export default Hero;
