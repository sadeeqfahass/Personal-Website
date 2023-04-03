import React from 'react'

function Header() {
  return (
    <div className='header' id='header'>
      <div className="left">
        <h1 className='title'>Hi, I'm <span>Sadeeq</span></h1>
        <p className="sub-title">A Frontend Developer</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, exercitationem?</p>
      </div>
      <div className="right">
        <img src="User.png" alt="" />
      </div>
    </div>
  )
}

export default Header
