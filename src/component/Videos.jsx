import React from 'react'

const Videos = ({ tittle,option,action}) => {
  return (
    <>
        <div className="videos pt-5 ">
                <div className='d-flex'>
                    <h3 style={{ color:'#F3E5CC' }}>{tittle}</h3>
                    <p style={{ color:'#F3E5CC',margin:'auto',fontSize:'12px' }}>{option}</p>
                </div>
                <div className='d-flex gap-4'>
                    <div className='main-video'></div>
                    <div className=' d-flex flex-column gap-4'>
                        <div className='video'></div>
                        <div className='video'></div>
                    </div>   
                </div>
                <div className='d-flex gap-4 mt-4' >
                    <div className='video'></div>
                    <div className='video'></div>
                    <div className='video1'><p style={{ color:'#F3E5CC' }}>{action}</p></div>
                </div>
            </div>
    </>
  )
}

export default Videos