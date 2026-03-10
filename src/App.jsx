import { useState } from 'react'

// import './App.css'
import Sidebar from './components/Dashboard/Sidebar'
import Navbar from './components/Dashboard/Navbar'
import Content from './components/Dashboard/main-content/Content'
import Spotlight from './components/Spotlight/Spotlight'
import steps from './components/Spotlight/Steps'

function App() {
  const [tourActive, setTourActive] = useState(false)
  

  return (
    <div className='flex h-screen'>
        <Sidebar/>

      <div className='flex flex-1 flex-col'>
          <Navbar/>
          <Content onStartTour={() => setTourActive(true)}/>
      </div>
  
{tourActive && (
        <Spotlight
          steps={steps}
          onFinish={() => setTourActive(false)
          }
        />
      )}
    </div>
  )
}

export default App
