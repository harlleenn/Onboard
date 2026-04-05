import React, { useState } from "react";

export default function Table({ name,owner }) {
  return (
    <div className=" flex flex-1 border-white/5 hover:bg-white/5 text-white   ">
      <div className="grid  grid-cols-2 grid-rows-2  w-full min-h-0 ">

    <span>{name}</span>
    <span>{owner}</span>
      </div>
   
    </div>
  );
}
