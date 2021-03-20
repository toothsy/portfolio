import React from 'react'
// import HomeSVG from '../builtSvg/ExpHomeSvg'
import sky from "../svg/sky.svg";
import mountain from "../svg/mountain.svg";
import mAF from "../svg/manAndFloor.svg";

// import HomeMobileSVG from '../builtSvg/ExpHomeMobileSvg'

const Homepage = ()=> {
    return (
        <div id="home" className="container">
            <div className="text">Hello,I'm Atharva.<br/>And I love building Web-apps.</div>
            <div className="bg">
                <img src={sky} className="sky" alt="sky" />
                <img src={mountain} className="mountain" alt="mountain here" />
                <img src={mAF} className="manAndFloor" alt="manAndFloor here" />
            </div>
            {/* <HomeSVG w={x} h={y} />            */}
        </div>
       
    )
}
export default Homepage

