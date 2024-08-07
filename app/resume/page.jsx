"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, useAnimate, stagger } from "framer-motion";

//about
const about = {
  title: "About me",
  description: "Here are the details of my personal data",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sandi Hermawan",
    },
    {
      fieldName: "Phone",
      fieldValue: "+62 -",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Years",
    },
    {
      fieldName: "Github",
      fieldValue: "sandihermawanf01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian",
    },
    {
      fieldName: "Email",
      fieldValue: "sandihermawanf01@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Indonesia, English",
    },
  ],
};
const experience = {
  icon: "/asset/resume/badge.svg",
  title: "My experience",
  description: `The following is my work experience, my experience in the world of work is still relatively small, but I always want to develop and try to keep up with technological developments.`,
  items: [
    {
      company: "JDIH (Jaringan Dokumentasi dan Informasi Hukum) Kota Bandung",
      position: "Product Manager & Ai Engineer",
      duration: "5 Month",
    },
  ],
};
const education = {
  icon: "/asset/resume/cap.svg",
  title: "My education",
  description:
    "Here is my educational journey, from a bachelor's degree in computer science to bootcamps and online courses.",
  items: [
    {
      institution: "Universitas Teknologi Bandung",
      degree: "S1 Teknik Informatika",
      duration: "2019 - 2023",
    },
    {
      institution: "Agate Academy (Bootcamp)",
      degree: "Game Design & Game Programmer",
      duration: "6 Month",
    },
    {
      institution: "Orbit Future Academy (Bootcamp)",
      degree: "Ai Engineer",
      duration: "6 Month",
    },
    {
      institution: "MySkill (Online Course)",
      degree: "Data Analys & Data Science",
      duration: "5 Month ",
    },
  ],
};
const skills = {
  title: "My skills",
  description:
    "The following are some of the skills that I have mastered quite well.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 5",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNode />,
      name: "node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 xl:mt-20"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[70px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-primary/80">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-primary/70 text-xl mx-auto xl:mx-0 drop-shadow-md">
                  {experience.description}
                </p>
                {/* 
                <p className="max-w-[600px] text-primary/70 text-xl mx-auto xl:mx-0 drop-shadow-md">
                  {experience.description}
                </p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] p-5">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-accent-hover h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-primary">{item.duration}</span>
                          <span className="w-7 h-[1px] bg-primary">.</span>
                          <h3 className="text-xl pt-2 max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center pt-1 gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-primary"></span>
                            <p className="text-primary/80">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-primary/80">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-primary/70 text-xl mx-auto xl:mx-0 drop-shadow-md">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] border-[1.5px] border-primary/30 mb-5">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] p-5">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-accent-hover h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-primary">{item.duration}</span>
                          <span className="w-7 h-[1px] bg-primary">.</span>
                          <h3 className="text-xl pt-2 max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-primary"></span>
                            <p className="text-primary/80">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-primary/80">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-xl text-primary/70 mx-auto xl:mx-0 drop-shadow-md">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:p-5 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-accent-hover rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:sm-text-outline  group-hover:drop-shadow-xl group-hover:text-white transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-primary/80">
                  {about.title}
                </h3>
                <p className="max-w-[600px] text-xl text-primary/70 mx-auto xl:mx-0 drop-shadow-md">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[650px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-primary/70">
                          {item.fieldName}
                        </span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
                <div className="w-full h-[100px] xl:h-[200px]"></div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
