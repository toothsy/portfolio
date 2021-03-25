import React,{useEffect,useState} from 'react'
import man from '../svg/man.svg'
import DB from '../svg/DB.svg'
import tree from '../svg/tree.svg'
import uC from '../svg/underConstruction.svg'
import bgUc from '../svg/bg.svg'

const Article=()=>{
    const [offsetY,setOffsetY] = useState(0)
    const handleScroll =()=>setOffsetY(window.pageYOffset)
    let width = window.innerWidth
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return ()=>{window.removeEventListener('scroll',handleScroll)}
    },[])

    //keep the z-index of the articles above 2
    return (
        <div id="article" className="container light">
            <div className="Left">            
                <div className="mt" >
                <img src={tree} alt="tree" className="tree"  />
                <img src={man} alt="man" className="man" />
                </div>
                <img src={DB} alt="DB" className="DB" />
            </div>
            <div className="separator"></div>
            <div className="Right">
                <h1>Articles</h1>
                <div className="articleContent">
                    <div className="Bg">
                        <img src={uC} alt="underConstrunction" className="uC" style={{transform:`translateY(${offsetY/2*(width<900?.09:.03)}px)`}} />
                        <img src={bgUc} alt="bgUc" className="bgUc" style={{transform:`translateY(-${offsetY*(width<900?.06:.06)}px)`}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Article