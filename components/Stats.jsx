"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    num: 1,
    text: "Years of experience",
  },
  {
    num: 15,
    text: "Projects done",
  },
  {
    num: 7,
    text: "Technologies mastered",
  },
  {
    num: 300,
    text: "Code commits",
  },
];
//ascending
const sortedStats = stats.sort((a, b) => a.num - b.num);

const Stats = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
      }}
      className="pt-4 pb-12 xl:pt-0 xl:pb-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {sortedStats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[200px]" : "max-w-[150px]"
                  } leading-snug text-primary`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Stats;
