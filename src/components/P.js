import React from 'react'
import mAC from '../svg/manAndCar.svg'
import backG from '../svg/backG.svg'
import Card from './C'
const projects=()=>{
let cardsInfo = [{
        "sf":"CG",
        "lf":"Color Game",
        "right":"This is a simple game about guessing a color from the given rgb value." ,
        "link":"#project",
        "id":0
    },
    {
        "sf":"3-P",
        "lf":"3-Page-demo",
        "right":"A basic implementation of server authentication with a log-in and registering" ,
        "link":"#project",
        "id":1},
    {
        "sf":"R A",
        "lf":"Rest Api demo",
        "right":"Here the site renders data fetched from jsonplace-holder site and is using material-table" ,
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