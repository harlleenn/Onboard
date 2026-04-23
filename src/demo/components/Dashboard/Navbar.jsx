import { Bell,Moon, Sun } from "lucide-react";
import React, { useState } from "react";
// import './theme.css'
export default function Navbar() {


  return (
    <div className="bg-[hsl(0,0%,0%)]  flex-1
     h-14 md:h-16 border-b border-white/15 p-2 md:p-3" >
      {/* <div className="flex flex-row justify-between h-full px-2 md:px-5 gap-3">
        
      

        <div className=" hidden md:flex md:flex-row  md:gap-5 justify-center items-center">
          <Bell className="w-5 h-5 md:w-6 md:h-6 text-white" />
        <button id='theme-toggle'  className="bg-amber-10 text-white">
          {/* {active ? <Sun/> : <Moon/>} */}
          {/* </button>
        </div>
      </div> */} 
    </div>
  );
}