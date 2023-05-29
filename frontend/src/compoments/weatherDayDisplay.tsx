import React from 'react'
import { background, sunny, calender, temp } from '../assets';


export default function WeatherDayDisplay() {
  return (
    <div className='bg-cream w-[11vw] h-[29vh] rounded-2xl relative inline-block ml-10 mt-10'>
      <div className='relative'>
        <video src={background} muted loop autoPlay className="h-auto rounded-t-2xl">This video is not available at the moment</video>
        <p className=' absolute top-[50%] left-[50%] text-white text-4xl -translate-x-1/2 -translate-y-1/2'>Monday</p>
      </div>
      <ul className='list-none absolute left-[45%] -translate-x-[50%]'>
        <li className='text-white mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
          <img src={calender} alt="Calender" className='h-[3.5vh] mr-2'/>
          Date
        </li>
        <li className='text-white mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
          <img src={temp} alt="temp" className='h-[3.5vh] mr-2'/>
          AVG Temp
        </li>
        <li className='text-white mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
          <img src={sunny} alt="sunny" className='h-[3.5vh] mr-2' />
          Weather type
        </li>
      </ul>
    </div>
  )
}