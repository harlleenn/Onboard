import { useState } from "react";
import Sidebar from './components/Dashboard/Sidebar'
import Navbar from "./components/Dashboard/Navbar";
import Content from './components/Dashboard/main-content/Content'
import Spotlight from "../lib/components/Spotlight"
import steps from "../lib/components/Steps";
import LandingPage from "./LandingPage";

function App() {
  const [tourActive, setTourActive] = useState(false);
  return (
  <>
  {/* <div className="relative">
     <LandingPage/>
    <div className='md:hidden flex h-screen items-center justify-center p-8 text-center text-white bg-black '>
      <p>This demo is best viewed on desktop. Mobile support coming soon.</p>
    </div>
    <div className="w-full bg-pink-900 h-screen">
         <div className='hidden md:flex absolute top-100 right-20 left-20 bg-pink-200'>
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Navbar />
        <Content onStartTour={() => setTourActive(true)} />
      </div>
      {tourActive && (
        <Spotlight
          steps={steps}
          onFinish={() => setTourActive(false)}
        />
      )}

    </div>
    </div> */}
 <LandingPage
  onStartTour={() => setTourActive(true)}
  tourActive={tourActive}
  setTourActive={setTourActive}
/>
  
    
  </>
)
}

export default App;
