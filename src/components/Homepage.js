import React,{useRef,useEffect,useContext} from 'react'
import {EventHua} from '../context/context'
import {Power4,gsap} from 'gsap';
export default function Homepage() {
    let text = useRef(null);
    let content = useRef(null);
    const {clicked} = useContext(EventHua);
    useEffect(()=>{
        let t1 = gsap.timeline();
        t1.fromTo(text,{},{opacity:.85,duration:.75  ,ease:Power4.easeIn})
    },[])
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
    }
    }
    ,[clicked])
    
    return (
        <div id="content" ref={el=>content=el}>
    
                <h1 id="text" ref={el=>text=el}>
                    Simple, yet effective.
                </h1>
            </div>
    )
}

