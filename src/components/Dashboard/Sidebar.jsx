import React, { useState } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  CircleDot,
  Settings,
  Users2,
} from "lucide-react";
export default function Sidebar() {
  const [active, setActive] = useState("Overview");
  const items = [
    { id: 1, title: "Overview", icon: <LayoutDashboard width={20} /> },
    { id: 2, title: "Flows", icon: <FolderKanban width={20} /> },
    { id: 3, title: "Analytics", icon: <CircleDot width={20} /> },
    { id: 4, title: "Users", icon: <Users2 width={20} /> },
    { id: 5, title: "Settings", icon: <Settings width={20} /> },
  ];
  return (
    <div
      className="  bg-[#000000]  w-64 h-screen relative border-r border-white/15 "
      id="sidebar"
    >
      <h1 className="text-white pl-2 text-lg font-semibold p-7">Onboard</h1>
      <div className="flex flex-col  gap-1 p-1 ">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex flex-row gap-3  w-full h-[35px] text-center items-center  cursor-pointer transition-all duration-[0.10]
         rounded-sm pl-2
          ${item.title === active ? "bg-[#272827aa] text-gray-100 border-l-1 border-white" : "text-gray-400  hover:text-gray-100 hover:bg-[#272827aa]"}`}
            onClick={() => setActive(item.title)}
          >
            {item.icon}
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
