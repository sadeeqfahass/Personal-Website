import React from 'react'

function Header() {
  return (
    <div className='header' id='header'>
      <div className="left">
        <h1 className='title'>Hi, I'm <span>Sadeeq</span></h1>
        <p className="sub-title">A Frontend Developer</p>
        <p className="desc">A graduate of Computer Systems and Information Technology with passion for technology and innovation. </p>
      </div>
      <div className="right">
        <img src="Image.png" alt="" />
      </div>
    </div>
  )
}

export default Header
