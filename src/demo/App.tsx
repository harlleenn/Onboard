import { useState } from "react";

import LandingPage from "./LandingPage";

function App() {
  const [tourActive, setTourActive] = useState<boolean>(false);
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
