import { useState } from 'react'
import NavbarComponent from './component/NavbarComponent'
import VideosComponent from './component/VideosComponent'
import Footer from './component/Footer'

function App() {

  return (
    <>
     <div className="container">
        <NavbarComponent/>
        <VideosComponent/>
        <Footer/>
     </div>
    </>
  )
}

export default App
