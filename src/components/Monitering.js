import React from 'react'
import SidePanel from './SidePanel'
import List from './List'

const Monitering = () => {
  return (
    <div classNameName='div'>
     <a className="monitoring">Monitoring</a>
      <button className="sectional-tab-bar">
        <div className="background-line"></div>
        <div className="section">
          <div className="overview">Pending</div>
          <div className="highlight"></div>
        </div>
        <div className="section1">
          <div className="overview1">Completed</div>
        </div>
      </button>
      <List/>
        <SidePanel/>
   
    </div>
  )
}

export default Monitering