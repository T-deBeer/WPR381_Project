import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { background } from '../assets';
import Textbox from './Textbox';
import Button from './button';

export default function VideoBackground() {
  const navi = useNavigate()
  const [zipcode, setZipcode] = useState('');

  const handleInputChange = (event:any):void => {
    setZipcode(event.target.value);
  };

  function center() {
    return 'absolute left-[50%] translate-x-[-50%] translate-y-[-50%]';
  }

  function getWeather() {
    if (/^\d{4}$/.test(zipcode)) {
      navi(`/predictions/${zipcode}`);
    } else {
      console.log("Error toast popup?");
    }
  }

  return (
    <>
      <div className="mt-[2vw] w-[70vw] h-[80vh] m-auto relative">
        <video src={background} muted loop autoPlay className="h-[80vh] rounded-[2.5em]">
          This video is not available at the moment
        </video>
        <p className={`text-8xl text-white whitespace-nowrap ${center()} top-[35%]`}>Weather.io</p>
        <p className={`text-4xl text-white whitespace-nowrap ${center()} top-[50%]`}>
          Award-winning weather forecasting app of 580 B.C.
        </p>
        <div className={`${center()} top-[70%]`}>
          <Textbox text="Enter ZIP code" onChange={handleInputChange}/>
        </div>
        <div className={`${center()} top-[80%]`}>
          <Button caption="Search" onClick={getWeather} />
        </div>
      </div>
    </>
  );
}