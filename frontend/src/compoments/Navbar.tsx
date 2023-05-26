import React from 'react';
import { logo } from '../assets';
import { navLinks, navbarStyle } from '../constants';

export default function Navbar() {
  return (
    <nav className='bg-cyan-800 px-[5vw] py-[1vh] flex items-center'>
      <img src={logo} alt="Logo" className='h-[4vh] mr-10'/>
    
    </nav>
  );
}

{/* <ul className='list-none justify-end items-center flex'>
{
  navLinks.map((nav, index) => (
    <li
      className='cursor-pointer ml-10 text-white absolute hover:bg-cyan-900 hover:p-2 '
      key={nav.id}
    >
      <a href={`#${nav.id}`}>            
        {nav.title}
       </a>
    </li>
  ))
}
</ul> */}