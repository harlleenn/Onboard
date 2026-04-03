import React, { useState } from "react";
import { Copy } from "lucide-react";
import PropSection from "./PropSection";

export default function DocSection() {
  const [copy, setCopy] = useState(null);
  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopy(id);
    setTimeout(() => setCopy(null), 2000);
  };
  return (
    <div className="flex flex-col mt-10 text-[hsl(0,0%,95%)] gap-5 flex-1  text-wrap p-10 sm:p-15 ">
      <h1 className="text-base md:text-lg">Installation</h1>
      <pre className="bg-[hsl(0,0%,5%)] border border-white/10 rounded-lg p-1 md:p-2 ">
        <code
          className="text-xs md:text-sm text-gray-300 font-mono whitespace-pre flex items-center 
        justify-between gap-3 "
        >
          <span className="break-all whitespace-pre-wrap">
            {`npx shadcn add https://onboard-uii.vercel.app/registry/spotlight.json`}
          </span>
          <div className="cursor-pointer shrink-0">
            {copy === "json" ? (
              <span>Copied!</span>
            ) : (
              <Copy
                onClick={() =>
                  handleCopy(
                    `npx shadcn add https://onboard-uii.vercel.app/registry/spotlight.json, "json"`,
                  )
                }
              />
            )}
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
            <code className="text-xs md:text-sm text-gray-300 font-mono whitespace-pre-wrap break-all flex items-center justify-between gap-3">
              <span className="break-all">
                {` import Spotlight from '@/components/spotlight/Spotlight`}
              </span>
            </code>
          </pre>

          <div className="flex flex-col lg:flex-row gap-5">
            <pre className="bg-[hsl(0,0%,5%)] border border-white/10 rounded-lg p-3 overflow-x-auto md:overflow-x-hidden w-full">
              <div className="flex justify-end">
                {copy === "install" ? (
                  <span>Copied!</span>
                ) : (
                  <Copy
                    onClick={() =>
                      handleCopy(
                        `function App() {
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
}`,
                        "install",
                      )
                    }
                  />
                )}
              </div>
              <code className="text-xs md:text-sm text-gray-300 font-mono ">
                <span>
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
                </span>
              </code>
            </pre>

            <pre className="bg-[#111111] border border-white/10 rounded-lg p-3 md:p-6 overflow-x-auto w-full">
              <div className="flex justify-end">
                {copy ? (
                  <span>Copied!</span>
                ) : (
                  <Copy
                    onClick={() =>
                      handleCopy(`const steps = [
{
  target: "#my-element",
  title: "Welcome",
  description: "This is where you start.",
  button: "Next"
}
]}`)
                    }
                  />
                )}
              </div>
              <code className="text-xs md:text-sm text-gray-300 font-mono whitespace-pre">
                <span>
                  {`const steps = [
{
  target: "#my-element",
  title: "Welcome",
  description: "This is where you start.",
  button: "Next"
}
]`}
                </span>
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
