import React from 'react'
//@ts-expect-error

import mountain from "../svg/mountain.svg";
//@ts-expect-error

import mAF from "../svg/manAndFloor.svg";
//@ts-expect-error

import sky from "../svg/sky.svg";
const Homepage: React.FC = () => {

    return (
        <div id="home" className="container">
            <div className="text">
                Hello,I'm Atharva CJ,<br />
                <span className="text2">With my love for tech, I'm here to provide my software skills<br />
                    for your organization.</span>

            </div>
            <img src={sky} className="sky" alt="sky" />
            <img src={mountain} className="mountain" alt="mountain here" />
            <img src={mAF} className="manAndFloor" alt="manAndFloor here" />
        </div>

    )
}
export default Homepage

