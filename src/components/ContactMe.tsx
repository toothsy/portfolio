import React from 'react'
//@ts-expect-error

import treeAndMan from '../svg/treeAndMan.svg'
//@ts-expect-error

import secondMan from '../svg/secondMan.svg'
//@ts-expect-error

import github from '../svg/github.svg'
//@ts-expect-error

import linkedin from '../svg/linkedin.svg'

const ContactMe: React.FC = () => {

    return (
        <div id="contact" className="container dark">
            <div className="Left">
                <img src={treeAndMan} alt="treeAndMan" className="treeAndMan" />
                <img src={secondMan} alt="secondMan" className="secondMan" />
            </div>
            <div className="separator inv-sep"></div>
            <div className="Right">
                <div className="Right-content">

                    <h1 className="titleDark smol">Contact Me</h1>

                    <div className="link">
                        <a href="https://github.com/toothsy" ><img src={github} alt="github" className="c-logo-1" /></a>
                        <a href="https://www.linkedin.com/in/c-j-atharva/"><img src={linkedin} style={{ marginLeft: ".6em" }} alt="linkedin" className="c-logo-2" /></a>
                    </div>

                    <div className="wrapper">
                        {/* <Form/> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactMe;