import React from 'react'
import treeAndMan from '../svg/treeAndMan.svg'
import secondMan from '../svg/secondMan.svg'
import github from '../svg/github.svg'
import linkedin from '../svg/linkedin.svg'

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
                                <form 
                                    className="contact-form"

                                    data-netlify="true"
                                    name="contact" 
                                    method="post"
                                    onSubmit="submit"                                    >

                                    <input type="hidden" name="form-name" value="contact" />
                                    <div class="input-fields">
                                        <div >
                                            <label >
                                                <input type="text" class="input" placeholder="Name" name="full-name"/>
                                            </label>
                                        </div>
                                        <div >
                                            <label >
                                                <input type="text" class="input" placeholder="Email Address" name="email"/>
                                            </label>
                                        </div>
                                        <div >
                                            <label >
                                                <input type="text" class="input" placeholder="Subject" name="subject"/>
                                            </label>
                                        </div>

                                    </div>
                                    <div className="msg" name="message">
                                    <textarea rows={5} placeholder="Say Hi!!" type="submit"></textarea>
                                    <button type="submit" className="btn">send</button>
                                    </div>
                                </form>
                                </div>

                </div>
                <a href="https://github.com/toothsy" ><img src={github} alt="github" className="c-logo-1"/></a>
                <a href="https://www.linkedin.com/in/atharva-c-j-4b5aa6171/"><img src={linkedin} alt="linkedin" className="c-logo-2"/></a>
            </div>
        </div>
    )
}

export default ContactMe;