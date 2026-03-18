import Sidebar from "./components/Dashboard/Sidebar";
import Navbar from "./components/Dashboard/Navbar";
import Content from "./components/Dashboard/main-content/Content";
import Spotlight from "../lib/components/Spotlight";
import steps from "../lib/components/Steps";
import DocSection from "./components/Dashboard/DocSection";
export default function LandingPage({
  onStartTour,
  tourActive,
  setTourActive,
}) {
  return (
    <div className="min-h-svh bg-[#000000] flex flex-col items-center px-20 py-20">
      <div className="text-center  text-balance  w-full h-64 text-white">
        <h1 className="text-5xl/normal font-semibold">Guide your users.</h1>
        <p className="text-md/normal text-gray-300">
          Drop it into any React app. Pass your steps. Your users are guided.
        </p>
        <div className="flex flex-row justify-center gap-5 mt-5">
          <button
            onClick={onStartTour}
            className="bg-white/10 hover:bg-[#525552aa] text-md mt-5 text-gray-500  transition duration-300
        px-5 py-2 rounded-lg cursor-pointer"
          >
            See demo
          </button>
          <button
            onClick={onStartTour}
            className="bg-white text-md mt-5 text-gray-500 
        px-5 py-2 rounded-lg cursor-pointer"
          >
            Get started
          </button>
        </div>
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
      <DocSection />
      {tourActive && (
        <Spotlight steps={steps} onFinish={() => setTourActive(false)} />
      )}
    </div>
  );
}
