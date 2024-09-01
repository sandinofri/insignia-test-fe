import React from 'react'
import "../style/chanel.css"
import { chanels } from '../assets/data/chanels'

const ChanelsComponent = () => {
  return (
    <>
          <div className='pt-5'>
            <div className='d-flex'>
                <h3 style={{ color:'#F3E5CC' }}>Chanels</h3>
                <p style={{ color:'#F3E5CC',margin:'auto',fontSize:'12px' }}>Browse all chanels</p>
            </div>
            <div className='chanels-container'>
                {chanels.map((item)=>(
                    <div className='chanel'><p style={{ color:'#953D46' }}>{item}</p></div>
                ))}
            </div>
        </div>
    </>
  )
}

export default ChanelsComponent