/* eslint-disable no-unused-vars */
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
    <h5>$54,927.30 <span>30%</span></h5></li>
<br/>
    <li><h4>Purchases</h4>
    <h5>$54,927.30 <span>30%</span></h5></li>
<br/>
    <li><h4>Research an development</h4>
    <h5>$54,927.30 <span>30%</span></h5>
    </li>
<br/>
    <li><h4>Rent</h4>
    <h5>$54,927.30 <span>30%</span></h5>
    </li>
<br/>
    <li><h4>Other</h4>
    <h5>$54,927.30 <span>30%</span></h5>
    </li>
</ul>
  </div>
</div></>
  )
}

export default chart
