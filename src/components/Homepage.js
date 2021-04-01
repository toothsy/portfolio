import React from 'react'
import sky from "../svg/sky.svg";
import mountain from "../svg/mountain.svg";
import mAF from "../svg/manAndFloor.svg";
import {Parallax} from 'react-scroll-parallax'
const Homepage = ()=> {

    return (
        <div id="home" className="container">
            <div className="text">Hello,I'm Atharva.<br/><span className="text2">And I love building beautiful Web-apps.</span></div>
            <Parallax className="bg"  y={[-40, 40]} tagOuter="figure">
                <img src={sky} className="sky" alt="sky"  />
                <img src={mountain} className="mountain" alt="mountain here" />
                <img src={mAF} className="manAndFloor" alt="manAndFloor here"  />
            </Parallax>
        </div>
       
    )
}
export default Homepage

