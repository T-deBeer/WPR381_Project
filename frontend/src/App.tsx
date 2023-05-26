import { useState, useEffect } from 'react';
import { Navbar } from './compoments';

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
    <div>
      <Navbar></Navbar>
    </div>
  );
}