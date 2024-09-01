import React from 'react'
import "../style/videos.css"
import ActivitiesComponent from './ActivitiesComponent'
import Videos from './Videos'
import ChanelsComponent from './ChanelsComponent'

const VideosComponent = () => {
  return (
    <>
        <div className="container-videos"> 
            <div className='w-full'>
                <Videos tittle="Videos" option="Browse all videos" action="Upload"/> 
                <Videos tittle="People" option="View all" action="Show"/> 
                <Videos tittle="Documents" option="Browse all documents" action="Share"/> 
            </div>
            <div className="activity">
                <ActivitiesComponent/>
                <ChanelsComponent/>
            </div>
        </div>
    </>
  )
}

export default VideosComponent