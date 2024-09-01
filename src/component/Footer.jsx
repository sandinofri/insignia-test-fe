import React from 'react'
import "../style/footer.css"

const Footer = () => {
  return (
    <>
        <div className="footer-container">
            <div className="d-flex gap-2">
                <div>o</div>
                <div>in</div>
                <div>f</div>
            </div>
           <div className='mt-4 mb-4'>
                <a href="#">About</a><span>/</span>
                <a href="#">For bussines</a><span>/</span>
                <a href="#">Sugestions</a><span>/</span>
                <a href="#">Help & FAQs</a><span>/</span>
                <a href="#">Contact</a><span>/</span>
                <a href="#">Pricing</a>
           </div>
           <small>&copy;copyright companyname inc</small>
           <div>
            <a href="#">Privacy</a><span>/</span>
            <a href="#">Terms</a>
           </div>
        </div>
    </>
  )
}

export default Footer