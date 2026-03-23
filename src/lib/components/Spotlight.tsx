import React, { useEffect, useState, useRef } from "react";
import Popup from "./Popup";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { computePosition, flip, shift, offset } from "@floating-ui/dom";

interface Step {
  target: string
  title: string
  description: string
  button: string
  number: number
  backbtn: string
}

interface SpotlightProps {
  steps: Step[]
  onFinish: () => void
}

export default function Spotlight({ steps, onFinish }: SpotlightProps) {
  const [position, setPosition] = useState<DOMRect | null>(null);
  const [nextStep, setNextStep] = useState<number>(0);

  const floatingRef = useRef<HTMLDivElement>(null);

  // Motion values for smooth spring animation
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const width = useMotionValue(0)
  const height = useMotionValue(0)

  const springConfig = { stiffness: 350, damping: 40 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  const springWidth = useSpring(width, springConfig)
  const springHeight = useSpring(height, springConfig)

  // if (!steps || steps.length === 0) return null;
  // if (nextStep >= steps.length) return null;

  const title = steps[nextStep].title;
  const description = steps[nextStep].description;
  const button = steps[nextStep].button;
  const backbtn = steps[nextStep].backbtn;

  useEffect(() => {
    const elements = document.querySelector(steps[nextStep].target);
    if (elements) {
      const elementPosition = elements.getBoundingClientRect();
      setPosition(elementPosition);
      // Update spring values — they will animate to new position
      x.set(elementPosition.left)
      y.set(elementPosition.top)
      width.set(elementPosition.width)
      height.set(elementPosition.height)

    } else {
      setPosition(null);
     
    }
  }, [nextStep]);

  useEffect(() => {
    async function updatePosition() {
      if (!floatingRef.current) return;
      const targetElement = document.querySelector(steps[nextStep].target);
      if (!targetElement) return;

      const { x, y } = await computePosition(
        targetElement,
        floatingRef.current,
        {
          placement: "bottom",
          middleware: 
          [offset(12), 
            flip(), 
            shift({ padding: 12})],
        }
      );

      Object.assign(floatingRef.current.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    }

    updatePosition();
  }, [nextStep, position]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextStep === steps.length - 1 ? onFinish() : setNextStep(prev => prev + 1);
      }
      if (e.key === "ArrowLeft") {
        nextStep === 0 ? onFinish() : setNextStep(prev => prev - 1);
      }
      if (e.key === "Escape") onFinish();
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [nextStep]);

  if (!position) return null;

  const handleStep = () => {
    nextStep === steps.length - 1 ? onFinish() : setNextStep(prev => prev + 1);
  };

  const handleback = () => {
    nextStep === 0 ? onFinish() : setNextStep(prev => prev - 1);
  };

  return (
    <div>
      <div data-spotlight="">

        {/* Spring-animated spotlight box */}
        <motion.div
          style={{
            position: "fixed",
            top: springY,
            left: springX,
            width: springWidth,
            height: springHeight,
            boxShadow: "var(--onboard-spotlight-shadow, 0 0 0 9999px rgba(0,0,0,0.85))",
            zIndex: "var(--onboard-spotlight-zIndex, 40)",
            backgroundColor: "var(--onboard-spotlight-bg, rgba(110, 109, 110, 0.17))",
            borderRadius: 4,
          }}
        />

        <Popup
          ref={floatingRef}
          title={title}
          description={description}
          number={nextStep + 1}
          button={button}
          backbtn={backbtn}
          totalSteps={steps.length}
          handleStep={handleStep}
          onFinish={onFinish}
          handleback={handleback}
        />
      </div>
    </div>
  );
}