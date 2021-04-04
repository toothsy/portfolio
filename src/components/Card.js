import React from 'react'
import i from '../svg/i.svg'
export default function Card({sf,lf,r,link}) {
     const makeInfoVisible = (e) =>{
          let info = document.querySelector('.r');
          let title = document.querySelector('.card')
          title.classList.toggle("blur")
          info.classList.toggle("invisible")
      }
     return (
          <div className="card">
               <a href={link} className="overlay"> </a>
               <div className="l"><span className="sf"> {sf}</span><span className="lf">{lf}</span> </div>
               <div className="r invisible">{r}</div>
               <img src={i} alt="i" onClick={makeInfoVisible} className="i"/>
          </div>
     )}
