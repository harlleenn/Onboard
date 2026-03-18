import React from 'react'

export default function DocSection() {
  return (
    <div className='flex flex-col h-screen mt-10 text-white gap-5 '>
        <h1 className='text-lg'>Installation</h1>
        <div className='w-auto bg-[#585a58aa] border-1 border-white/10 px-2 py-1 rounded-lg'>
            <div>npx shadcn add https://onboard-uii.vercel.app/registry/spotlight.json</div>
        </div>
        <div className='flex flex-col gap-5'>
           <h1 className='text-lg'>Usage</h1> 
           <div className='flex flex-row gap-5'>
                       <pre className='bg-[#111111] border border-white/10 rounded-lg p-4 overflow-x-auto'>
            <code className='text-sm text-gray-300 font-mono whitespace-pre text-center'>
                {`const steps = [
  {
    target: "#my-element",
    title: "Welcome",
    description: "This is where you start.",
    button: "Next"
  }
]`}
            </code>
           </pre>
            <pre className="bg-[#111111] border border-white/10 rounded-lg p-4 overflow-x-auto">
  <code className="text-sm text-gray-300 font-mono whitespace-pre">
{`
import Spotlight from '@/components/spotlight/Spotlight'



 function App() {
  const [active, setActive] = useState(false)

  return (
    <div>
      <button onClick={() => setActive(true)}>Start Tour</button>
      {active && (
        <Spotlight
          steps={steps}
          onFinish={() => setActive(false)}
        />
      )}
    </div>
  )
}`}
  </code>
</pre>
           </div>

           
        </div>
    </div>
  )
}
