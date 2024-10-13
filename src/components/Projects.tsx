import React from 'react'
//@ts-expect-error

import mAC from '../svg/manAndCar.svg'
//@ts-expect-error

import backG from '../svg/backG.svg'
import { Card } from './Card'
const projects: React.FC = () => {
    let firstRow = [
        {
            "sf": "H M",
            "lf": "Hyper Market",
            "right": "A dotNet ecosystem based full-stack project built with blazor-wasm and .Net server",
            "link": "https://github.com/toothsy/HyperMarket",
            "gold": true,
            "id": 0
        },
        {
            "sf": "S A S",
            "lf": "Smart Attendance System",
            "right": "this is a full-stack project which also includes face detection service",
            "link": "https://github.com/slirq/Smart-attendance-database-system",
            "gold": true,
            "id": 1
        }

    ]
    let secondRow = [{
        "sf": "CG",
        "lf": "Color Game",
        "right": "This is a simple game about guessing a color from the given rgb value.",
        "link": "https://toothsy.github.io/colorGame/",
        "gold": false,
        "id": 2
    },
    {
        "sf": "3-P",
        "lf": "3-Page-demo",
        "right": "A basic implementation of server authentication with a log-in and registering",
        "link": "https://simple-3-page-demo.netlify.app/",
        "gold": false,
        "id": 3
    },
    {
        "sf": "R A",
        "lf": "Rest Api demo",
        "right": "Here the site renders data fetched from jsonplace-holder site and is using material-table",
        "link": "https://freedom-boi.netlify.app/",
        "gold": false,
        "id": 4 // refer articles.tsx, so that all the cards have proper id, 
        //they need to synced to be serially arranged, as document.querySelector will index the id in card.tsx

    }

    ]
    return (
        <div id="project" className="container light">
            <div className="Left">
                <img src={mAC} alt="proSVG1" className="mAC" />
                <img src={backG} alt="proSVG2" className="backG" />
            </div>
            <div className="separator"></div>
            <div className="Right">
                <div className="Right-content">
                    <h1 className="title">Projects</h1>
                    <div className="card-box">
                        <div className="card-row">
                            {firstRow.map((cardInfo, index) =>
                                <Card shortForm={cardInfo.sf}
                                    longForm={cardInfo.lf}
                                    right={cardInfo.right}
                                    id={cardInfo.id}
                                    link={cardInfo.link}
                                    key={index}
                                    gold={cardInfo.gold} />)}
                        </div>
                        <div className="card-row">
                            {secondRow.map((cardInfo, index) =>
                                <Card shortForm={cardInfo.sf}
                                    longForm={cardInfo.lf}
                                    right={cardInfo.right}
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

export default projects;