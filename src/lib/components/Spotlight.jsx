import React, { useEffect, useState, useRef } from "react";
import Popup from "./Popup";
import { motion, useSpring, useMotionValue } from "motion/react";
import { computePosition, flip, shift, offset, arrow, autoPlacement } from "@floating-ui/dom";


export default function Spotlight({ steps, onFinish }) {
  const [position, setPosition] = useState(null);
  const [nextStep, setNextStep] = useState(0);

  const floatingRef = useRef(null);

  if (!steps || steps.length === 0) return null;
  if (nextStep >= steps.length) return null;

  const title = steps[nextStep].title;
  const description = steps[nextStep].description;
  const button = steps[nextStep].button;
  const backbtn = steps[nextStep].backbtn;

  useEffect(() => {
    const elements = document.querySelector(steps[nextStep].target);
    elements?.scrollIntoView();  // when i add behavior then it is not giving correct positioning that is the styling

    if (elements) {
      const elementPosition = elements.getBoundingClientRect();
      setPosition(elementPosition);
    } else {
      setPosition(null);
    }
  }, [nextStep]);

  useEffect(() => {
    async function updatePosition() {
      if (!floatingRef.current) return;
      const targetElement = document.querySelector(steps[nextStep].target);
        // const arrowElement = document.getElementById('#arrow')
      if (!targetElement) return;
      // if(!arrowElement) return ;
      const { x, y } = await computePosition(
        targetElement,
        floatingRef.current,
        {
          placement: "bottom",
          middleware: [offset(12),
             autoPlacement({
              alignment: 'start',
              crossAxis:true,
              autoAlignment: true,
              
             }), 
             shift({ padding: 15 }),
            // arrow({element: arrowElement}),
          ],
        },
      );

      Object.assign(floatingRef.current.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    }

    updatePosition();
  }, [nextStep, position]);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "ArrowRight") {
        nextStep === steps.length - 1
          ? onFinish()
          : setNextStep((prev) => prev + 1);
      }
      if (e.key === "ArrowLeft") {
        nextStep === 0 ? onFinish() : setNextStep((prev) => prev - 1);
      }
      if (e.key === "Escape") onFinish();
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [nextStep]);

  if (!position) return null;

  const handleStep = () => {
    nextStep === steps.length - 1
      ? onFinish()
      : setNextStep((prev) => prev + 1);
  };

  const handleback = () => {
    nextStep === 0 ? onFinish() : setNextStep((prev) => prev - 1);
  };
  // const arrowStyle = {
  //    position: "absolute" as const,
  // background: "#222",
  // width: "8px",
  // height: "8px",
  // transform: "rotate(45deg)"
  // }

  return (
    <div>
      <div data-spotlight="">
 
        <div
          style={{
            position: "fixed",
            top: position.top,
            left: position.left,
            width: position.width,
            height: position.height,
            boxShadow:
              "var(--onboard-spotlight-shadow, 0 0 0 9999px rgba(0,0,0,0.85))",
            zIndex: "var(--onboard-spotlight-zIndex, 40)",
            backgroundColor:
              "var(--onboard-spotlight-bg, rgba(110, 109, 110, 0.17))",
            borderRadius: 4,
          }}
          
        />
{/* <div id="arrow" style={arrowStyle}>hiiiii</div> */}
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
