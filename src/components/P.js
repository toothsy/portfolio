import React from 'react'
import mAC from '../svg/manAndCar.svg'
import backG from '../svg/backG.svg'
import Card from './C'
const projects=()=>{
    let firstRow=[
        {
            "sf":"S A S",
            "lf":"Smart Attendance System",
            "right":"this is a Full Stack Project which also includes face detection service" ,
            "link":"https://github.com/slirq/Smart-attendance-database-system",
            "gold":true,
            "id":0
            }
    ]
let secondRow = [{
        "sf":"CG",
        "lf":"Color Game",
        "right":"This is a simple game about guessing a color from the given rgb value." ,
        "link":"https://toothsy.github.io/colorGame/",
        "gold":false,
        "id":1
    },
    {
        "sf":"3-P",
        "lf":"3-Page-demo",
        "right":"A basic implementation of server authentication with a log-in and registering" ,
        "link":"https://simple-3-page-demo.netlify.app/",
        "gold":false,
        "id":2},
    {
        "sf":"R A",
        "lf":"Rest Api demo",
        "right":"Here the site renders data fetched from jsonplace-holder site and is using material-table" ,
        "link":"https://freedom-boi.netlify.app/",
        "gold":false,
        "id":3
        
        }

]
    return (
        <div id="project" className="container light">
            <div className="Left">
                <img src={mAC}  alt="proSVG1" className="mAC"/>
                <img src={backG} alt="proSVG2"  className="backG"/>
            </div>      
            <div className="separator"></div>
            <div className="Right">
                <div className="Right-content">
                    <h1 className="title">Projects</h1>
                        <div className="card-box">
                            <div className="card-row">
                                {firstRow.map((cardInfo,index)=><Card sf={cardInfo.sf} 
                                                                                                    lf={cardInfo.lf} 
                                                                                                    r={cardInfo.right} 
                                                                                                    id={cardInfo.id} 
                                                                                                    link={cardInfo.link} 
                                                                                                    key={index}
                                                                                                    gold={cardInfo.gold} />)}
                            </div>
                        <div className="card-row">
                            {secondRow.map((cardInfo,index)=><Card sf={cardInfo.sf} 
                                                                                                lf={cardInfo.lf} 
                                                                                                r={cardInfo.right} 
                                                                                                id={cardInfo.id} 
                                                                                                link={cardInfo.link} 
                                                                                                key={index}
                                                                                                gold={cardInfo.gold} />)}
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default  projects;