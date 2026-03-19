import React from "react";
import { Copy } from "lucide-react";
import PropSection from "./PropSection";
export default function DocSection() {
  return (
    <div className="flex flex-col mt-10 text-[hsl(0,0%,95%)] gap-5  mx-auto max-w-6xl  ">
      <h1 className="text-lg">Installation</h1>
      <pre className="bg-[hsl(0,0%,5%)] border border-white/10 rounded-lg p-2 overflow-x-auto">
    
        <code className="text-sm text-gray-300 font-mono whitespace-pre flex flex-row justify-between">
          
            {`npx shadcn add https://onboard-uii.vercel.app/registry/spotlight.json`}
                <div className="cursor-pointer">
          <Copy width={20}/>
        </div>
        </code>
      </pre>
      <div className="flex flex-col gap-5">
        <h1 className="text-lg">Usage</h1>
        <div className="flex flex-col gap-5">
          <h1>Render the Spotlight in the root of your app.</h1>
          <pre className="bg-[hsl(0,0%,5%)] border border-white/10 rounded-lg p-2 overflow-x-auto mb-10">
            <code className="text-sm text-gray-300 font-mono whitespace-pre flex flex-row justify-between">
              {` import Spotlight from '@/components/spotlight/Spotlight'`}
              <Copy width={20}/>
            </code>
          </pre>
          <div className="flex flex-row gap-5">
              <pre className="bg-[hsl(0,0%,5%)] border border-white/10 rounded-lg p-3 overflow-x-auto">
            <div className="flex justify-end">
              <Copy width={20} />
            </div>
            <code className="text-sm text-gray-300 font-mono whitespace-pre">
              {`function App() {
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
            {/* <div>Pass your id and steps</div> */}
          <pre className="bg-[#111111] border border-white/10 rounded-lg p-6 overflow-x-auto">
            <div className="flex justify-end">
              <Copy width={20}/>
            </div>
            <code className="text-sm text-gray-300 font-mono whitespace-pre text-center">
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
          </div>
        
        </div>
      </div>
      <div>
<PropSection/>

      </div>
    </div>
  );
}
