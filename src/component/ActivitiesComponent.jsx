import React from 'react'
import "../style/activity.css"
import {activity} from "../assets/data/activity"

const ActivitiesComponent = () => {
  return (
    <>
        <div className='pt-5'>
            <div className='d-flex'>
                <h3 style={{ color:'#F3E5CC' }}>Activity</h3>
                <p style={{ color:'#F3E5CC',margin:'auto',fontSize:'12px' }}>View timeline/Filter activities</p>
            </div>
            <div className='activity-container'>
                {activity.map((item)=>(
                     <div className='d-flex mb-2'>
                        <div className='activity-image'></div>
                        <div style={{ color:'#F3E5CC' }}>
                            <div className='d-flex gap-2'><p>{item.author}</p><small style={{ fontSize:'12px',marginTop:'4px' }}>{item.tittle}</small></div>
                            <small style={{ fontSize:'12px' }}>{item.slug}</small>
                            <small style={{ fontSize:'12px' }}>{item.date}</small>
                        </div>
                     </div>
                ))}
               
            </div>
        </div>
    </>
  )
}

export default ActivitiesComponent