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
import tf from '../svg/tf.svg'
import ts from '../svg/ts.svg'
import python from '../svg/python.svg'

const aboutMe=()=>{
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
                     <img src={c} alt="c"/>
                     <img src={css} alt="css"/>
                     <img src={express} alt="express"/>
                     <img src={git} alt="git"/>
                     <img src={html} alt="html"/>
                     <img src={java} alt="java"/>
                     <img src={js} alt="js"/>
                     <img src={mysql} alt="mysql"/>
                     <img src={nodeJS} alt="nodeJS"/>
                     <img src={opencv} alt="opencv"/>
                     <img src={python} alt="python"/>
                     <img src={reactJs} alt="reactJs"/>
                     <img src={tcl} alt="tcl"/>
                     <img src={tf} alt="tf"/>
                     <img src={ts} alt="ts"/>
                 </div>
            </div>
             </div>
        </div>
    )
}

export default  aboutMe