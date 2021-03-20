import React from 'react'
// import {Event}from '../App'

export default function Menu() {

    const changeColor=e=>{
        let y = window.screenY
        console.log(y)
        console.log("this is page off set",window.pageYOffset)
    }
    return ( 
    <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger" onScroll={changeColor}> <div></div>  </div>
        <div className="menu">
            <div>
                <div>
                    <div>
                        <ul>
                            <li><a href="#home">HOME</a></li>
                            <li><a href="#article">ARTICLES</a></li>
                            <li><a href="#project">PROJECTS</a></li>
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#contact">CONTACT</a></li>

                        </ul>
                    </div>
                </div>                
            </div>
        </div>
    </div>
    )
}
