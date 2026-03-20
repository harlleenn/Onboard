import Sidebar from "./components/Dashboard/Sidebar";
import Navbar from "./components/Dashboard/Navbar";
import Content from "./components/Dashboard/main-content/Content";
import Spotlight from "../lib/components/Spotlight";
import steps from "../lib/components/Steps";
import DocSection from "./components/Dashboard/DocSection";
import "./App.css"
export default function LandingPage({
  onStartTour,
  tourActive,
  setTourActive,
}) {
  return (
    <div className="min-h-svh bg-[hsl(0,0%,0%)] flex flex-col items-center  py-20 main-container">
      <div className="text-center  text-balance  w-full h-64 text-white">
        <div className="header">
        <h1 className="text-3xl md:text-5xl mb-5 font-semibold text-[hsl(0,0%,95%)]">Guide your users.</h1>
        <p className="text-md/normal text-[hsl(0,0%,70%)]">
          Drop it into any React app. Pass your steps. Your users are guided.
        </p>
        </div>
        
        <div className=" flex flex-col max-w-xs mx-auto md:flex-row md:gap-5 justify-center  mt-5 buttons">
          <button
            onClick={onStartTour}
            className="bg-[hsl(0,0%,15%)] hover:bg-[hsl(0,0%,10%)] text-md mt-5 text-[hsl(0,0%,65%)] 
             transition duration-300 px-5 py-2 rounded-lg cursor-pointer"
          >
            See demo
          </button>
          <button
            onClick={onStartTour}
            className="bg-[hsl(0,0%,95%)] text-md mt-5 text-[hsl(0,0%,1%)] 
        px-5 py-2 rounded-lg cursor-pointer hover:bg-[hsl(0,0%,95%)] "
          >
            Get started
          </button>
        </div>
      </div>
      {/* Product window */}
      <div
        className="w-full max-w-fit  md:max-w-7xl rounded-xl overflow-hidden 
       h-[700px] border-1 border-[hsl(0,0%,25%)] shadow-sm shadow-white/10"
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
