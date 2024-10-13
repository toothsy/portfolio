import React from 'react'
import Logo from '../svg/Logo'
const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="attributing">
                <p >All the amazing illustration are from  <a href="https://undraw.co/">unDraw</a> and <a href="https://freepik.com">freepik
                </a>
                </p>
            </div>
            <div className="logo-wrapper" >

                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> <Logo /> </a>
            </div>
        </div>
    )
}

export default Footer