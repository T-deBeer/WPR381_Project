import { useState, useEffect } from 'react';
import { Navbar, VideoBackground, WeatherDayDisplay } from './compoments';
import  { BackendData } from './data/interfaces';


export default function Home() {
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
    </div>
  );
}