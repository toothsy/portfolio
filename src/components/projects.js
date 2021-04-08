import React from 'react'
import mAC from '../svg/manAndCar.svg'
import backG from '../svg/backG.svg'
import Card from './Card'

const projects=()=>{
let cardsInfo = [{
        "sf":"CG",
        "lf":"Color Game",
        "right":"This is a simple game about guessing a color from the given rgb value." ,
        "link":"#project",
        "id":0
    },
    {
        "sf":"CG",
        "lf":"Color Game",
        "right":"This is a simple game about guessing a color from the given rgb value." ,
        "link":"#project",
        "id":1},
    {
        "sf":"CG",
        "lf":"Color Game",
        "right":"This is a simple game about guessing a color from the given rgb value." ,
        "link":"#project",
        "id":2}
]
    return (
        <div id="project" className="container dark">
            <div className="Left">
                <img src={mAC}  alt="proSVG1" className="mAC"/>
                <img src={backG} alt="proSVG2"  className="backG"/>
            </div>      
            <div className="separator inv-sep"></div>
            <div className="Right">
                <div className="Right-content">
                    <h1 className="titleDark">Projects</h1>
                        <div className="card-box">
                        {cardsInfo.map((cardInfo,index)=><Card sf={cardInfo.sf} lf={cardInfo.lf} r={cardInfo.right} id={cardInfo.id} link={cardInfo.link} key={index} />)}
                        </div>
                </div>
            </div>
            

        </div>
    )
}

export default  projects;