import React, { useEffect, useState } from "react";
import Popup from "./Popup";

export default function Spotlight({ steps, onFinish }) {
  const [position, setPosition] = useState(null);
  const [nextStep, setNextStep] = useState(0);
  const title = steps[nextStep].title;
  const description = steps[nextStep].description;
  const target = steps[nextStep].target

  useEffect(() => {
    const elements = document.querySelector(steps[nextStep].target);
    if (elements) {
      const element = elements.getBoundingClientRect();
      setPosition(element);
      console.log(element);
    }
  }, [nextStep]);

  if (!position) return null;

  const handleStep = () => {
    if (nextStep === steps.length - 1) {
      onFinish();
    } else {
      setNextStep((prev) => prev + 1);
    }
  };
  const myStyle = {
    position: "fixed",
    top: position.top,
    left: position.left,
    width: position.width,
    height: position.height,
    boxShadow: "0 0 0 9999px rgba(0,0,0,0.85)",
    zIndex: 40,
    backgroundColor:"rgb(255 255 255 / 0.1)",
  };
 return (
  <div>
    {position && (
      <>
        <div style={myStyle} />
        <Popup
          title={title}
          description={description}
          target={target}
          handleStep={handleStep}
          nextStep={nextStep}
          position={position}
        />
      </>
    )}
  </div>
);
}
