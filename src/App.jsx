import { useState } from 'react'
import reactLogo from '../public/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imagen from '../public/assets/p1.jpg'
import imagen2 from '../public/assets/p2.JPG'
import { AboutMe } from './components/AboutMe'
import { Experience } from './components/Experience'


function App() {
  
  return (
    <>

    <div className='header row'>
      <div className='col-12 col-sm-6 text-center'>
        <h1>Alicia Joselyn Castillo Juárez</h1>
        <h2>Web Developer</h2>
        <p>Web developer with 5 years of experience in the field and knowledge of many technologies</p>
      </div>

      <div className='col-12 col-sm-6'>
        <img src={imagen2} className='imagen'/>
      </div>
    </div>
    <div className='svgWave'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,112C672,128,768,192,864,234.7C960,277,1056,299,1152,272C1248,245,1344,171,1392,133.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
    <AboutMe/>
    <Experience />
    </>
  )
}

export default App
