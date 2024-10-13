import React, { MouseEventHandler } from 'react'
//@ts-expect-error

import i from '../svg/i.svg'
//@ts-expect-error

import close from '../svg/close.svg'
interface CardProps {
     shortForm: string
     longForm: string
     link: string
     id: number
     gold: boolean
     right: string
     cardDStyle?: React.CSSProperties
     frontDStyle?: React.CSSProperties
     backDStyle?: React.CSSProperties

}
export const Card: React.FC<CardProps> = ({ shortForm: sf, longForm: lf, right: r, link, id, gold, cardDStyle, frontDStyle, backDStyle }) => {
     // let width = window.innerWidth
     const makeInfoVisible = (e: React.MouseEvent<HTMLElement> | undefined) => {
          let imageElement = e?.target as any as HTMLImageElement

          let id = parseInt(imageElement?.dataset.id ?? "-1")
          let front: HTMLElement = document.querySelectorAll('.aage')[id] as HTMLElement;
          let back: HTMLElement = document.querySelectorAll('.peeche')[id] as HTMLElement;
          let close: HTMLElement = document.querySelectorAll('.close')[id] as HTMLElement;


          front.classList.toggle("upar")
          back.classList.toggle("upar")
          back.style.opacity = "1"
          back.style.transform = "scale(1)"
          imageElement.style.display = "none"
          close.style.display = "block"

     }
     const makeInfoInvisible = (e: React.MouseEvent<HTMLElement> | undefined) => {
          let imageElement = e?.target as any as HTMLImageElement

          let id = parseInt(imageElement?.dataset.id ?? "-1")
          let front: HTMLElement = document.querySelectorAll('.aage')[id] as HTMLElement;
          let back: HTMLElement = document.querySelectorAll('.peeche')[id] as HTMLElement;
          let i: HTMLElement = document.querySelectorAll('.i')[id] as HTMLElement;
          front.classList.toggle("upar")
          back.classList.toggle("upar")
          back.style.opacity = "0"
          back.style.transform = "scale(0)"
          imageElement.style.display = "none"
          i.style.display = "block"
     }

     return (
          <div className="card" data-id={id} style={cardDStyle}>
               <div className={`aage ${gold ? "gold" : ""}`} style={frontDStyle}>
                    <img src={i} alt="i" onClick={makeInfoVisible} className="i" data-id={id} />
                    <img src={close} alt="close" onClick={makeInfoInvisible} className="close" data-id={id} />
                    <h2 className={`sf ${gold ? "gold-sf" : ""}`}> {sf}</h2>
                    <h3 className={`lf ${gold ? "gold-lf" : ""}`}>{lf}</h3>
               </div>
               <div className="peeche" style={backDStyle}>
                    <h3 className="desc">{r}</h3>
                    <a href={link} > here's the link</a>
               </div>
          </div>
     )
}
