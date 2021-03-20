// eslint-disable-next-line
import React,{useRef,useEffect,createContext,useState} from 'react'
import Home from './components/Homepage'
import CM from './components/contactMe'
import AM from './components/aboutMe'
import Pro from './components/projects'
import Art from './components/articles'
import Menu from './components/Menu'
import Footer from './components/footer'
export const Event = createContext();

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

