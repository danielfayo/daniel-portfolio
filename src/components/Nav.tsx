import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  return (
    <div
    // initial={{y: -120}}
    // whileInView={{x: 0}}
     className="flex justify-center fixed z-10 top-6 left-4 right-4">
      <nav className="flex max-w-lg w-full px-4 justify-between h-10 items-center border-4 border-black bg-white ">
        <h1 className="font-bold">Daniel Olufayokunmi</h1>
        <Link href={`mailto:${'daniel123olu@gmail.com'}`} className="font-bold flex">Contact Me <ArrowUpRight/></Link>
      </nav>
    </div>
  );
};
export default Nav;
