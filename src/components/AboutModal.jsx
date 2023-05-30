import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutModal() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [Modal, setModal] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      setPosition({ x, y });

      if (
        x >= windowSize.width * 0.4 &&
        x <= windowSize.width * 0.6 &&
        y >= 0 &&
        y <= windowSize.height * 0.1
      ) {
        setModal(true);
      } else {
        setModal(false);
      }
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    handleResize(); // Initial window size

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`fixed z-50`}>
      {Modal && (
        <motion.div
          animate={{ x: position.x, y: position.y }}
          className="h-24 w-24 bg-white rounded-full flex items-center justify-center text-sm leading-3"
        >
          About <br />
          Anton &rarr;
        </motion.div>
      )}
    </div>
  );
}
