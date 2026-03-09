import React, { useState } from "react";

export default function Table({name, status, users,completion}) {
    const [active , setActive] = useState("")

  return (
      <div className="grid grid-cols-4 px-4 py-3
      border-b border-white/5 hover:bg-white/5 text-white">
        <span>{name}</span>
       <span className={`text-xs px-2 py-1 rounded-full 
  ${status === "Active" 
    ? "bg-green-500/20 text-green-400 rounded-full w-10" 
    : "bg-gray-500/20 text-gray-400 rounded-full w-10"}`}>
  {status}
</span>
        <span>{users}</span>
        <span>{completion}</span>
      </div>
  );
}
