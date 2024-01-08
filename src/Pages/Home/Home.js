import React from 'react'
import './home.css'
import Welcome from './components/welcome/Welcome'
import Properties from './components/properties/Properties'

function Home() {
  return (
    <div className='home-main-container'>
        <Welcome/>
        <Properties/>
    </div>
  )
}

export default Home