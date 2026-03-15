import { useState } from "react";
import Sidebar from './components/Dashboard/Sidebar'
import Navbar from "./components/Dashboard/Navbar";
import Content from './components/Dashboard/main-content/Content'
import Spotlight from "../lib/components/Spotlight"
import steps from "../lib/components/Steps";

function App() {
  const [tourActive, setTourActive] = useState(false);
  return (
  <>
    <div className='md:hidden flex h-screen items-center justify-center p-8 text-center text-white bg-black'>
      <p>This demo is best viewed on desktop. Mobile support coming soon.</p>
    </div>
    <div className='hidden md:flex h-screen'>
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
  </>
)
}

export default App;
