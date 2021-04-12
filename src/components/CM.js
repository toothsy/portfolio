import React from 'react'
import treeAndMan from '../svg/treeAndMan.svg'
import secondMan from '../svg/secondMan.svg'
import github from '../svg/github.svg'
import linkedin from '../svg/linkedin.svg'
import Form from './FORM'

const ContactMe=()=>{
 
    return (
        <div id="contact" className="container light">
            <div className="Left">
                <img src={treeAndMan} alt="treeAndMan" className="treeAndMan"/>
                <img src={secondMan} alt="secondMan" className="secondMan"/>
            </div>
            <div className="separator"></div>
            <div className="Right">
                <div className="Right-content">
                        <h1 className="title smol">Contact Me</h1>
                        <div className="wrapper">
                            <Form/>
                        </div>

                </div>
                <a href="https://github.com/toothsy" ><img src={github} alt="github" className="c-logo-1"/></a>
                <a href="https://www.linkedin.com/in/atharva-c-j/"><img src={linkedin} alt="linkedin" className="c-logo-2"/></a>
            </div>
        </div>
    )
}

export default ContactMe;