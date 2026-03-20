import React from "react";
import { Copy } from "lucide-react";
import PropSection from "./PropSection";

export default function DocSection() {
  return (
    <div className="flex flex-col mt-10 text-[hsl(0,0%,95%)] gap-5 px-4 md:px-6 mx-auto max-w-6xl">
      
      <h1 className="text-base md:text-lg">Installation</h1>

      <pre className="bg-[hsl(0,0%,5%)] border border-white/10 rounded-lg p-2 overflow-x-auto">
        <code className="text-xs md:text-sm text-gray-300 font-mono whitespace-pre flex items-center justify-between gap-3">
          <span className="break-all">
            {`npx shadcn add https://onboard-uii.vercel.app/registry/spotlight.json`}
          </span>
          <div className="cursor-pointer shrink-0">
            <Copy className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </code>
      </pre>

      <div className="flex flex-col gap-5">
        <h1 className="text-base md:text-lg">Usage</h1>

        <div className="flex flex-col gap-5">
          <h1 className="text-sm md:text-base">
            Render the Spotlight in the root of your app.
          </h1>

          <pre className="bg-[hsl(0,0%,5%)] border border-white/10 rounded-lg p-2 overflow-x-auto">
            <code className="text-xs md:text-sm text-gray-300 font-mono whitespace-pre flex items-center justify-between gap-3">
              <span className="break-all">
                {` import Spotlight from '@/components/spotlight/Spotlight'`}
              </span>
              <Copy className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
            </code>
          </pre>

          <div className="flex flex-col lg:flex-row gap-5">
            
            <pre className="bg-[hsl(0,0%,5%)] border border-white/10 rounded-lg p-3 overflow-x-auto w-full">
              <div className="flex justify-end">
                <Copy className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <code className="text-xs md:text-sm text-gray-300 font-mono whitespace-pre">
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

            <pre className="bg-[#111111] border border-white/10 rounded-lg p-3 md:p-6 overflow-x-auto w-full">
              <div className="flex justify-end">
                <Copy className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <code className="text-xs md:text-sm text-gray-300 font-mono whitespace-pre">
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
        <PropSection />
      </div>
    </div>
  );
}