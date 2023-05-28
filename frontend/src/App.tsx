import { useState, useEffect } from 'react';
import { Navbar, VideoBackground, WeatherDayDisplay } from './compoments';

interface User {
  firstName: string;
  lastName: string;
}

interface BackendData {
  users: User[];
}

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