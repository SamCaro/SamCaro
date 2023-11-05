import React, { useState } from 'react';
 import logosc from '../assets/img/logosc.png';
import burgerMenu from '../assets/img/burgerMenu.png';
import '../styleSheets/Header.css'
import { Link } from 'react-router-dom';


export const Header = () => {
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className='Header flex justify-between items-center'>
      <img className='Header-logo mt-1 ml-[-50px] w-[200px] h-[200px]  sm:w-[200px] sm:h-[200px] sm:ml-4' src={logosc} alt="Logo SC" /> 

      <div className='flex flex-col items-center mr-20 mt-[1px] sm:ml-20 sm:flex-row'>
        <button className='Header-button sm:hidden' onClick={toggleMenu}>
          
          <img className={`Header-menu w-12 h-10 cursor-pointer ${menu ? 'opacity-1' : '' }`} src={burgerMenu} alt='Menu Hamburguesa' />
        </button>

        <nav className={`Header-nav sm:mt-[-100px] sm:flex sm:bg-zinc-300 sm:text-black ${menu ? 'isActive w-100  bg-DarkGrayisBlue text-GrayishBlue p-10' : ''}`}>
          <ul className=' Header-ul flex flex-col text-[16px] sm:w-[400px] sm:text-[18px] sm:place-content-around sm:items-center sm:flex-row sm:space-x-4 sm:ml-40'>
            <Link to='/' className='hover:text-white' >
              HOME
            </Link>
            <Link to='/AboutMe' className='Header-li hover:text-white'>
             ABOUT ME
            </Link>
            <Link to='/Projects'className='Header-li hover:text-white'>
             PROJECTS
            </Link>
            <Link to='/Contact' className='Header-li hover:text-white'>
              CONTACT
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
