"use client";

import { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
import { MotionValue, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export const HeroScrollProgressContext = createContext<MotionValue<number> | null>(null);

export function useHeroScrollProgress() {
  const progress = useContext(HeroScrollProgressContext);
  if (!progress) {
    throw new Error("useHeroScrollProgress must be used within ScrollyCanvas");
  }
  return progress;
}

const FRAME_COUNT = 120;

const publicPrefix = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, '0');
        img.src = `${publicPrefix}/sequence/frame_${paddedIndex}_delay-0.066s.png`;
        
        img.onload = () => {
          loadedCount++;
          if (loadedCount === FRAME_COUNT) {
            setImages(loadedImages);
          }
        };
        // Error handling or simple push
        loadedImages.push(img);
    }
  }, []);

  const drawImage = useCallback((index: number) => {
    if (images.length !== FRAME_COUNT) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[Math.round(index)];
    if (!img || !img.complete) return;

    // Object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [images]);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawImage(Math.max(0, Math.min(FRAME_COUNT - 1, frameIndex.get())));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [drawImage, frameIndex]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    drawImage(latest);
  });

  // Initial draw once loaded
  useEffect(() => {
    if (images.length === FRAME_COUNT) {
      drawImage(Math.max(0, Math.min(FRAME_COUNT - 1, frameIndex.get())));
    }
  }, [images, drawImage, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Synlig når canvas ikke tegnes (f.eks. JS feiler / feil sti til frames) */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-black bg-cover bg-center"
          style={{
            backgroundImage: `url(${publicPrefix}/sequence/frame_000_delay-0.066s.png)`,
          }}
          aria-hidden
        />
        <canvas ref={canvasRef} className="absolute inset-0 z-[1] h-full w-full block" />
        {/* Overlay must read the same scroll progress as the frame sequence (this container, not the document). */}
        <HeroScrollProgressContext.Provider value={scrollYProgress}>
          {children}
        </HeroScrollProgressContext.Provider>
      </div>
    </div>
  );
}
