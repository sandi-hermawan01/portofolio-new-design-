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
      className="w-full h-[150px]"
    >
      <div className="w-full h-full bg-footer bg-cover xl:bg-bottom bg-left-bottom opacity-60">
        <div className="w-full h-full bg-footer2 bg-cover xl:bg-[center_9rem] md:bg-[center_-0.5rem] bg-[center_6.8rem] opacity-45 ">
          <div className="w-full h-full bg-footer3 bg-cover xl:bg-[center_7.9rem] md:bg-[center_-1.2rem] bg-[right_6rem] opacity-25 "></div>
        </div>
      </div>
    </motion.footer>
  );
};

export default FooterPage;
