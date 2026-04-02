import React from "react";
import Card from "./main-content/table-content/Card";
import Table from "./main-content/table-content/Table";

export default function Content({ onStartTour }) {
    const flows = [
  {id:1 , name: "Isgnup Onboarding", status: "Active", users: "2.5 GB", completion: "50%" },
  { id:2, name: "Feature Discovery", status: "Active", users: "1.2 GB", completion: "20%" },
  {id:3,  name: "Mobile Walkthorugh", status: "Draft", users: "150 MB", completion: "30%" },
  

]
  return (
    <div className="bg-[hsl(0,0%,3%)] p-5 md:p-10 lg:p-15 flex-1 overflow-y-auto gap-10" data-theme="dark">
      
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-xl md:text-2xl">Overview</h1>
          <p className="text-gray-400 text-sm md:text-lg">
            Welcome back, Harleen. Here's what's happening.
          </p>
        </div>

        <div className="flex md:justify-center md:items-center" id="start-tour">
          <button
            className="text-black inset-shadow-2xs inset-shadow-amber-800 cursor-pointer 
            bg-[#f3f2f3] px-4 md:px-5 py-2 rounded-full font-semibold text-sm md:text-base w-full md:w-auto"
            onClick={() => onStartTour()}
          >
            Start tour
          </button>
        </div>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-4 border border-white/10 border-t-2 border-t-white/30 rounded-xl p-6"
        id="stats"
      >
        <Card number="12" title="Total Flows" sublabel="+2 this month" />
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
      </div>

      <div className="flex mt-10 flex-col" id="flows-table">
        <h1 className="text-white text-xl md:text-2xl font-bold mb-5">
          Recent Flows
        </h1>

        <div className=" grid grid-cols-4  px-4 py-3 border-b border-white/5 text-white text-sm md:text-lg">
          <span>Name</span>
          <span>Sharing</span>
          <span>Size</span>
          <span>Modified</span>
        </div>

      <div className="  ">
  {flows.map((flow) => (
    <Table
      key={flow.id}
      name={flow.name}
      status={flow.status}
      users={flow.users}
      completion={flow.completion}
    />
  ))}
</div>
      </div>
    </div>
  );
}