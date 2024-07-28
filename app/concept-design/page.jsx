"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";

import Image from "next/image";
import Link from "next/link";
import EmblaCarousel from "@/components/Embla/EmblaCarousel";
import EmblaCarouselTumdnail from "@/components/embla-tumdnail/EmblaCarouselTumdnail";

//embla settings
const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const ConceptDesign = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[75vh] xl:min-h-[73vh] items-center justify-center "
    >
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      <EmblaCarouselTumdnail slides={SLIDES} options={OPTIONS} />
    </motion.section>
  );
};

export default ConceptDesign;
