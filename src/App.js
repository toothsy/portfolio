// eslint-disable-next-line
import React,{createContext} from 'react'
import Home from './components/Homepage'
import AM from './components/aboutMe'
import Pro from './components/projects'
import Art from './components/Articles'
import Menu from './components/Menu'
import Footer from './components/footer'
import CM from './components/ContactMe'

export default function App() {
  return (
    < >
            <Menu/>
            <Home/>
            <Art/>
            <Pro/>
            <CM/>
            <AM/>
            <Footer/>
  </>
  )}

