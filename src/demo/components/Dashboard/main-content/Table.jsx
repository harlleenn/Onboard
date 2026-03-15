import React, { useState } from "react";

export default function Table({ name, status, users, completion }) {
  return (
    <div
      className="grid grid-cols-4 px-4 py-4
      border-b border-white/5 hover:bg-white/5 text-white"
     
    >
      <span>{name}</span>
      <div className="flex flex-row  items-center gap-2">
        <span
          className={`w-2 h-2  rounded-full 
    ${status === "Active" ? "bg-green-400" : "bg-gray-500"}`}
        />
        <span className={`text-sm rounded-full `}>{status}</span>
      </div>

      <span>{users}</span>
      <span>{completion}</span>
    </div>
  );
}
