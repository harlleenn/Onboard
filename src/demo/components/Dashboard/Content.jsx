import React from "react";
import Card from "./main-content/table-content/Card";
import Table from "./main-content/table-content/Table";

export default function Content({ onStartTour }) {
    const flows = [
  {id:1 , name: "Isgnup Onboarding", status: "Active", users: "2.5 GB", completion: "50%" },
  { id:2, name: "Feature Discovery", status: "Active", users: "1.2 GB", completion: "20%" },
  {id:3,  name: "Mobile Walkthorugh", status: "Draft", users: "150 MB", completion: "30%" },
]
const btnItems = [
   {id:1 , name: "Dashboard",  },
  { id:2, name: "Projects" },
  {id:3,  name: "Views" },
   {id:4,  name: "Issues" },
]
  return (
    <div className="bg-[hsl(0,45%,2%)] flex flex-col flex-1 " data-theme="dark"> 
    {/* i added flex here */}
      
      <div className="flex flex-col gap-10 md:flex-row md:justify-between p-5">
        <div className="flex flex-col">
          <div className="text-white font-bold text-xl md:text-2xl">Overview</div>
          <div className="text-gray-400 text-sm md:text-lg">
            Welcome back, Harleen. Here's what's happening.
          </div>
        </div>

        <div className="flex  md:items-center" id="start-tour">
          <button
            className="text-black inset-shadow-2xs inset-shadow-amber-800 cursor-pointer 
            bg-[#f3f2f3] px-4 md:px-5 py-2 rounded-full font-semibold text-sm md:text-base w-full md:w-auto"
            onClick={() => onStartTour()}>
            Start tour
          </button>
        </div>
      </div>

       <div
        className="mt-5 p-4 md:p-10 gap-3 md:gap-5 grid grid-cols-2  w-full max-w-full rounded-2xl  "id="stats"
      >
        <Card 
        number="12" 
        title="Total Flows" 
        sublabel="+2 this month" />
        <Card
          number="1,204"
          title="Active Users"
          sublabel="↑ 12% from last week"
        />
        <Card
          number="68%"
          title="Completion Rate"
          sublabel="↓ 3% from last week"
        />
         <Card
          number="68%"
          title="Completion Rate"
          sublabel="↓ 3% from last week"
        />
      </div>

     <div className="flex flex-1 mt-5 flex-col p-5" id="flows-table">

  
  <div className="flex gap-3 overflow-x-auto pb-2">
    {btnItems.map((item) => (
      <button
        key={item.id}
        className="px-4 py-1.5 text-sm md:text-base text-white border border-white/10 rounded-md whitespace-nowrap hover:bg-white/10 transition"
      >
        {item.name}
      </button>
    ))}
  </div>

  
  <div className="mt-4 overflow-x-auto">

    {/* TABLE HEADER */}
    <div className="min-w-[600px] grid grid-cols-4 text-gray-400 text-xs sm:text-sm md:text-base border-b border-white/10 pb-2">
      <span>Name</span>
      <span>Status</span>
      <span>Users</span>
      <span>Completion</span>
    </div>

  
    <div className="flex flex-col gap-2 mt-2 min-w-[600px]">
      {flows.map((flow) => (
        <div
          key={flow.id}
          className="grid grid-cols-4 text-white text-xs sm:text-sm md:text-base py-2 border-b border-white/5"
        >
          <span className="truncate">{flow.name}</span>
          <span>{flow.status}</span>
          <span>{flow.users}</span>
          <span>{flow.completion}</span>
        </div>
      ))}
    </div>

  </div>
</div>
    </div>
  );
}