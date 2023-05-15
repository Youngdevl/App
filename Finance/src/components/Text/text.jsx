
/* eslint-disable no-unused-vars */
import React from 'react'
import Items from  '../Items/item';
import './text.css'
const text = () => {
  return (
<>
<div id="tip">
      <ul>
        <li id="first"><button type="button" className="btn position-relative">
  Primary
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span className="visually-hidden">unread messages</span>
  </span>
</button></li>
        <li><button type="button" className="btn position-relative">
  Promotions
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    9+
    <span className="visually-hidden">unread messages</span>
  </span>
</button></li>
        <li><button type="button" className="btn position-relative">
  Social
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    299+
    <span className="visually-hidden">unread messages</span>
  </span>
</button></li>
      </ul>
      <hr/>
      </div>
      <Items/>
      </>
  )
}

export default text
