import { Bell } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-[hsl(0,0%,3%)] w-full h-14 md:h-16 border-b border-white/15 p-2 md:p-3">
      <div className="flex items-center justify-between h-full px-2 md:px-5 gap-3">
        
        <div id="search" className="flex-1 md:flex-none">
          <input
            placeholder="Search"
            className="h-9 md:h-10 w-full md:w-56 p-2 rounded-lg bg-[hsl(0,0%,10%)] text-white border border-white/10 text-sm md:text-base"
          />
        </div>

        <div className="flex flex-row gap-3 md:gap-5 justify-center items-center">
          <Bell className="w-5 h-5 md:w-6 md:h-6 text-white" />
          <div className="bg-white rounded-full flex justify-center px-2 md:px-3 py-1 text-xs md:text-sm">
          </div>
        </div>
      </div>
    </div>
  );
}