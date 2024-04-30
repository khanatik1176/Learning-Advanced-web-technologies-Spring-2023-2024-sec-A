import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DetailsInfo from './components/detailInfo'
import NavBar from './components/navbar'

function App() {
  

  return (
    <>
      <div className='Container'>
        <div className="header">
        <NavBar Home="Home" Projects="Projects" Skils="Skils" Contact="Contact"/>
        </div>
        <div className="hero">
        <DetailsInfo/> 
        </div>
      </div>
    </>
  )
}

export default App
