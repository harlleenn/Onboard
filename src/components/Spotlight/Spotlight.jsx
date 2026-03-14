import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import "./App.css";

export default function Spotlight({ steps, onFinish }) {
  const [position, setPosition] = useState(null);
  const [nextStep, setNextStep] = useState(0);

  const title = steps[nextStep].title;
  const description = steps[nextStep].description;
  const button = steps[nextStep].button;
  const number = steps[nextStep].number;

  useEffect(() => {
    const elements = document.querySelector(steps[nextStep].target);
    if (elements) {
      const element = elements.getBoundingClientRect();
      setPosition(element);
    } else {
      setPosition(null);
    }
  }, [nextStep]);

  const handleKeydown = (e) => {
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
  useEffect(() => {
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

  const elementSpotlight = {
    position: "fixed",
    top: position.top,
    left: position.left,
    width: position.width,
    height: position.height,
    boxShadow: "var(--onboard-spotlight-shadow ,  0 0 0 9999px rgba(0,0,0,0.85))",
    zIndex: "var(--onboard-spotlight-zIndex, 40)",
    backgroundColor: "var(--onboard-spotlight-bg, rgb(255 255 255 / 0.1))",
  };
  return (
    <div>
      {position && (
        <>
          <div data-spotlight="">
            <div style={elementSpotlight} />
            <Popup
              title={title}
              description={description}
              number={number}
              button={button}
              totalSteps={steps.length}
              handleStep={handleStep}
              nextStep={nextStep}
              position={position}
              onFinish={onFinish}
            />
          </div>
        </>
      )}
    </div>
  );
}
