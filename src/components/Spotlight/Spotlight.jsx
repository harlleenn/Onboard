import React, { useEffect, useState } from "react";
export default function Spotlight({steps , onFinish}) {
  const [position, setPosition] = useState(null);
  const [nextStep , setNextStep] = useState(0);
  useEffect(() => {
    const elements = document.querySelector(steps[nextStep].target)
    if (elements) {
      const element = elements.getBoundingClientRect()
      setPosition(element)
       console.log(element);
     
    }
  }, [nextStep]);

if (!position ) return null;


const handleStep = () => {
  if(nextStep === steps.length - 1 || 0 ){
    onFinish()
  }else {
    setNextStep(prev => prev + 1)
  }
}
const myStyle = {
   position: "fixed",
  top: position.top,
  left: position.left,
  width: position.width,
  height: position.height,
  backgroundColor: "orange"
}
  return <div>
    {position && <div style={myStyle}>
    <button onClick={handleStep}className="text-white">Click for next</button>
      </div>}
  </div>;
}
