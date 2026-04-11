"use client";

import { motion, useTransform } from "framer-motion";
import { useHeroScrollProgress } from "./ScrollyCanvas";

export default function Overlay() {
  const scrollYProgress = useHeroScrollProgress();

  // Same 0–1 timeline as ScrollyCanvas; ranges are sequential so only one line is visible at a time.
  // 1: "Amin Ismail" (center)
  const opacity1 = useTransform(scrollYProgress, [0, 0.22, 0.3], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  // 2: "I build digital experiences." (left)
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.34, 0.52, 0.58], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.34, 0.58], [36, 0, -36]);

  // 3: "Bridging design and engineering." (right)
  const opacity3 = useTransform(scrollYProgress, [0.58, 0.62, 0.86, 0.92], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.58, 0.62, 0.92], [36, 0, -36]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center text-white p-8 md:p-24 overflow-hidden">
      
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center text-center"
      >
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-lg">
          Amin Ismail<br />
          <span className="text-2xl md:text-4xl font-light text-white/80">Software Developer</span>
        </h1>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start max-w-7xl mx-auto w-full px-8 md:px-24"
      >
        <h2 className="text-3xl md:text-6xl font-medium max-w-md drop-shadow-md">
          I build digital experiences.
        </h2>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end max-w-7xl mx-auto w-full px-8 md:px-24"
      >
        <h2 className="text-3xl md:text-6xl font-medium max-w-md text-right drop-shadow-md">
          Bridging design and engineering.
        </h2>
      </motion.div>

    </div>
  );
}
