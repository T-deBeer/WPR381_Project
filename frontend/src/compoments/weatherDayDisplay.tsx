import React, { useState, useEffect } from 'react'
import { background, sunny, calender, tempNormal } from '../assets';
import { WeatherDisplayProps } from '../data/interfaces';

const firstTime = false;

export default function WeatherDayDisplay(props: WeatherDisplayProps & { id: number } & { refresh: boolean}) {
  const [isFocused, setIsFocused] = useState(false);
  const uniqueId = `weatherDayDisplay-${props.id}`;

  // Refreshes the page everytime a new item is focused so that all other items are moved out of focus. 
  // Otherwise the previously focused item will still remain focus when selecting another element to focus.
  // Checks through akll the elements since other elements can be clicked on that weatherdaydisplay.
  useEffect(() => {
    // const elements = document.querySelectorAll('*');
    // setIsFocused(() => false);
    // elements.forEach((element) => {
    //   if (element.classList.contains('expanded')) {
    //     setIsFocused(() => true);
    //     alert(element.classList);
    //   }
    // });
    setIsFocused(() => document.getElementById(uniqueId)?.classList.contains('expanded') ? true : false);
  }, [props.refresh]);

  // Set the first element to be focused, but only once when the page is either loaded or refreshed by using the boolean firstTime.
  useEffect(() => {
    if ((props.id === 1) && (firstTime === false)) {
      setIsFocused(() => true);
    }
  }, [props.id]);

  return (
    <section id={uniqueId} className={`bg-cream rounded-2xl relative inline-block ml-10 mt-10 transition-all
      ${isFocused ? ' top-0 w-[30vw] h-[50vh]' : ' top-[50vh] w-[11vw] h-[29vh]'}`}
      // The onClick event adds 'expanded' to the selected element and removes it from the other elements.
      // Also changes the refresh property to refresh the page.
      onClick={ (event) => {
        props.onClick?.(event);
      }}>
      {/* Checks if an item is focused and changes its appearance accordingly */}
      {isFocused ?
        <div>
          <div className='relative'>
            <video src={background} muted loop autoPlay className="h-auto rounded-t-2xl">This video is not available at the moment</video>
            <p className='absolute top-[50%] left-[50%] text-white text-4xl -translate-x-1/2 -translate-y-1/2'>{props.info.date.substring(0,props.info.date.indexOf(','))}</p>
          </div>
          <ul className='list-none absolute left-[45%] -translate-x-[50%]'>
            <li className='text-white mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
              <img src={calender} alt="Calender" className='h-[3.5vh] mr-2' />
              {props.info.date.substring(props.info.date.indexOf(',')+1)}
            </li>
            <li className='text-white mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
              <img src={tempNormal} alt="temp" className='h-[3.5vh] mr-2' />
              {props.info.temperature.toString()}
            </li>
            <li className='text-white mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
              <img src={sunny} alt="sunny" className='h-[3.5vh] mr-2' />
              {props.info.weather.description}
            </li>
          </ul>
        </div>
        :
        <div>
          <div className='relative'>
            <video src={background} muted loop autoPlay className="h-auto rounded-t-2xl">This video is not available at the moment</video>
            <p className='absolute top-[50%] left-[50%] text-white text-4xl -translate-x-1/2 -translate-y-1/2'>{props.info.date.substring(0,props.info.date.indexOf(','))}</p>
          </div>
          <ul className='list-none absolute left-[45%] -translate-x-[50%]'>
            <li className='text-white mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
              <img src={calender} alt="Calender" className='h-[3.5vh] mr-2' />
              {props.info.date.substring(props.info.date.indexOf(',')+1)}
            </li>
            <li className='text-white mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
              <img src={tempNormal} alt="temp" className='h-[3.5vh] mr-2' />
              {props.info.temperature.toString()}
            </li>
            <li className='text-white mt-[1.5vh] text-lg whitespace-nowrap flex items-center'>
              <img src={sunny} alt="sunny" className='h-[3.5vh] mr-2' />
              {props.info.weather.description}
            </li>
          </ul>
        </div>}
    </section>
  )
}