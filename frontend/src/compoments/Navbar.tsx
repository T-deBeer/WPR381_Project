import React, { useState } from 'react';
import { logo, menu, background } from '../assets';
import { navLinks, navbarStyle } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => { return !prev });
  };
  return (
    <>
      <nav className='bg-cream px-[2vw] py-[1vh] flex items-center'>
        <img src={menu} alt="menu" className='h-[4vh]' onClick={toggleMenu} />
      </nav>
      {isOpen && (
        <div className='bg-red-950'>
          <ul className='list-none'>
            {
              navLinks.map((nav, index) => (
                <li
                  className='cursor-pointer ml-10 text-white hover:bg-cyan-900 hover:p-2 '
                  key={nav.id}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      )}
    </>
  );
}

