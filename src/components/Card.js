import React from 'react'

export default function Card({sf,lf,r}) {
     return (
          <div className="card">
               <div className="l"><span className="sf"> {sf}</span><span className="lf">{lf}</span> </div>
               <div className="r">{r}</div>
          </div>
     )}
