import React, { useState } from 'react';
import '../styleSheets/Header.css'
import { Link } from 'react-router-dom';
import AnimmetionLogo from './AnimationLogo'

export const Header = () => {
  const [menu] = useState(true);

  return (
    <header className='w-full Header flex justify-between items-center sm:mr-[-30px] '>
      <AnimmetionLogo />

      <section className='flex flex-col items-center sm:flex-row'>

        <nav className={`Header-nav sm:mt-[-100px] sm:flex  sm:text-black ${menu ? 'isActive w-44 sm:w-full text-GrayishBlue' : ''}`}>
          <ul className=' Header-ul flex flex-col font-bold sm:font-thin p-4 text-2xl sm:w-[500px] sm:text-[18px] sm:place-content-around sm:items-center sm:flex-row sm:space-x-4 sm:ml-50'>
            <Link to='/AboutMe' className='Header-li no-underline hover:underline hover:text-zinc-300 decoration-2 underline-offset-8 '>
              ACERCA
            </Link>
            <Link to='/Projects'  className='Header-li no-underline hover:underline hover:text-zinc-300 decoration-2 underline-offset-8'>
              PROYECTOS
            </Link>
            <Link to='/Contact' className='Header-li no-underline hover:underline hover:text-zinc-300 decoration-2 underline-offset-8'>
              CONTACTO
            </Link>
          </ul>
        </nav>
      </section>
    </header>
  );
}

