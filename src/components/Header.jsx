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
    <header className='Header flex place-content-center items-center'>
      <img className='Header-logo sm:w-[200px] sm:h-[200px]' src={logosc} alt="Logo SC" />


      <div className='flex flex-col items-center sm:flex-row'>
        <button className='Header-button sm:hidden' onClick={toggleMenu}>
          
          <img className={`Header-menu w-12 h-10 cursor-pointer ${menu ? 'opacity-1' : '' }`} src={burgerMenu} alt='Menu Hamburguesa' />
        </button>

        <nav className={`Header-nav sm:flex sm:bg-zinc-300 sm:text-black ${menu ? 'isActive w-100  bg-DarkGrayisBlue text-GrayishBlue p-20 ' : ''}`}>
          <ul className=' Header-ul flex flex-col text-[16px] sm:w-[438px] sm:text-[18px] sm:place-content-around sm:items-center sm:flex-row sm:space-x-4'>
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
