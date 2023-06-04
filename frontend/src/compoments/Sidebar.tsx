import React, { useState } from 'react'
import { menu } from '../assets';
import { navLinks } from '../constants';


export default  function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleMenu = () => {
        setShowSidebar((prev) => { return !prev });
    };
    return (
        <>
            <img src={menu} alt="menu" className={`h-[4vh] z-50 transition-all duration-300 ${showSidebar ? 'rotate-0' : 'rotate-90'}`} onClick={toggleMenu} />

            <div
                className={`top-0 left-[-15vw] w-[15vw] h-full pt-[5vh] bg-creamDark text-white fixed z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-full " : "translate-x-0"}`}
            >
                <ul className='list-none'>
                    {
                        navLinks.map((nav, index) => (
                            <li
                                className='rounded-md cursor-pointer ml-10 text-white hover:bg-cream m-[2vh] p-[2vh] transition-colors ease-in-out duration-500'
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
            <div
                onClick={() => {
                    if (showSidebar == true) {
                        toggleMenu();
                    }
                }}
                className={`bg-gray-50 absolute top-0 left-0 w-full h-full transition-opacity ease-in-out duration-300 ${showSidebar ? 'opacity-50 z-30' : 'opacity-0 z-0'}`} />
            </>
    );
};