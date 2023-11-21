import { content } from "@/content";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <motion.div initial={{width: 0}} whileInView={{width: "100%"}} transition={{ duration: 1 }} className="h-1 w-full bg-black mb-2" />
      <div className="flex justify-between">
        <span className="text-base font-bold">
          &copy; {new Date().getFullYear()}
        </span>
        <div className="space-x-2 flex">
          {content.socials.map((eachSocial) => (
            <Link
              className="font-bold flex"
              target="_blank"
              href={eachSocial.URL}
            >
              {eachSocial.site} <ArrowUpRight />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
