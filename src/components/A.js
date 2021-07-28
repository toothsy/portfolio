import React from 'react'
import man from '../svg/man.svg'
import DB from '../svg/DB.svg'
import tree from '../svg/tree.svg'
import uC from '../svg/underConstruction.svg'
import bgUc from '../svg/bg.svg'
const Article=()=>{
    
    //keep the z-index of the articles above 2
    return (
        <div id="article" className="container dark">
            <div className="Left">            
                <div className="mt" >
                <img src={tree} alt="tree" className="tree"  />
                <img src={man} alt="man" className="man" />
                </div>
                <img src={DB} alt="DB" className="DB" />
            </div>
            <div className="separator  inv-sep"></div>
            <div className="Right">
                <div className="Right-content">
                    <h1 className="titleDark">Articles</h1>
                    <div className="articleContent">
                        <div className="Bg">
                            <img src={uC} alt="underConstrunction" className="uC" />
                            <img src={bgUc} alt="bgUc" className="bgUc"  />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Article