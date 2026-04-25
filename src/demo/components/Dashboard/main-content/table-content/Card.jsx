import { Notebook } from 'lucide-react'
import React from 'react'

export default function Card({notebook, title, todo}) {
  const todos = [
{id:1 , point: "Design Website change font color"},
{id:2 , point: "Add name to the dashboard along with users"},
{id:3 , point: "this is dummy data "}
  ]
  return (
    <div className='h-50 sm:grid gird-rows '>
          <div className='flex flex-row    rounded-2xl h-full   border-1 border-white/20  hover:bg-[#2c2b2bdf] ' >
       
           <div className=" text-white rounded-lg flex flex-col justify-between p-5 ">
          <div className="text-white text-lg font-bold mb-1 flex gap-2 items-start">  <Notebook width={15}/> {notebook}</div>
            <div className="text-gray-400 text-md ">{title}</div>
        <div className="text-gray-500 text-xs">{todos.map((todo) => <li key={todo.id}>
          {todo.point}
        </li>)}</div>
      </div>
       
     
    
    </div>  
    </div>

  )
}
