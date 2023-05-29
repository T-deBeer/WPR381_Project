import React from 'react'
import { background } from '../assets'
import { Textbox, Button } from '../compoments'
export default function VideoBackground() {

  function center(){
    return `absolute left-[50%] translate-x-[-50%] translate-y-[-50%]`;
  }

  return (
    <>
      <div className="mt-[2vw] w-[49vw] h-[55vh] m-auto relative">
          <video src={background} muted loop autoPlay className="h-[55vh] rounded-3xl">This video is not available at the moment</video>
          <p className={`text-8xl text-white whitespace-nowrap ${center()} top-[35%]`}>Weather.io</p>
          <p className={`text-4xl text-white whitespace-nowrap ${center()} top-[50%]`}>Award-winning weather forecasting app of 580 B.C.</p>
          <div className={`${center()} top-[70%]`}>
            <Textbox text='Enter ZIP code'/>
          </div>          
          <div className={`${center()} top-[80%]`}>
          <Button caption='Search'/>
          </div> 
      </div>
    </>
  )
}