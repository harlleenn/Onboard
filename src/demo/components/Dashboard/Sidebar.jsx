import React, { useState } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  CircleDot,
  Settings,
  Users2,
  Notebook,
  TagsIcon,
  ShareIcon,
  HelpCircle,
  FilesIcon,
  Search,
} from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("Overview");
  const items = [
    { id: 1, title: "Overview", icon: <LayoutDashboard width={20} /> },
    { id: 2, title: "Notes", icon: <FolderKanban width={20} /> },
    { id: 3, title: "Calender", icon: <CircleDot width={20} /> },
    { id: 4, title: "Tasks", icon: <Users2 width={20} /> },
    { id: 5, title: "Files", icon: <FilesIcon width={20} /> },
    { id: 6, title: "Templates", icon: <Settings width={20} /> },
    { id: 7, title: "Notebook", icon: <Notebook width={20} /> },
    { id: 8, title: "Tags", icon: <TagsIcon width={20} /> },
    { id: 9, title: "Shared with me", icon: <ShareIcon width={20} /> },
    { id: 10, title: "Settings", icon: <Settings width={20} /> },
    { id: 11, title: "Help center", icon: <HelpCircle width={20} /> },
  ];
  return (
    <div
      className="bg-[hsl(0,0%,4%)] border-r border-white/15 
      hidden md:inline-block  md:w-56 lg:w-64 "
      id="sideBar"
      data-theme="dark"
    >
      <h1 className="text-white pl-2 text-base md:text-lg font-semibold p-5 md:p-7">
        Onboard
      </h1>
      <div id="search" className="flex-1 md:flex min-h-0 justify-center mb-10">
        <input
          placeholder="Quick Search"
          className="h-9 md:h-10 w-full max-w-full md:w-56 p-2 rounded-lg bg-[hsl(0,0%,10%)] text-white border border-white/10 text-sm md:text-base"
        />
      </div>
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex flex-row gap-3 w-full h-[35px] text-center items-center cursor-pointer transition-all duration-[0.10]
         rounded-sm pl-2 text-sm md:text-base
          ${item.title === active ? "bg-[hsl(0,0%,10%)] text-gray-100 border-l border-white" : "text-gray-400 hover:text-gray-100 hover:bg-[hsl(0,0%,10%)]"}`}
            onClick={() => setActive(item.title)}
          >
            {item.icon}
            <span className="">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
