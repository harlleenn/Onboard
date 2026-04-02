import Sidebar from "./components/Dashboard/Sidebar";
import Navbar from "./components/Dashboard/Navbar";
import Content from "./components/Dashboard/Content";
import Spotlight from "../lib/components/Spotlight";
import steps from "../lib/components/Steps";
import DocSection from "./components/Dashboard/main-content/InfoSection/DocSection";



export default function LandingPage({onStartTour,tourActive,setTourActive} ) {
  return (
    <div className="overflow-x-hidden bg-[hsl(0,99%,46%)]  flex flex-col items-center "  >
      <div className="text-center text-white bg-amber-300" >
        <div className=" bg-amber-600 flex flex-col ">
          <div className="text-2xl sm:text-xl md:text-5xl font-semibold text-[hsl(0,0%,95%)]">
            Guide your users.
          </div>
          <div className="text-sm sm:text-md md:text-lg text-[hsl(0,0%,70%)]">
            Drop it into any React app. Pass your steps. Your users are guided.
          </div>
        </div>

        <div className=" bg-olive-500 ">
          <button
            onClick={onStartTour}
            className="bg-[hsl(0,0%,15%)] hover:bg-[hsl(0,0%,10%)] text-sm md:text-md  text-[hsl(0,0%,65%)] 
            transition duration-300 px-5 py-2 rounded-lg cursor-pointer "
          >
            See demo
          </button>
        
        </div>
      </div>

      <div className="w-full md:max-w-6xl rounded-xl overflow-hidden min-h-[500px] md:h-[300px] border border-[hsl(0,0%,25%)] shadow-sm shadow-white/10 mt-10"
      id="landing-page">
        <div className="min-h-0 flex flex-1 bg-amber-200">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <Navbar />
            <Content onStartTour={onStartTour} />
          </div>
        </div>
      </div>

      {/* <DocSection /> */}

  {tourActive && (
   
     <Spotlight steps={steps} onFinish={()  => setTourActive(false)} />
   
       
      )}

      
    </div>
  );
}