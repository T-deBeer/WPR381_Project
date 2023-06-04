import { Navbar, VideoBackground, WeatherDayDisplay, Button } from './compoments';
import {useNavigate} from 'react-router-dom';

export default function ErrorPage() {

    const navi = useNavigate();
    return (
        <div className='bg-creamlight flex flex-col items-center justify-center h-screen'>
          <h1 className=' text-[6rem]'>404</h1>
          <h2 className='text-[3rem]'>It seems you are trying to predict the weather of a place that is not on planet earth</h2>
          <Button icon="Go back to Home" onClick={() => {navi('/')}} hint='Go back to home' className='mt-2'/> 
        </div>
    );
  }