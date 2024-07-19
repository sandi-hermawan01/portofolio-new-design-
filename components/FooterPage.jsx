"use client";

import { motion } from "framer-motion";

const FooterPage = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
      }}
      className="relative w-full h-[150px] xl:h-[175px] z-[-5]"
    >
      <div className="absolute w-full h-full bg-gradient-to-t from-light from-[38%]"></div>
      <div className="w-full h-full bg-footer bg-cover xl:bg-bottom bg-left-bottom opacity-[0.33]">
        <div className="w-full h-full bg-footer2 bg-cover xl:bg-[center_10rem] md:bg-[center_-0.5rem] bg-[center_6.8rem] opacity-[0.30] ">
          <div className="w-full h-full bg-footer3 bg-cover xl:bg-[center_8.4rem] md:bg-[center_-1.2rem] bg-[right_6rem] opacity-[0.31] "></div>
        </div>
      </div>
    </motion.footer>
  );
};

export default FooterPage;
