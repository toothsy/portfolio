import React ,{useRef,useContext}from 'react'
import {Event}from '../App'
import gsap from "gsap";
export default function NavBar() {
    let NbDiv = useRef();
    let diss = useRef();
    let top = useRef();
    let bot = useRef();
    const {clicked,setClicked} = useContext(Event);
   
    const rotateStuff=(target,time,degrees)=>gsap.to(target,{duration:time,rotateZ:degrees})

    const makeVisible=e=>{
        console.log(NbDiv)
        if(window.innerWidth<360){
            if(!clicked){
                gsap.to(NbDiv,{duration:.7,translateX:"25vw"})
                setClicked(true);
                rotateStuff(top,.5,45)
                diss.style.opacity=0;
                rotateStuff(bot,.5,-45)
            }
            else{
                gsap.to(NbDiv,{duration:.7,translateX:"-25vw"})
                setClicked(false);
                rotateStuff(top,.5,0)
                diss.style.opacity=1;
                rotateStuff(bot,.5,0)
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
                gsap.to(NbDiv,{duration:.2,translateX:"15vw"})
                rotateStuff(top,.2,0)
                rotateStuff(bot,.2,0)
                diss.style.opacity=1;
                setClicked(false);
                }
            }
        }
    
    return (
        <>
        <div className="nav" ref={el=>(NbDiv=el)} >
            <div className="links" >
                <a href="#home">Home</a>
                <a href="#articles">Articles</a>
                <a href="#project">Projects</a>
                <a href="#aboutMe">About</a>
                <a href="#contactMe">Contact Me</a>
            </div>
        </div>
        <div className="hamburger" id="toggle" onClick={makeVisible} >
            <div className="line" ref={el=>(top=el)}></div>
            <div className="line" ref={el=>(diss=el)} ></div>
            <div className="line" ref={el=>(bot=el)}></div>
        </div>
        </>
    )
}
