import { useState } from "react";

import LandingPage from "./LandingPage";
import { Routes, Route } from 'react-router-dom';



function App() {
  const [tourActive, setTourActive] = useState(false);
  return (
  <>
   <LandingPage
  onStartTour={() => setTourActive(true)}
  tourActive={tourActive}
  setTourActive={setTourActive}
/>
  </>
)
}

export default App;
