import React from "react";
import Card from "./Card";
import Table from "./Table";


export default function Content({onStartTour}) {
  return (
    <div className="bg-[#0a0a0a]  p-15 flex-1 overflow-y-clip ">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-2xl">Overview</h1>
          <p className="text-gray-400 text-lg">
            Welcome back, Harleen. Here's what's happening.
          </p>
        </div>
        <div className="flex justify-center items-center" id="start-tour">
          <button className="text-black inset-shadow-2xs inset-shadow-amber-800 cursor-pointer 
          bg-[#f3f2f3] px-5 py-2 rounded-full font-semibold" onClick={onStartTour}>
            Start tour
          </button>
        </div>
      </div>
      <div className="flex flex-row mt-10 gap-4" id='stats'>
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
      </div>
      <div className="flex mt-10 flex-col "  id="flows-table">
        <h1 className="text-white text-2xl font-bold mb-5">Recent Flows</h1>
        <div className="grid  grid-cols-4 px-4 py-3 border-b border-white/5 hover:bg-white/5 text-white text-lg">
          <span>Name</span>
          <span>Status</span>
          <span>Users</span>
          <span>Completion</span>
        </div>
        <Table
          name="Signup Onboarding"
          status="Active"
          users="842"
          completion="72%"
        />
        <Table
          name="Feature Discovery "
          status="Active"
          users="301"
          completion="58%"
        />
        <Table
          name="Mobile Walkthrough "
          status="Draft"
          users="0"
          completion="-"
        />
       
      </div>
    
    </div>
  );
}
