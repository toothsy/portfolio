import React,{useRef,useEffect,createContext,useState} from 'react'
import {gsap} from 'gsap';
import Home from './components/Homepage'
import CM from './components/contactMe'
import AM from './components/aboutMe'
import Pro from './components/projects'
import Art from './components/articles'
import NB from './components/NavBar'

export const Event = createContext();
export default function App() {
  let content = useRef();

  const [clicked, setClicked] = useState(null)

  useEffect(()=>{
      console.log(clicked)
      if(window.innerWidth<360){
          if(clicked){
              gsap.to(content,{duration:.5,rotateY:40,translateX:"-10vw"})
              }
          else{
              gsap.to(content,{duration:.5,rotateY:0,translateX:"0vw"})
          }
      }
      else{
      if(clicked){
      gsap.to(content,{duration:.2,rotateY:40,translateX:"-3.9vw"})
      }
      else{
          gsap.to(content,{duration:.2,rotateY:0,translateX:"0vw"})
      }
  }},[clicked])
  
  return (
    <div className="content" ref={el=>(content=el)}>
        <Event.Provider value={{clicked,setClicked,NB}}>
          <NB/>
          <Home/>
          <Art/>
          <Pro/>
          <AM/>
          <CM/>
        </Event.Provider>
    </div>
    
  )
}

