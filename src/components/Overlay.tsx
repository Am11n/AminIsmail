"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { useHeroScrollProgress } from "./ScrollyCanvas";

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

/** Mutually exclusive phases on the same 0–1 hero timeline as ScrollyCanvas (no overlapping keyframe interpolation). */
function useHeroTextMotion(scrollYProgress: MotionValue<number>) {
  const t1 = 0.3;
  const t2 = 0.58;
  const t3End = 0.94;

  const opacity1 = useTransform(scrollYProgress, (v) => (clamp01(v) < t1 ? 1 : 0));
  const opacity2 = useTransform(scrollYProgress, (v) => {
    const t = clamp01(v);
    return t >= t1 && t < t2 ? 1 : 0;
  });
  const opacity3 = useTransform(scrollYProgress, (v) => {
    const t = clamp01(v);
    return t >= t2 && t < t3End ? 1 : 0;
  });

  const y1 = useTransform(scrollYProgress, [0, t1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [t1, t2], [28, -28]);
  const y3 = useTransform(scrollYProgress, [t2, t3End], [28, -28]);

  const visibility1 = useTransform(opacity1, (o) => (o < 0.5 ? "hidden" : "visible"));
  const visibility2 = useTransform(opacity2, (o) => (o < 0.5 ? "hidden" : "visible"));
  const visibility3 = useTransform(opacity3, (o) => (o < 0.5 ? "hidden" : "visible"));

  return { opacity1, opacity2, opacity3, y1, y2, y3, visibility1, visibility2, visibility3 };
}

export default function Overlay() {
  const scrollYProgress = useHeroScrollProgress();
  const { opacity1, opacity2, opacity3, y1, y2, y3, visibility1, visibility2, visibility3 } =
    useHeroTextMotion(scrollYProgress);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center text-white p-8 md:p-24 overflow-hidden">
      
      <motion.div 
        style={{ opacity: opacity1, y: y1, visibility: visibility1 }}
        className="absolute inset-0 flex items-center justify-center text-center"
      >
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-lg">
          Amin Ismail<br />
          <span className="text-2xl md:text-4xl font-light text-white/80">Software Developer</span>
        </h1>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity2, y: y2, visibility: visibility2 }}
        className="absolute inset-0 flex items-center justify-start max-w-7xl mx-auto w-full px-8 md:px-24"
      >
        <h2 className="text-3xl md:text-6xl font-medium max-w-md drop-shadow-md">
          I build digital experiences.
        </h2>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity3, y: y3, visibility: visibility3 }}
        className="absolute inset-0 flex items-center justify-end max-w-7xl mx-auto w-full px-8 md:px-24"
      >
        <h2 className="text-3xl md:text-6xl font-medium max-w-md text-right drop-shadow-md">
          Bridging design and engineering.
        </h2>
      </motion.div>

    </div>
  );
}
