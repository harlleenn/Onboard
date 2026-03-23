import React, { useEffect, useState, useRef } from "react";
import Popup from "./Popup";
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


  const title = steps[nextStep].title;
  const description = steps[nextStep].description;
  const button = steps[nextStep].button;
  const backbtn = steps[nextStep].backbtn

  const referenceRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const elements = document.querySelector(steps[nextStep].target);

    if (elements) {
      const element = elements.getBoundingClientRect();
      setPosition(element);
    } else {
      setPosition(null);
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Spotlight: target "${steps[nextStep].target}" not found in the DOM`)
      }
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
          placement: "left",
          middleware: [offset(2), flip(), shift({ padding: 2 })],
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
        if (nextStep === steps.length - 1) {
          onFinish();
        } else {
          setNextStep((prev) => prev + 1);
        }
      }
      if (e.key === "ArrowLeft") {
        if (nextStep === 0) {
          onFinish();
          return;
        } else {
          setNextStep((prev) => prev - 1);
        }
      }
      if (e.key === "Escape") {
        onFinish();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [nextStep]);

  if (!position) return null;
  

  const handleStep = () => {
    
    if (nextStep === steps.length - 1) {
      onFinish();
    } else {
      setNextStep((prev) => prev + 1);
    }
  };
  const handleback = () => {
    if (nextStep === steps.length - 1){
      onFinish()
    }else {
        setNextStep((prev) => prev - 1)
    }
    
  }


  const elementSpotlight = {
    position: "fixed" as const,
    top: position.top,
    left: position.left,
    width: position.width,
    height: position.height,
    boxShadow: "var(--onboard-spotlight-shadow, 0 0 0 9px rgba(0,0,0,0.85))",
    zIndex: "var(--onboard-spotlight-zIndex, 40)",
    backgroundColor: "var(--onboard-spotlight-bg, rgba(110, 109, 110, 0.17))",
  };

  return (
    <div>
      {position && (
        <div data-spotlight="">
          <div style={elementSpotlight} ref={referenceRef} />
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
      )}
    </div>
  );
}