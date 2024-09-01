import React from 'react'
import "../style/navbar.css"

const NavbarComponent = () => {
  return (
    <>
     <div className='navigasi'>
        <p className='brand'>SosialNetwork</p>
        <input type="text" className='input-group search-input' name="" id="" placeholder='fine...' />
        <a className='btn-upload' href="#">Upload</a>
        <div className="d-flex">
            <span className='user-logo'>0</span>
            <p className='user'>Sandi</p>
        </div>
     </div>
     <div className="nav-link border-top border-bottom pt-3 pb-3">
        <a href="#">Videos</a><span>/</span>
        <a href="#">People</a><span>/</span>
        <a href="#">Documents</a><span>/</span>
        <a href="#">Events</a><span>/</span>
        <a href="#">Communities</a><span>/</span>
        <a href="#">Favorites</a><span>/</span>
        <a href="#">Channels</a>
     </div>
    </>
  )
}

export default NavbarComponent