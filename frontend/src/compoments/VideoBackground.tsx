import React from 'react'
import { background } from '../assets'
function VideoBackground() {
  return (
    <>
      <div className="w-full mt-[2vw]">
        <div className="w-2/3 ml-80">
          <video src={background} muted loop autoPlay className="h-auto rounded-3xl">This video is not available at the moment</video>
          <p className="text-8xl text-white absolute top-80 ml-96">Weather.io</p>
          <p className="text-4xl text-white absolute top-2/4 ml-56">Award-winning weather forecasting app of 580 B.C</p>
        </div>
      </div>
    </>
  )
}

export default VideoBackground