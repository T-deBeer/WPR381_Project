import { useState, useEffect } from 'react';

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
    <div className="bg-slate-500">
      <h1 className='text-8xl text-center text-slate-800'>Current Users</h1>
      <ul  className='text-3xl'>
        {backendData.users.map((user: User, index: number) => (
          
            <li className="text-emerald-400" key={index}>{user.firstName} {user.lastName}</li>
        ))}
      </ul>
    </div>
  );
}