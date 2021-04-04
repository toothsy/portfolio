import React from 'react'
import mAC from '../svg/manAndCar.svg'
import backG from '../svg/backG.svg'
import Card from './Card'

const projects=()=>{

    return (
        <div id="project" className="container dark">
            <div className="Left">
                <img src={mAC}  alt="proSVG1" className="mAC"/>
                <img src={backG} alt="proSVG2"  className="backG"/>
            </div>      
            <div className="separator inv-sep"></div>
            <div className="Right">
                <div className="Right-content">
                    <h1>Projects</h1>
                        <div className="card-box">
                        <Card  sf="CG" 
                                    lf="Color Game"  
                                    r="This is a simple game about guessing a color from the given rgb value." 
                                    link={" "} />
                        <Card  sf="CG" 
                                    lf="Color Game"  
                                    r="This is a simple game about guessing a color from the given rgb value." 
                                    link={" "} />
                        </div>
                </div>
            </div>
            

        </div>
    )
}

export default  projects;