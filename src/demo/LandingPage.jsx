import Sidebar from "./components/Dashboard/Sidebar";
import Navbar from "./components/Dashboard/Navbar";
import Content from "./components/Dashboard/main-content/Content";
import Spotlight from "../lib/components/Spotlight";
import steps from "../lib/components/Steps";
export default function LandingPage({
  onStartTour,
  tourActive,
  setTourActive,
}) {
  return (
    <div className="min-h-svh bg-[#1b1a1a] flex flex-col items-center px-20 py-20">
      {/* Hero text */}
      <div className="px-6 py-1 text-white border-1 border-white/10 mb-5 flex flex-row gap-5 rounded-full">
        <div>
        shadcn registry
        </div>
        <div>open source</div>
            
        </div>
      <div className="text-start text-balance  w-full h-64 text-white">
        <h1 className="text-5xl/normal font-semibold">Guide your users.</h1>
        <p className="text-md/normal text-gray-300">Drop it into any React app. Pass your steps. 
Your users are guided.</p>
        <button onClick={onStartTour} className="bg-white text-md mt-5 text-gray-500 
        px-5 py-2 rounded-lg cursor-pointer">See demo</button>
      </div>

      {/* Product window */}
      <div
        className="w-full max-w-7xl rounded-xl overflow-hidden 
      border border-white/10 h-[700px] shadow-sm shadow-white"
      >
        <div className=" h-screen flex flex-1 ">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <Navbar />
            <Content onStartTour={onStartTour} />
          </div>
        </div>
      </div>

      {tourActive && (
        <Spotlight 
        steps={steps} 
        onFinish={() => setTourActive(false)} />
      )}
    </div>
  );
}
