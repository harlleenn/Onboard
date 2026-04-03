import React, { useState } from "react";

export default function Table({ name,owner }) {
  return (
    <div className="  border-white/5 hover:bg-white/5 text-white   ">
      <div className="grid  grid-cols-2 grid-rows-2  ">

    <span>{name}</span>
    <span>{owner}</span>
      </div>
   
    </div>
  );
}
