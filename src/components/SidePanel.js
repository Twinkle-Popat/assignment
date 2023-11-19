import React from 'react'
import './style.css';
import {Link } from "react-router-dom";


const SidePanel = () => {
  return (
    <div className="sidepanel">
    <div className="image-1-parent">
      <img className="image-1-icon" alt="" src="./public/image-1@2x.png" />

      <div className="home-parent">
        <div className="home">
          <Link className='Onboarding' to='/Overview'>Overview</Link>
         
        </div>
        <div className="home">
        <Link className='Onboarding' to='/Onboarding'>OnBoarding</Link>
          
        </div>
        <div className="home1">
          <Link className='Onboarding' to="/Monitering">Monitoring</Link>
        </div>
        <div className="home">
          <Link className='Onboarding' to="/Flagging">Flagging</Link>
        </div>
        <div className="home">
          <Link className='Onboarding' to="/SOI">Source of Income</Link>
        </div>
        <div className="home">
          <Link className='Onboarding' to="/UAR">UAR</Link>
        </div>
      </div>
    </div>
    <div className="content6">
      <div className="avatar-text">
        <div className="avatar">
          <img className="image-icon" alt="" src="./public/image@2x.png" />

          <div className="div1">+6</div>
        </div>
        <div className="text">
          <div className="user">Elon Musk</div>
          <div className="elontwittercom">elon@twitter.com</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SidePanel