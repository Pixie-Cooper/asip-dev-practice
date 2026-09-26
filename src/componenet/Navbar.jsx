import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>Logo</div>

        <div className='menus'>
            <a href="#" className='link-item'>
            <div className="nav-icon"></div>
            <div className="nav-text">Home</div>
            </a>
            <a href="#" className='link-item'>
            <div className="nav-icon"></div>
            <div className="nav-text">About</div>
            </a>

            <a href="#" className='link-item'>
            <div className="nav-icon"></div>
            <div className="nav-text">Products</div>
            </a>
        </div>

        <div className="user-icon">User</div>
    </div>
  )
}

export default Navbar