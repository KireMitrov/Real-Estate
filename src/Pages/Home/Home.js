import React from 'react'
import './home.css'
import Welcome from './components/welcome/Welcome'
import Properties from './components/properties/Properties'
import Paralax from './components/paralax/Paralax'
import Layouts from './components/layouts/Layouts'
import Form from './components/form/Form'
import Types from './components/types/Types'
import Agents from './components/agents/Agents'
import Testimonials from './components/testimonials/Testimonials'
import Logos from './components/logos/Logos'

function Home() {
  return (
    <div className='home-main-container'>
      <Welcome />
      <Properties />
      <Paralax />
      <Layouts />
      <Form />
      <Types />
      <Agents />
      <Testimonials />
      <Logos />
    </div>
  )
}

export default Home