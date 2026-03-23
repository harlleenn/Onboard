import React, { useState } from "react";

export default function Table({ name, status, users, completion }) {
  return (
    <div
      className="grid  grid-cols-3 gap-5  justify-center items-center md:grid-cols-4 px-4 py-4
      border-b border-white/5 hover:bg-white/5 text-white"
     
    >
      <span>{name}</span>
      <div className="flex flex-row  items-center gap-2">
        <span
          className={` 
  `}
        />
        <span className={`text-sm  h-auto px-2 py-1 rounded-full    ${status === "Active" ? "bg-[#0bf20baa]" : "bg-gray-500"} `}>{status}</span>
      </div>

      <span>{users}</span>
      <span>{completion}</span>
    </div>
  );
}
