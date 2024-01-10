import React from 'react'
import './home.css'
import Welcome from './components/welcome/Welcome'
import Properties from './components/properties/Properties'
import Paralax from './components/paralax/Paralax'
import Layouts from './components/layouts/Layouts'
import Form from './components/form/Form'

function Home() {
  return (
    <div className='home-main-container'>
      <Welcome />
      <Properties />
      <Paralax />
      <Layouts />
      <Form />
    </div>
  )
}

export default Home