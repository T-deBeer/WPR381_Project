import { useState, useEffect } from 'react';
import { Navbar, VideoBackground } from './compoments';
import  background  from './assets/background.mp4';
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
    </div>
  );
}