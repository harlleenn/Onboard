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
    <div className="min-h-svh bg-[#1b1a1a] flex flex-col items-center px-8 py-20">
      {/* Hero text */}
      <div className="text-center     w-full h-50 text-white">
        <h1>Guide your users.</h1>
        <p>Without the complexity.</p>
        <button onClick={onStartTour}>See demo</button>
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
        <Spotlight steps={steps} onFinish={() => setTourActive(false)} />
      )}
    </div>
  );
}
