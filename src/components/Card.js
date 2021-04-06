import React from 'react'
import i from '../svg/i.svg'
export default function Card({sf,lf,r,link,id}) {
     const makeInfoVisible = (e) =>{
          let id = e.target.dataset.id
          let info = document.querySelectorAll('.aage')[id];
          // let title = document.querySelector('.card')
          info.classList.toggle("blur")
          info.classList.toggle("invisible")
      }
      let width = window.innerWidth;
     return (
          <div className="card">
               {width<900?<img src={i} alt="i" onClick={makeInfoVisible} className="i" data-id={id} />:null}
               <div className="aage"><h2 className="sf"> {sf}</h2><h3 className="lf">{lf}</h3></div>
               <div className="peeche"><h3 className="desc">{r}</h3>
               </div>
          </div>
     )}
