import { useState } from "react";

import LandingPage from "./LandingPage";
import { Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Dashboard/Sidebar";
function App() {
  const [tourActive, setTourActive] = useState<boolean>(false);
  return (
  <>
  {/* <Routes>
    <Route path="/" element={<Sidebar/>}>

    </Route>
  </Routes> */}
   <LandingPage
  onStartTour={() => setTourActive(true)}
  tourActive={tourActive}
  setTourActive={setTourActive}
/>

  </>
)
}

export default App;
