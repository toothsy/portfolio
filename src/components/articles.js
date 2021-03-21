import React,{useEffect,useState} from 'react'
import man from '../svg/man.svg'
import DB from '../svg/DB.svg'
import tree from '../svg/tree.svg'
const Article=()=>{
    const [offsetY,setOffsetY] = useState(0)
    const handleScroll =()=>setOffsetY(window.pageYOffset)
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return ()=>{window.removeEventListener('scroll',handleScroll)}
    },[])
    return (
        <div id="article" className="container light">
            <div className="ArtLeft">
                <img src={tree} alt="tree" className="tree"  />
                <img src={man} alt="man" className="man" />
                <img src={DB} alt="DB" className="DB" />
            </div>
        </div>
    )
}

export default  Article