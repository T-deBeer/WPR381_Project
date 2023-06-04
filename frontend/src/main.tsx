import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './Home';
import Predictions from './Predictions';
import ErrorPage from './ErrorPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/predictions/:zipcode' element={<Predictions/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
