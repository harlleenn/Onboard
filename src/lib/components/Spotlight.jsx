import React, { useEffect, useState, useRef } from "react";
import Popup from "./Popup";
import { computePosition, flip, detectOverflow } from "@floating-ui/dom";
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
    elements?.scrollIntoView(); // when i add behavior then it is not giving correct positioning that is the styling

    if (elements) {
      const elementPosition = elements.getBoundingClientRect();
      setPosition(elementPosition);
      // if(elementPosition.top === 0){
      // }
      // console.log(elementPosition)
    } else {
      setPosition(null);
    }
  }, [nextStep]);

  useEffect(() => {
    if(!position) return
    if (position.width === 0 && position.height === 0) return

  //  console.log(elementPosition)
    function updatePosition() {
      
      if (!floatingRef.current) return;
      // if(position.top === 0) return 
      const targetElement = document.querySelector(steps[nextStep].target);
      if (!targetElement) return;

      const overflowMiddleware = {
        name: "overflowMiddleware",
        async fn(state) {
          const overflow = await detectOverflow(state, {
            rootBoundary: "viewport",
          });

          // Example: adjust position if overflowing top
          let { x, y } = state;
          // console.log(state);
          // console.log(state.middlewareData);

          if (overflow.bottom < -100) {
            y += Math.abs(200);
          }
           if(overflow.top < -100) {
            y -= Math.abs(overflow.top)
           }

          return {
            x,
            y,
            // data: {
            //   overflow, // optional: store for debugging
            // },
          };
        },
      };
      computePosition(targetElement, floatingRef.current, {
        placement: "bottom",
        middleware: [flip({ boundary: "viewport" }), overflowMiddleware],
      }).then(({ x, y }) => {
        Object.assign(floatingRef.current.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
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

  return (
    <div>
      <div data-spotlight="">
         {position && position.width > 0 && position.height > 0 &&
        <div
          style={{
            position: "fixed", // when it is ixed it is with respect
            // to the view port mabey when the user scrolls then it is absolute and popup sticky
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
}
       
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
          position={position}
        />

     
      </div>
    </div>
  );
}
