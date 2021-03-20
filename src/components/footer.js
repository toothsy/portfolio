import React from 'react'
import Logo from '../builtSvg/Logo'
const footer=()=>{
    return (
        <div className="footer">
            <span >
                All the amazing illustration are from 
                    <a href="https://undraw.co/">
                    unDraw
                    </a> 
                    and 
                    <a href="https://freepik.com">
                    freepik
                    </a>
            </span>
           <div className="logo-wrapper" href="#"> <Logo/></div>
        </div>
    )
}

export default  footer