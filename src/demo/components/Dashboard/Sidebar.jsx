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
  const [open, setOpen] = useState(false); 

  const items = [
    { id: 1, title: "Overview", icon: <LayoutDashboard size={20} /> },
    { id: 2, title: "Flows", icon: <FolderKanban size={20} /> },
    { id: 3, title: "Analytics", icon: <CircleDot size={20} /> },
    { id: 4, title: "Users", icon: <Users2 size={20} /> },
    { id: 5, title: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 bg-black text-white px-3 py-2 rounded"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed md:static top-0 left-0 z-40
        h-screen w-64
        bg-[hsl(0,0%,4%)] border-r border-white/15
        transform transition-transform duration-300
        
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      >
        <h1 className="text-white text-lg font-semibold p-7">Onboard</h1>

        <div className="flex flex-col gap-1 p-1">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setActive(item.title)}
              className={`
                flex items-center gap-3 h-[35px] pl-2 rounded-sm cursor-pointer transition-all
                ${
                  item.title === active
                    ? "bg-[hsl(0,0%,10%)] text-gray-100 border-l border-white"
                    : "text-gray-400 hover:text-gray-100 hover:bg-[hsl(0,0%,10%)]"
                }
              `}
            >
              {item.icon}
              {item.title}
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 md:hidden z-30"
        />
      )}
    </>
  );
}