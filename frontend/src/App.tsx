import { useState, useEffect } from 'react';
import { Navbar, VideoBackground, WeatherDayDisplay } from './compoments';
import  { BackendData } from './data/interfaces';

export default function App() {
  const [backendData, setBackendData] = useState<BackendData>({ users: [] });

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then((data: BackendData) => {
        setBackendData(data);
      });
  }, []);
  
  return (
   
    <div className='bg-creamlight h-[100vh]'>
     {/* <DetailedWeatherDisplay/> */}
      <Navbar/>
      <VideoBackground/>
      <div className='w-[94vw] ml-[3vw]'>
        <WeatherDayDisplay/>
        <WeatherDayDisplay/>
        <WeatherDayDisplay/>
        <WeatherDayDisplay/>
        <WeatherDayDisplay/>
        <WeatherDayDisplay/>
        <WeatherDayDisplay/>
      </div>
    </div>
  );
}