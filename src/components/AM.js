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
import reactJs from '../svg/react-js.svg'
import tcl from '../svg/tcl.svg'
import ts from '../svg/ts.svg'
import python from '../svg/python.svg'
import mongodb from '../svg/mongodb.svg'
import dotNet from '../svg/.Net.svg'
import blazor from '../svg/blazor.svg'
import cSharp from '../svg/cSharp.svg'

const AboutMe=()=>{
    return (
        <div id="about" className="container light">
             <div className="Left">
                 <img src={lady} alt="lady" className="lady"/>
                 <img src={road} alt="road" className="road"/>
             </div>
             <div className="separator "></div>
             <div className="Right">
             <div className="Right-content">
                 <h1 className="title smol">About Me</h1>
                 <div className="wrapperAM">
                        <p className="am">
                            I'm an undergraduate student.<br/>
                            The following languages, library
                            and  frameworks are the ones <br/> I'm familiar with
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
                        <img height="64" width="64" src={python} alt="python"/>
                        <img height="64" width="64" src={reactJs} alt="reactJs"/>
                        <img height="64" width="64" src={tcl} alt="tcl"/>
                        <img height="64" width="64" src={ts} alt="ts"/>
                        <img height="64" width="64" src={mongodb} alt="mongo"/>
                        <img height="64" width="64" src={cSharp} alt="cSharp"/>
                        <img height="64" width="64" src={dotNet} alt="dotNet"/>
                        <img height="64" width="64" src={blazor} alt="blazor"/>
                    </div>
                 </div>
            </div>
             </div>
        </div>
    )
}

export default  AboutMe