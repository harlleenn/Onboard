import React from "react";
import Card from "./Card";
import Table from "./Table";

export default function Content({ onStartTour }) {
    const flows = [
  { name: "Meeting_Notes_2023-10-01.txt", status: "Active", users: "2.5 GB", completion: "5 mins ago" },
  { name: "Data_Analysis_Results.jpg", status: "Active", users: "1.2 GB", completion: "20 mins ago" },
  { name: "Report_2023_Q1.pdf", status: "Draft", users: "150 MB", completion: "30 mins ago" },
  { name: "Invoice_#5678.docx", status: "Active", users: "300 MB", completion: "45 mins ago" },
  { name: "Project Overview Presentation.ppt", status: "Active", users: "1.2 MB", completion: "23 mins ago" },
]
  return (
    <div className="bg-[hsl(0,0%,3%)] p-5 md:p-10 lg:p-15 flex-1 overflow-y-auto">
      
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

        <div className="hidden md:grid grid-cols-4 px-4 py-3 border-b border-white/5 text-white text-sm md:text-lg">
          <span>Name</span>
          <span>Sharing</span>
          <span>Size</span>
          <span>Modified</span>
        </div>

        <div className="flex flex-col gap-3 md:hidden">
          <div className="flex mr-10 bg-">
               <Table
            name="Docs"
            status="Active"
            users="842"
            completion="72%"
          />
          </div>
       
          <Table
            name="Fonts "
            status="Active"
            users="301"
            completion="58%"
          />
          <Table
            name="Source "
            status="Draft"
            users="0"
            completion="-"
          />
        </div>

      <div className="hidden md:block flex flex-col gap-10">
  {flows.map((flow) => (
    <Table
      key={flow.name}
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