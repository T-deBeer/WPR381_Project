import React, { useState } from 'react'
import { background, sunny, calender, tempNormal } from '../assets';
export default function WeatherDayDisplay() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={`bg-cream rounded-2xl relative inline-block ml-10 mt-10 transition-all
      ${isFocused ? ' top-0 w-[30vw] h-[50vh]' : ' top-[50vh] w-[11vw] h-[29vh]'}`}
      onClick={() => {
        setIsFocused((prev) => !prev);
      }}
    >
      {isFocused ?
        <div>
          <div className='relative'>
            <video src={background} muted loop autoPlay className="h-auto rounded-t-2xl">This video is not available at the moment</video>
            <p className='absolute top-[50%] left-[50%] text-white text-4xl -translate-x-1/2 -translate-y-1/2'>Monday</p>
          </div>
          <ul className='list-none absolute left-[45%] -translate-x-[50%]'>
            <li className='text-white mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
              <img src={calender} alt="Calender" className='h-[3.5vh] mr-2' />
              Date
            </li>
            <li className='text-white mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
              <img src={tempNormal} alt="temp" className='h-[3.5vh] mr-2' />
              AVG Temp
            </li>
            <li className='text-white mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
              <img src={sunny} alt="sunny" className='h-[3.5vh] mr-2' />
              Weather type
            </li>
          </ul>
        </div>
        :
        <div>
          <div className='relative'>
            <video src={background} muted loop autoPlay className="h-auto rounded-t-2xl">This video is not available at the moment</video>
            <p className='absolute top-[50%] left-[50%] text-white text-4xl -translate-x-1/2 -translate-y-1/2'>Monday</p>
          </div>
          <ul className='list-none absolute left-[45%] -translate-x-[50%]'>
            <li className='text-white mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
              <img src={calender} alt="Calender" className='h-[3.5vh] mr-2' />
              Date
            </li>
            <li className='text-white mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
              <img src={tempNormal} alt="temp" className='h-[3.5vh] mr-2' />
              AVG Temp
            </li>
            <li className='text-white mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
              <img src={sunny} alt="sunny" className='h-[3.5vh] mr-2' />
              Weather type
            </li>
          </ul>
        </div>}
    </div>
  )
}