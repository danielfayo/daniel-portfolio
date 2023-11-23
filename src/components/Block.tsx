import { motion } from "framer-motion";
import React from "react";

type BlockProps = {};

const Block: React.FC<BlockProps> = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.3 * 5 }}
      className="fixed z-20 flex h-full w-full"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.3 * index+1 }}
          className="h-full w-1/5 bg-black"
        />
      ))}
      {/* <motion.div className="fixed h-full w-full z-20 inset-0" /> */}
    </motion.div>
  );
};
export default Block;
