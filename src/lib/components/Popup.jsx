import React, { forwardRef } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";



export default function Popup ({title,
  description,
  button,
  backbtn
  ,handleStep,
  number,
  onFinish
  ,totalSteps
  ,handleback,
  ref}) {
    const popoverStyle = {
      position: "absolute", // something ki when viewpor it tocuhes then it becomes stikcy
      backgroundColor: "var(--onboard-popover-bg, rgba(22,22,22,0.98))",
      zIndex: "var(--onboard-popover-z, 9999)",
      color: "var(--onboard-popover-fg, white)",
      borderRadius: "var(--onboard-popover-radius, 20px)",
      padding: "var(--onboard-popover-padding, 12px)",
      border:
        "var(--onboard-popover-border, 0.3px solid rgba(255, 255,255,0.1))",
      transitionProperty: "all",
      transitionDuration: "350ms",
      width: "clamp(100px, 70vw, 280px)",
    };

    return (
      
      <div data-popover="">
       
        <div style={popoverStyle} ref={ref}>
          <div className="flex-col flex h-full justify-center gap-2 text-balance relative">
            <button
              className="cursor-pointer absolute top-0 right-0"
              onClick={onFinish}
              type="button"
            >
              <X />
            </button>
            <div className="text-lg font-semibold">{title}</div>
            <div className="text-md text-gray-200">{description}</div>
            <div className="flex mt-5">
              <div className="flex flex-row w-full justify-between p-1">
                <div>
                  Steps {number} of {totalSteps}
                </div>
                <button
                  onClick={handleback}
                  type="button"
                  className="bg-[#0d0d0daa] rounded-full text-white cursor-pointer px-6 py-1 border-1 border-white/5"
                >
                  {backbtn}
                </button>
                <button
                  onClick={handleStep}
                  type="button"
                  className="bg-[#0d0d0daa] rounded-full text-white cursor-pointer px-6 py-1 border-1 border-white/5"
                >
                  {button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


