import React from 'react'
import './home.css'
import Welcome from './components/welcome/Welcome'
import Properties from './components/properties/Properties'
import Paralax from './components/paralax/Paralax'
import Layouts from './components/layouts/Layouts'

function Home() {
  return (
    <div className='home-main-container'>
      <Welcome />
      <Properties />
      <Paralax />
      <Layouts />
    </div>
  )
}

export default Home