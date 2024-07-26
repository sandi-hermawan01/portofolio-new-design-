"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";

import Image from "next/image";
import Link from "next/link";
import EmblaCarousel from "@/components/Embla/EmblaCarousel";
import EmblaCarouselTumdnail from "@/components/embla-tumdnail/EmblaCarouselTumdnail";

const concept_design = [
  {
    num: "01",
    title: "Full Stack",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    href: "",
  },
  {
    num: "02",
    title: "Front end",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    href: "",
  },
  {
    num: "03",
    title: "Nodejs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    href: "",
  },
  {
    num: "04",
    title: "Nextjs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    href: "",
  },
];
const sliderData = [
  {
    id: 1,
    image: "/assets/concept/img1.png",
    title: "Slider 01",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
  },
  {
    id: 2,
    image: "/assets/concept/img1.png",
    title: "Slider 02",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
  },
  {
    id: 3,
    image: "/assets/concept/img1.png",
    title: "Slider 03",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
  },
  {
    id: 3,
    image: "/assets/concept/img1.png",
    title: "Slider 04",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
  },
  {
    id: 3,
    image: "/assets/concept/img1.png",
    title: "Slider 05",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
  },
];
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
    <section className="flex min-h-[75vh] xl:min-h-[73vh] items-center justify-center ">
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      <EmblaCarouselTumdnail slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default ConceptDesign;
