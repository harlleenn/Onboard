import React from "react";
import Card from "./Card";
import Table from "./Table";

export default function Content() {
  return ( 
    <div className="bg-[#0a0a0a]  p-15 flex-1 overflow-y-auto">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-2xl">Overview</h1>
          <p className="text-white text-lg">
            Welcome back, Harleen. Here's what's happening.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className="text-white cursor-pointer bg-[#52158f] w-32 h-10 rounded-full font-semibold">
            Start tour
          </button>
        </div>
      </div>
    <div className="flex flex-row mt-10">
       <Card number="12" title="Total Flows" sublabel="+2 this month" />
  <Card number="1,204" title="Active Users" sublabel="↑ 12% from last week" />
  <Card number="68%" title="Completion Rate" sublabel="↓ 3% from last week" />
    </div>
    <div className="flex mt-10 flex-col ">
      <h1 className="text-white text-2xl font-bold mb-5">Recent Flows</h1>
       <div className="grid  grid-cols-4 px-4 py-3 border-b border-white/5 hover:bg-white/5 text-white ">
        <span>Name</span>
        <span>Status</span>
        <span>Users</span>
        <span>Completion</span>
      </div>
       <Table name="Signup Onboarding" status="Active" users="842" completion="72%"/>
        <Table name="Feature Discovery " status="Active" users="301" completion="58%"/>
         <Table name="Mobile Walkthrough " status="Draft" users="0" completion="-"/>
          <Table name="Settings Tour" status="Active" users="61" completion="81%"/>
        
    </div>
  
    </div>
  );
}
