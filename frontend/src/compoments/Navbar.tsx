import React, { useState } from 'react';
import { logo, menu, background } from '../assets';

import { Sidebar } from '../compoments';

export default function Navbar() {
  return (
    <>
      <nav className='bg-creamDark px-[2vw] py-[1vh] flex items-center justify-start'>  
        <Sidebar/>             
      </nav>
    </>
  );
}

