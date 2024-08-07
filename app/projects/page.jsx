"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { JetBrains_Mono } from "next/font/google";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "zsans blog publisher",
    description:
      "zsans - blog publiher is a platform to publish articles easily, created by sandi hermawan with the help of the internet, one of which is youtube.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind" },
      { name: "Postcss" },
      { name: "Express.Js" },
      { name: "MongoDb" },
      { name: "AWS S3" },
    ],
    image: "/assets/work/zsans-blog-publisher-promo.png",
    live: "https://www.zsans-product.tech/",
    github: "",
    status: "private",
  },
  {
    num: "02",
    category: "frontend",
    title: "portfolio v2",
    description: "Nothing special on this theme, just a simple portfolio",
    stack: [{ name: "Node.js" }, { name: "Next.js" }, { name: "Tailwind" }],
    image: "/assets/work/portfv2.jpg",
    live: "https://zsans-product.online/",
    github: "https://github.com/sandi-hermawan01/personal-portofolioV2.git",
    status: "public",
  },
  {
    num: "03",
    category: "fullstack",
    title: "portfolio v1",
    description:
      "This is my first portfolio using vanilla technology like html css, the design is pretty good but the structure is still messy :)",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Javascript" }],
    image: "/assets/work/portfv1.jpg",
    live: "https://personal-portofolio-mu.vercel.app/",
    github: "https://github.com/sandi-hermawan01/personal-portofolio.git",
    status: "public",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto xl:mt-5">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/* outline num */}
              <div
                className={`${jetbrainsMono.variable} font-jetbrain text-8xl leading-none font-extrabold text-transparent text-outline`}
              >
                {project.num}
              </div>
              {/* project category */}
              <h1 className="text-[42px] font-bold leading-none text-primary/80 group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h1>
              <h2 className="text-xl font-bold leading-none text-primary/80 group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project descrip */}
              <p className="text-primary/70 text-md">{project.description}</p>
              {/* tech stack */}
              <h2 className="text-xl font-bold text-primary/80 mt-4">
                Tech stack
              </h2>
              <ul className="grid grid-cols-3 xl:grid-cols-4 gap-4 items-center justify-center text-nowrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-primary/70">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-primary/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full outline-primary/70 outline flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* git button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full outline-primary/70 outline flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{project.status}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
              <div className="w-full h-11"></div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12 "
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 border-primary/50 border-[1.4px] shadow-xl">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          alt=""
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slide button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
