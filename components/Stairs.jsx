import { animate, motion } from "framer-motion";

//variant
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//calculate the reverse
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render motion */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-light relative inset-0 bg-[linear-gradient(to_right,#25283b22_3px,transparent_1px),linear-gradient(to_bottom,#25283b22_3px,transparent_1px)] bg-[size:100px_100px]"
          />
        );
      })}
    </>
  );
};

export default Stairs;
