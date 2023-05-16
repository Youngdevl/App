/* eslint-disable no-unused-vars */
import img from '../assets/ktc2to74b6y397gvd-Coinbase.png'
import img2 from '../assets/ktc2tqfoxyck56nf2-Ebay.png'
import img3 from '../assets/ktc2tts5z5jcw89g1-Invision.png'
import img4 from '../assets/l9e9nr99mhfoh88p0-vercel-logotype-dark 1.png'
import React from 'react'
import Line from '../Line/line'
import './chart.css'
const chart = () => {
  return (
   <>
   <div className="flex">
  <div className="flex-1 w-64 ...">
<Line/>
  </div>
  <div className="flex-1 w-32 ...">
<ul id='wep'>
    <li><h4>Avertising & Marketing</h4>
    <h5>$54,927.30 <span>30%</span></h5>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione unde omnis excepturi doloribus mollitia ad at quia? Esse vitae exercitationem cumque, non est, magnam pariatur vero quae molestias dolor quod!</p></li>
<br/>
</ul>
<ul id='jg'>
<li><img src={img2}/></li>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<li><img src={img3}/></li>
</ul>
<ul id='wep' className='bacl'>
    <li id='dir'><h4>Reserves</h4>
    <h5>$4,927.30 <span>20%</span></h5>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et architecto velit cumque, natus fugiat at odio? Obcaecati cum fugit</p></li>
<br/>
</ul>
  </div>
</div></>
  )
}

export default chart
