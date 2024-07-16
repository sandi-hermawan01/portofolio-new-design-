"use client";

import { Fjalla_One } from "next/font/google";
import { motion } from "framer-motion";

//components
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";

const fjallaOne = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-FjallaOne",
});
const font_use = fjallaOne.variable;

const HomeText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
      }}
      className="text-center xl:text-left xl:justify-center order-2 xl:order-none "
    >
      <h1 className={`${font_use} h1 mb-6 font-fjallaOne text-primary/80`}>
        Zsans Personal{" "}
        <span className="text-accent font-fjallaOne">Portfolio</span>
      </h1>
      <span className={`text-xl font-semi`}>
        Web Developer || Frontend Developer
      </span>
      <p className="max-w-[700px] mt-2 mb-9 text-primary">
        Hello! I am Sandi Hermawan, currently I live in bandung, a web
        developer. You can download the cv below.
      </p>
      {/* social btn */}
      <div className="flex flex-col xl:flex-row items-center gap-8">
        <Button
          size="lg"
          className="uppercase flex items-center gap-2 hover:text-accent"
        >
          Download Cv
        </Button>
        <div className="mb-8 xl:mb-0">
          <Socials
            containerStyles="flex gap-6"
            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HomeText;
