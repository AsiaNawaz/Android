import './App.css';
import React from 'react';
import Tools from './Tools';
import Home from './Home';
import Challenge from './Challenge';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Review from './Review.js';
import Login from './Login.js'
import Signup from './Signup';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/review" element={<Review/>} />
          <Route path='/login' element={<Login/>}/> 
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  )
}

