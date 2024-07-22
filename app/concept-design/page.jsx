"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import React, { useState, useEffect, useCallback } from "react";

import Image from "next/image";
import Link from "next/link";

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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const ConceptDesign = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);
  return (
    <section className="flex min-h-[75vh] xl:min-h-[73vh] items-center justify-center">
      <div className="flex flex-row w-full h-[60vh] px-4 items-center justify-end mr-11">
        <div className="inset-0 overflow-hidden">
          {sliderData.map((item, index) => (
            <div
              key={item.id}
              className={` inset-0 transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100 z-10" : "opacity-0"
              }`}
            >
              {/* <Image
                src={item.image}
                alt={item.title}
                layout="fill"
              /> */}
              <div className=" inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute left-[10%] top-[40%] w-[500px] max-w-[80%] z-1">
                <p className="uppercase tracking-[10px] animate-fadeIn">
                  design
                </p>
                <h2 className="text-8xl m-0 animate-fadeIn animation-delay-1000">
                  {item.title}
                </h2>
                <p className="animate-fadeIn animation-delay-1300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute z-[15] w-[37rem] right-[5%] flex justify-between items-center">
          <button
            onClick={prevSlide}
            className="bg-gray-200 bg-opacity-30 w-10 h-10 rounded text-white text-xl transition-colors duration-500 hover:bg-white hover:text-black"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-200 bg-opacity-30 w-10 h-10 rounded text-white text-xl transition-colors duration-500 hover:bg-white hover:text-black ml-2"
          >
            &gt;
          </button>
        </div>

        <div className=" flex gap-2 w-[39rem] h-[420px] pl-2 box-border overflow-auto">
          {sliderData.map((item, index) => (
            <div
              key={item.id}
              className={`w-[200px] h-[390px] transition-all duration-500 flex-shrink-0 cursor-pointer ${
                index === activeIndex ? "brightness-150" : "brightness-50"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConceptDesign;
