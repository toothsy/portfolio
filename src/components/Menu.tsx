import React, { useRef } from 'react'
export const Menu: React.FC = () => {

    let checkBox = useRef<HTMLInputElement>(null)
    const cancellableEvent = e => {
        if (!checkBox.current) {
            return
        } else {
            checkBox.current.checked = !checkBox.current?.checked
        }

    }
    return (
        <div className="menu-wrap" >
            <input type="checkbox" ref={checkBox} className="toggler" />
            <div className="hamburger" >
                <div></div>
            </div>
            <div className="menu" onClick={cancellableEvent}>
                <div>
                    <div>
                        <div>
                            <ul>
                                <li><a href="#home">HOME</a></li>
                                <li><a href="#project">PROJECTS</a></li>
                                <li><a href="#article">ARTICLE</a></li>
                                <li><a href="#about">ABOUT</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
