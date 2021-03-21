import React,{useEffect,useState} from 'react'
import sky from "../svg/sky.svg";
import mountain from "../svg/mountain.svg";
import mAF from "../svg/manAndFloor.svg";

const Homepage = ()=> {
    const [offsetY,setOffsetY] = useState(0)
    const handleScroll =()=>setOffsetY(window.pageYOffset)
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return ()=>{window.removeEventListener('scroll',handleScroll)}
    },[])
    return (
        <div id="home" className="container">
            <div className="text" style={{transform:`translateY(${offsetY*0.38}px)`}}>Hello,I'm Atharva.<br/><span className="text2">And I love building Web-apps.</span></div>
            <div className="bg">
                <img src={sky} className="sky" alt="sky" style={{transform:`translateY(-${offsetY*1}px)`}} />
                <img src={mountain} className="mountain" alt="mountain here" style={{transform:`translateY(-${offsetY*1}px)`}}/>
                <img src={mAF} className="manAndFloor" alt="manAndFloor here" style={{transform:`translateY(${offsetY*.9}px)`}} />
            </div>
            {/* <HomeSVG w={x} h={y} />            */}
        </div>
       
    )
}
export default Homepage

