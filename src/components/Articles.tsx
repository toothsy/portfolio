import React from 'react'
//@ts-expect-error

import man from '../svg/man.svg'
//@ts-expect-error

import DB from '../svg/DB.svg'
//@ts-expect-error

import tree from '../svg/tree.svg'
import { Card } from './Card'
const Article: React.FC = () => {
    let firstRow = [
        {
            "sf": "Defer",
            "lf": "Golang",
            "right": "An intro to golang's defer keyword",
            "link": "https://toothsy.hashnode.dev/all-you-need-to-know-about-defer-closure-in-go-lang",
            "gold": true,
            "id": 5 // refer projects.tsx, so that all the cards have proper id, 
            //they need to synced to be serially arranged, as document.querySelector will index the id in card.tsx
        }]
    const backDStyle: React.CSSProperties = {
        "width": "100%"
    }
    //keep the z-index of the articles above 2
    return (
        <div id="article" className="container dark">
            <div className="Left">
                <div className="mt" >
                    <img src={tree} alt="tree" className="tree" />
                    <img src={man} alt="man" className="man" />
                </div>
                <img src={DB} alt="DB" className="DB" />
            </div>
            <div className="separator  inv-sep"></div>
            <div className="Right">
                <div className="Right-content">
                    <h1 className="titleDark">Articles</h1>
                    <div className="Bg">
                        <div className="card-box">
                            <div className="card-row">
                                {
                                    firstRow.map((cardInfo, index) =>
                                        <Card shortForm={cardInfo.sf}
                                            longForm={cardInfo.lf}
                                            right={cardInfo.right}
                                            id={cardInfo.id}
                                            link={cardInfo.link}
                                            key={index}
                                            gold={cardInfo.gold}
                                            backDStyle={backDStyle}

                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article