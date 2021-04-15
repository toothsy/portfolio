import React from 'react'
import lady from '../svg/lady.svg'
import road from '../svg/road.svg'

import c from '../svg/c.svg'
import css from '../svg/css.svg'
import express from '../svg/express.svg'
import git from '../svg/git.svg'
import html from '../svg/html.svg'
import java from '../svg/java.svg'
import js from '../svg/js.svg'
import mysql from '../svg/mysql.svg'
import nodeJS from '../svg/nodeJS.svg'
import opencv from '../svg/opencv.svg'
import reactJs from '../svg/react-js.svg'
import tcl from '../svg/tcl.svg'
import tfjs from '../svg/tfjs.png'
import ts from '../svg/ts.svg'
import python from '../svg/python.svg'

const AboutMe=()=>{
    return (
        <div id="about" className="container dark">
             <div className="Left">
                 <img src={lady} alt="lady" className="lady"/>
                 <img src={road} alt="road" className="road"/>
             </div>
             <div className="separator inv-sep"></div>
             <div className="Right">
             <div className="Right-content">
                 <h1 className="titleDark smol">About Me</h1>
                 <p className="am">
                    I'm an undergraduate student.<br/>
                    The following languages ,library and  frameworks are the ones <br/> I'm familiar with
                 </p>
                 <div className="gridOne">
                     <img height="64" width="64" src={c} alt="c"/>
                     <img height="64" width="64" src={css} alt="css"/>
                     <img height="64" width="64" src={express} alt="express"/>
                     <img height="64" width="64" src={git} alt="git"/>
                     <img height="64" width="64" src={html} alt="html"/>
                     <img height="64" width="64" src={java} alt="java"/>
                     <img height="64" width="64" src={js} alt="js"/>
                     <img height="64" width="64" src={mysql} alt="mysql"/>
                     <img height="64" width="64" src={nodeJS} alt="nodeJS"/>
                     <img height="64" width="64" src={opencv} alt="opencv"/>
                     <img height="64" width="64" src={python} alt="python"/>
                     <img height="64" width="64" src={reactJs} alt="reactJs"/>
                     <img height="64" width="64" src={tcl} alt="tcl"/>
                     <img height="64" width="77" src={tfjs} alt="tf"/>
                     <img height="64" width="64" src={ts} alt="ts"/>
                 </div>
            </div>
             </div>
        </div>
    )
}

export default  AboutMe