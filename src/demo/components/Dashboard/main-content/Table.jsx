import React, { useState } from "react";

export default function Table({ name, status, users, completion }) {
  return (
    <div className="  border-white/5 hover:bg-white/5 text-white p-2  ">
      <div className="grid  grid-cols-4  md:grid-cols-4 ">
    <span>{name}</span>
    <span className={`${status === "Active" ? "bg-[#14f814aa] rounded-full  w-17 h-8 md:w-15 px-2": "bg-[#565856aa] rounded-full w-17 h-8  md:w-15 px-2"}`}>
      {status}
      </span>
    <span>{users}</span>
    <span>{completion}</span>
      </div>
   
    </div>
  );
}
