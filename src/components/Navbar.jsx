import { motion, useAnimation } from "framer-motion";
import { Rock_Salt } from "next/font/google";
import { useEffect } from "react";

import {
  containerVariants,
  animateNameVariants,
  positionNameVariants,
} from "../utils/motion";

const rockSalt = Rock_Salt({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const firstName = "ANTONIO";
  const lastName = "PASTORIZA";
  const controls = useAnimation();

  useEffect(() => {
    controls.start("after");
  }, [controls]);

  const handleAnimationComplete = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.classList.remove("h-screen");
      navbar.classList.add("h-fit");
      navbar.classList.remove("bg-black");
    }
  };

  return (
    <motion.div
      id="navbar"
      variants={positionNameVariants}
      initial="before"
      animate={controls}
      onAnimationComplete={handleAnimationComplete}
      className={`${rockSalt.className} absolute right-50 top-0 flex justify-center h-screen w-screen text-white bg-black transition-all ease-in duration-100`}
      aria-label="logo"
    >
      <motion.div variants={containerVariants} className="p-2 md:p-4">
        <div className="text-center">
          <div>
            {firstName.split("").map((letter, index) => (
              <motion.span key={index} variants={animateNameVariants}>
                {letter}
              </motion.span>
            ))}
          </div>
          <div>
            {lastName.split("").map((letter, index) => (
              <motion.span key={index} variants={animateNameVariants}>
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
