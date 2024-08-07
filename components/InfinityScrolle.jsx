"use client";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const skills = [
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
];
const InfinityScrolle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
      }}
      className="relative lg:w-[65%] w-[80%] max-w-[1536px] mx-auto h-[100px] mt-14  items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0))]"
    >
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`absolute lg:w-[180px] lg:h-[75px] w-[55px] h-[50px] bg-accent-hover/80 rounded-md lg:left-[max(calc(200px*8),100%)] left-[max(calc(50px*7),100%)]  animate-scrollLeft`}
          style={{
            animationDelay: `calc(30s / 8 * (8 - ${index + 1}) * -1)`,
          }}
        >
          <div className="flex w-full h-full items-center justify-center lg:text-5xl text-3xl group-hover:sm-text-outline group-hover:drop-shadow-xl group-hover:text-white transition-all duration-300">
            {skill.icon}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default InfinityScrolle;
