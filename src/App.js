import React from 'react'
import {EventContext} from './context/context';
import Home from './components/Homepage'
import NB from './components/NavBar'
export default function App() {
  return (
    <div >
      <EventContext>
        <NB/>
        <Home/>
      </EventContext>
    </div>
  )
}
