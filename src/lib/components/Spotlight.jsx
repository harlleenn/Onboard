import React, { useEffect, useState , useRef} from "react";
import Popup from "./Popup";
import  {computePosition, flip, shift} from "@floating-ui/dom"


export default function Spotlight({ steps, onFinish }) {
  const [position, setPosition] = useState(null);
  const [nextStep, setNextStep] = useState(0);

  const title = steps[nextStep].title;
  const description = steps[nextStep].description;
  const button = steps[nextStep].button;

const referenceRef = useRef(null);
const floatingRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelector(steps[nextStep].target);
    if (elements) {
      const element = elements.getBoundingClientRect();
      setPosition(element);
      console.log(element)
    } else {
      setPosition(null);
    }
  }, [nextStep]);



useEffect(() => {
  async function updatePosition() {
    if (!referenceRef.current || !floatingRef.current) return
    
    const position = await computePosition(referenceRef.current, floatingRef.current, {
      placement: "left",
      middleware: [offset(10),flip(), shift({padding: 2})]

    });
    // floatingRef.current.style.left = `${position.x}px`
    // floatingRef.current.style.right = `${position.y}px`
    console.log(position.middlewareData , position.y)
  }
  updatePosition()
}, [nextStep, position])
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
    boxShadow:
      "var(--onboard-spotlight-shadow ,  0 0 0 9px rgba(0,0,0,0.85))",
    zIndex: "var(--onboard-spotlight-zIndex, 40)",
    backgroundColor: "var(--onboard-spotlight-bg, rgb(255 255 255 / 0.1))",
  };
  return (
    <div>
      {position && (
        <>
          <div data-spotlight="">
            <div style={elementSpotlight} ref={referenceRef}/>
            <Popup
            ref={floatingRef}
            position={position}
              title={title}
              description={description}
              number={nextStep + 1}
              button={button}
              totalSteps={steps.length}
              handleStep={handleStep}
              nextStep={nextStep}
              onFinish={onFinish}
            />
          </div>
        </>
      )}
    </div>
  );
}
