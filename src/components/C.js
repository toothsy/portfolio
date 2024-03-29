import React from 'react'
import i from '../svg/i.svg'
import close from '../svg/close.svg'
export default function Card({sf,lf,r,link,id,gold}) {
     // let width = window.innerWidth
     const makeInfoVisible = (e) =>{
          let id = e.target.dataset.id
          let aage = document.querySelectorAll('.aage')[id];
          let peeche = document.querySelectorAll('.peeche')[id];
          let close = document.querySelectorAll('.close')[id];
          // console.log(document.querySelectorAll('.aage'));
          // console.log(document.querySelectorAll('.peeche'));
          // console.log(document.querySelectorAll('.close'));
          aage.classList.toggle("upar")
          peeche.style.opacity=1
          peeche.style.transform="scale(1)"
          e.target.style.display="none"
          close.style.display="block"

      }
      const makeInfoInvisible = (e) =>{
          let id = e.target.dataset.id
          let aage = document.querySelectorAll('.aage')[id];
          let peeche = document.querySelectorAll('.peeche')[id];
          let i = document.querySelectorAll('.i')[id];
          aage.classList.toggle("upar")
          peeche.style.opacity=0
          peeche.style.transform="scale(0)"
          e.target.style.display="none"
          i.style.display="block"
      }
     
     return (
          <div className="card">
               <div className={`aage ${gold?"gold":""}`}>
                    <img src={i } alt="i" onClick={makeInfoVisible} className="i" data-id={id} />
                    <img src={close} alt="close" onClick={makeInfoInvisible} className="close" data-id={id} />
                    <h2 className={`sf ${gold?"gold-sf":""}`}> {sf}</h2>
                    <h3 className={`lf ${gold?"gold-lf":""}`}>{lf}</h3>
               </div>
               <div className="peeche" >
                    <h3 className="desc">{r}</h3>
                    <a href={link} > here's the link</a>
               </div>
          </div>
     )}
