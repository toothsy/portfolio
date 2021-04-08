import React from 'react'
import sky from "../svg/sky.svg";
import mountain from "../svg/mountain.svg";
import mAF from "../svg/manAndFloor.svg";
const Homepage = ()=> {

    return (
        <div id="home" className="container">
            <div className="text">Hello,I'm Atharva.<br/><span className="text2">And I love building beautiful Web-apps.</span></div>
                <img src={sky} className="sky" alt="sky"  />
                <img src={mountain} className="mountain" alt="mountain here" />
                <img src={mAF} className="manAndFloor" alt="manAndFloor here"  />
        </div>
       
    )
}
export default Homepage

