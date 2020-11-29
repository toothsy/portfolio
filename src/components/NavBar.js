import React ,{useRef,useContext}from 'react'
import {EventHua }from '../context/context'
import gsap from "gsap";
export default function NavBar() {
    let NbDiv = useRef(null);
    let diss = useRef(null);
    let top = useRef(null);
    let bot = useRef(null);
    const {clicked,setClicked} = useContext(EventHua);
    const rotateStuff=(target,time,degrees)=>{
        return gsap.to(target,{duration:time,rotateZ:degrees})
    }
    const makeVisible=(e)=>{
        if(window.innerWidth<360){
            if(!clicked){
                gsap.to(NbDiv,{duration:.7,translateX:"-25vw"})
                setClicked(true);
                rotateStuff(top,.5,45)
                rotateStuff(bot,.5,-45)
                diss.style.opacity=0;
            }
            else{
                gsap.to(NbDiv,{duration:.7,translateX:"25vw"})
                rotateStuff(top,.5,0)
                rotateStuff(bot,.5,0)
                setClicked(false);
                diss.style.opacity=1;
            }
        }
            else{ 
                if(!clicked){
                    gsap.to(NbDiv,{duration:.2,translateX:"-25vw"})
                    setClicked(true);
                    diss.style.opacity=0;
                    rotateStuff(top,.2,45)
                    rotateStuff(bot,.2,-45)
                }
            else{
                gsap.to(NbDiv,{duration:.2,translateX:"25vw"})
                rotateStuff(top,.2,0)
                rotateStuff(bot,.2,0)
                diss.style.opacity=1;
                setClicked(false);
                }
            }
        }
    
    return (
        <>
        <div id ="nav" ref={el=>{NbDiv=el}} >
            <div id="links" >
                <a href="/home">Home</a>
                <a href="/projects">Projects</a>
                <a href="/about">About</a>
            </div>
        </div>
        <div id="toggle" onClick={makeVisible} >
            <div className="line" ref={el=>top=el}></div>
            <div className="line" ref={el=>diss=el} ></div>
            <div className="line" ref={el=>bot=el}></div>
        </div>
        </>
    )
}
