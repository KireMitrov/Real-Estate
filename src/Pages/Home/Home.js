import React from 'react'
import './home.css'
import Welcome from './components/welcome/Welcome'
import Properties from './components/properties/Properties'
import Paralax from './components/paralax/Paralax'

function Home() {
  return (
    <div className='home-main-container'>
        <Welcome/>
        <Properties/>
        <Paralax/>
    </div>
  )
}

export default Home