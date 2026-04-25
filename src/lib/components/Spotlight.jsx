import React, { useEffect, useState, useRef } from "react";
import Popup from "./Popup";
import { computePosition, flip, detectOverflow, autoUpdate } from "@floating-ui/dom";

export default function Spotlight({ steps, onFinish }) {
  const [position, setPosition] = useState(null);
  const [nextStep, setNextStep] = useState(0);
  const floatingRef = useRef(null);
  const cleanupRef = useRef(null);

  if (nextStep >= steps.length) return null;

  const title = steps[nextStep].title;
  const description = steps[nextStep].description;
  const button = steps[nextStep].button;
  const backbtn = steps[nextStep].backbtn;

  // effect 1 - measure target
  useEffect(() => {
    const element = document.querySelector(steps[nextStep].target);

    if (!element) {
      nextStep < steps.length - 1 ? setNextStep((prev) => prev + 1) : onFinish();
      return;
    }

    element.scrollIntoView();

    const raf = requestAnimationFrame(() => {
      const elementPosition = element.getBoundingClientRect();

      if (elementPosition.width === 0 && elementPosition.height === 0) {
        nextStep < steps.length - 1 ? setNextStep((prev) => prev + 1) : onFinish();
        return;
      }

      setPosition(elementPosition);
    });

    return () => cancelAnimationFrame(raf);
  }, [nextStep]);

  // effect 2 - position popup
  useEffect(() => {
    if (!position) return;

    const targetElement = document.querySelector(steps[nextStep].target);
    if (!targetElement) return;

    const overflowMiddleware = {
      name: "overflowMiddleware",
      async fn(state) {
        const overflow = await detectOverflow(state, { rootBoundary: "viewport" });
        let { x, y } = state;
        if (overflow.bottom > 0) y -= overflow.bottom;
        if (overflow.top > 0) y += overflow.top;
        return { x, y };
      },
    };

    function updatePosition() {
      if (!floatingRef.current) return;

      const updatedPosition = targetElement.getBoundingClientRect();
      setPosition(updatedPosition);

      computePosition(targetElement, floatingRef.current, {
        placement: "bottom",
        middleware: [flip(), overflowMiddleware],
      }).then(({ x, y }) => {
        if (!floatingRef.current) return;
        Object.assign(floatingRef.current.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }

    const raf = requestAnimationFrame(() => {
      updatePosition();
      cleanupRef.current = autoUpdate(targetElement, floatingRef.current, updatePosition);
    });

    return () => {
      cancelAnimationFrame(raf);
      cleanupRef.current?.();
    };
  }, [position]);

  // effect 3 - keyboard nav
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "ArrowRight") {
        nextStep === steps.length - 1 ? onFinish() : setNextStep((prev) => prev + 1);
      }
      if (e.key === "ArrowLeft") {
        nextStep === 0 ? onFinish() : setNextStep((prev) => prev - 1);
      }
      if (e.key === "Escape") onFinish();
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [nextStep]);

  const handleStep = () => {
    nextStep === steps.length - 1 ? onFinish() : setNextStep((prev) => prev + 1);
  };

  const handleback = () => {
    nextStep === 0 ? onFinish() : setNextStep((prev) => prev - 1);
  };

  return (
    <div>
      {position && position.width > 0 && position.height > 0 && (
        <div data-spotlight="">
          <div
            style={{
              position: "fixed",
              top: position.top,
              left: position.left,
              width: position.width,
              height: position.height,
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
      )}
    </div>
  );
}