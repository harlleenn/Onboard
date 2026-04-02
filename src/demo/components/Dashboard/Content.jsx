import React from "react";
import Card from "./main-content/table-content/Card";
import Table from "./main-content/table-content/Table";

export default function Content({ onStartTour }) {
    const flows = [
  {id:1 , name: "Bug Performance", owner: "Paul"},
  { id:2, name: "Feature Discovery", owner:"Annee" },
  {id:3,  name: "Mobile Walkthorugh", owner:"Patrick" },
]
const btnItems = [
   {id:1 , name: "Dashboard",  },
  { id:2, name: "Projects" },
  {id:3,  name: "Views" },
   {id:4,  name: "Issues" },
]
  return (
    <div className="bg-[hsl(0,0%,0%)] h-full " data-theme="dark">
      
      <div className="flex flex-col md:flex-row md:justify-between p-5">
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
        className="  max-w-3xl mx-auto mt-5 gap-5
        grid grid-cols-2  md:grid-cols-2  rounded-2xl "id="stats"
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

      <div className="flex mt-2 flex-col p-5" id="flows-table">
        <div className="text-white mb-5  flex flex-row   gap-3 p-2 bg-[#1f1e1eaa] border-1 border-white/10">
         {btnItems.map((item) => 
         <button key={item.id} className="px-2  flex flex-row border-2 border-white/10 ">
                {item.name}
         </button>)}
         
           <button>Add</button>
         
        
        </div>
        <div className=" grid grid-cols-2 border-b border-white/20 mb-5  border-white/5 text-white text-sm md:text-lg">
          <span>Name</span>
          <span>Owner</span>
        </div>

      <div className="  ">
  {flows.map((flow) => (
    <Table
      key={flow.id}
      name={flow.name}
    owner={flow.owner}
    />
  ))}
</div>
      </div>  
    </div>
  );
}