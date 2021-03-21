// eslint-disable-next-line
import React from 'react'
import Home from './components/Homepage'
import CM from './components/contactMe'
import AM from './components/aboutMe'
import Pro from './components/projects'
import Art from './components/Articles'
import Menu from './components/Menu'
import Footer from './components/footer'

export default function App() {
  return (
    <div className="content"  >

          <Menu/>
          <Home/>
          <Art/>
          <Pro/>
          <AM/>
          <CM/>
          <Footer/>
    </div>
    
  )
}

