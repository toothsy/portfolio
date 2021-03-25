import React,{useEffect,useState} from 'react'
import sky from "../svg/sky.svg";
import mountain from "../svg/mountain.svg";
import mAF from "../svg/manAndFloor.svg";

const Homepage = ()=> {
    const [offsetY,setOffsetY] = useState(0)
    const handleScroll =()=>setOffsetY(window.pageYOffset)
    let width = window.innerWidth
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return ()=>{window.removeEventListener('scroll',handleScroll)}
    },[])
    return (
        <div id="home" className="container">
            <div className="text" style={{transform:`translateY(${offsetY*(width>500?0.38:.15)}px)`}}>Hello,I'm Atharva.<br/><span className="text2">And I love building beautiful Web-apps.</span></div>
            <div className="bg">
                <img src={sky} className="sky" alt="sky" style={{transform:`translateY(-${offsetY*.2}px)`}} />
                <img src={mountain} className="mountain" alt="mountain here" style={{transform:`translateY(-${offsetY*(width>500?.6:.4)}px)`}}/>
                <img src={mAF} className="manAndFloor" alt="manAndFloor here" style={{transform:`translateY(${offsetY*(width>500?.9:.01)}px)`}} />
            </div>
            {/* <HomeSVG w={x} h={y} />            */}
        </div>
       
    )
}
export default Homepage

