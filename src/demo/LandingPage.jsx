import Sidebar from "./components/Dashboard/Sidebar";
import Navbar from "./components/Dashboard/Navbar";
import Content from "./components/Dashboard/Content";
import Spotlight from "../lib/components/Spotlight";
import steps from "../lib/components/Steps";
import DocSection from "./components/Dashboard/main-content/InfoSection/DocSection";

export default function LandingPage({
  onStartTour,
  tourActive,
  setTourActive,
}) {
  return (
    <div className=" bg-[hsl(0,0%,2%)] relative  flex flex-col overflow-x-auto items-center ">
      <div className="text-left text-white p-5">
        <div className="  flex flex-col p-5 gap-5 ">
          <div className="text-2xl sm:text-xl md:text-4xl text-left font-semibold text-[hsl(0,0%,95%)]">
            Guide your users.
          </div>
          <div className="text-sm sm:text-md md:text-lg text-[hsl(0,0%,70%)]">
            Drop it into any React app. Pass your steps. Your users are guided.
          </div>
        </div>

        <div className="p-5  ">
          <button
            onClick={onStartTour}
            className="bg-[hsl(0,0%,15%)] hover:bg-[hsl(0,0%,10%)] text-sm md:text-md  text-[hsl(0,0%,65%)] 
            transition duration-300 px-5 py-3 rounded-lg cursor-pointer "
          >
            See demo
          </button>
        </div>
      </div>

      <div
        className="w-full   sm:max-w-3xl md:max-w-7xl rounded-xl 
      border border-[hsl(0,1%,40%)] shadow-lg shadow-white/20 mt-10 "
        id="landing-page"
      >
        <div className=" flex ">
          <Sidebar />
          <div className="flex-1 flex-col w-full">
            <Content onStartTour={onStartTour} />
          </div>
        </div>
      </div>
      {/* <div>
          <DocSection />
      </div> */}

      {tourActive && (
        <Spotlight steps={steps} onFinish={() => setTourActive(false)} />
      )}
    </div>
  );
}
