import { Navbar, VideoBackground, WeatherDayDisplay, Button } from './compoments';
import {useNavigate} from 'react-router-dom';

export default function ErrorPage() {
    return (
     
      <div className='bg-creamlight h-[100vh]'>
        <Navbar/>
        <div className='flex flex-col items-center mt-[25vh]'>
          <h1 className=' text-[6rem]'>404</h1>
          <h2 className='text-[3rem]'>It seems you are trying to predict the weather of a place that is not on planet earth</h2>
          <h2 className='text-[2rem]'>Please use the navigation menu on the top left to navigate back to the home page</h2>
          <Button icon="Go back to Home" onClick={() => {}} hint='Go back to home' className=''/> 
        </div>
      </div>
  
    );
  }