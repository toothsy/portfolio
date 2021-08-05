import React,{useRef}from 'react'
// import {Event}from '../App'

export default function Menu() {

    let checkBox = useRef(null)
    const cancellableEvent=e=>{
        console.log(checkBox.checked)
        checkBox.checked = !checkBox.checked
    }
    return ( 
    <div className="menu-wrap" >
        <input type="checkbox" ref={el=>checkBox=el} className="toggler" />
        <div className="hamburger" > <div></div>  </div>
        <div className="menu"  onClick={cancellableEvent}>
            <div>
                <div>
                    <div>
                        <ul>
                            <li><a href="#home">HOME</a></li>
                            <li><a href="#project">PROJECTS</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                            <li><a href="#about">ABOUT</a></li>

                        </ul>
                    </div>
                </div>                
            </div>
        </div>
    </div>
    )
}
