import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import MainPage from './components/Spotlight/Spotlight'
import Sidebar from './components/Dashboard/Sidebar'
import Navbar from './components/Dashboard/Navbar'
import Content from './components/Dashboard/main-content/Content'

function App() {
  

  return (
    <div className='flex h-screen'>
        <Sidebar/>

      <div className='flex flex-1 flex-col'>
          <Navbar/>
          <Content/>
      </div>
  

    </div>
  )
}

export default App
