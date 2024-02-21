import React, { useState } from 'react';
import planta from '../assets/img/planta.png';
import burgerMenu from '../assets/img/burgerMenu.png';
import '../styleSheets/Header.css'
import { Link } from 'react-router-dom';
import AnimmetionLogo from './AnimationLogo'

export const Header = () => {
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  };


  return (
    <header id='Landing-header' className='Header flex justify-between items-center sm:mr-[-30px]'>
       <img className='Header-logo opacity-0 mt-1 ml-[30px] w-[50px] h-[50px]' src={planta} alt="Logo SC" />

      <AnimmetionLogo />

      <div className='flex flex-col items-center mr-20 mt-[1px] sm:flex-row'>
        <button className='Header-button sm:hidden' onClick={toggleMenu}>

          <img className={`Header-menu w-10 h-10 cursor-pointer ${menu ? 'opacity-1' : ''}`} src={burgerMenu} alt='Menu Hamburguesa' />
        </button>

        <nav className={` Header-nav sm:mt-[-100px] sm:flex sm:bg-withe sm:text-black ${menu ? 'isActive w-100  bg-white text-GrayishBlue p-10' : ''}`}>
          <ul className=' Header-ul flex flex-col font-thin text-[14px] sm:w-[500px] sm:text-[18px] sm:place-content-around sm:items-center sm:flex-row sm:space-x-4 sm:ml-50'>
            {/* <Link to='/' className='hover:text-zinc-300' >
              INICIO
            </Link> */}
            <Link to='/AboutMe' className='Header-li hover:text-zinc-300'>
              ACERCA DE MI
            </Link>
            <Link to='/Projects' className='Header-li hover:text-zinc-300'>
              PROYECTOS
            </Link>
            <Link to='/Contact' className='Header-li hover:text-zinc-300'>
              CONTACTO
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

