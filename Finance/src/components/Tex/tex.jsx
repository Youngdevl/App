/* eslint-disable no-unused-vars */
import React from 'react'
import './tex.css'
const tex = () => {
  return (
    <div id='ty'>
        <h1>Last Transactions</h1>
        <lead>All the transactions for all time</lead>
      <ul>
        <li>NAME</li>
        <li>TYPE</li>
        <li>DATE</li>
        <li id='hy2'>AMOUNT</li>
        <li id='swift' >STATUS</li>
      </ul>
      <div id='hand'>
        <ul>
            <li id='mads'>
            <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png"
          alt=""
        /> <h1>Netflix</h1>
            </li>
            <li id='hy2'><p>Subscription</p></li>
            <li id='hy1'><p>3rd may 2023</p></li>
            <li><p>$1300.00</p></li>
            <li id='green'><p>Verified</p></li>
        </ul>
      </div>
      <div id='hand'>
        <ul>
            <li id='mads'>
            <img id='madss'
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
          alt=""
        /> <h1>Spotify</h1>
            </li>
            <li id='hy2'><p>Spotify manager</p></li>
            <li id='hy1'><p>3rd march 2023</p></li>
            <li><p>$3200.00</p></li>
            <li id='blue'><p>Pending</p></li>
        </ul>
      </div>
      <div id='hand'>
        <ul>
            <li id='mads'>
            <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://play-lh.googleusercontent.com/bDCkDV64ZPT38q44KBEWgicFt2gDHdYPgCHbA3knlieeYpNqbliEqBI90Wr6Tu8YOw"
          alt=""
        /> <h1>Paypal</h1>
            </li>
            <li id='hy2'><p>Payment for sales</p></li>
            <li id='hy1'><p>23rd may 2023</p></li>
            <li><p>$300.00</p></li>
            <li id='blue'><p>Pending</p></li>
        </ul>
      </div>
      <div id='hand'>
        <ul>
            <li id='mads'>
            <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://play-lh.googleusercontent.com/bDCkDV64ZPT38q44KBEWgicFt2gDHdYPgCHbA3knlieeYpNqbliEqBI90Wr6Tu8YOw"
          alt=""
        /> <h1>Paypal</h1>
            </li>
            <li id='hy2'><p>Payment for sales</p></li>
            <li id='hy1'><p>23rd may 2023</p></li>
            <li><p>$300.00</p></li>
            <li id='green'><p>Verified</p></li>
        </ul>
      </div>
    
    </div>
  )
}

export default tex
