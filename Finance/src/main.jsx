/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import Inbox from './components/Inbox/inbox'
import App from './App.jsx'
import Trans from './components/Transaction/trans'
 import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
<Routes>
  <Route path='/' element={<App/>}></Route>
  <Route path='/inbox' element={<Inbox/>}/>
  <Route path='/trans' element={<Trans/>}/>
  </Routes></BrowserRouter>
  </React.StrictMode>,
)
