import { Header } from "./Header";
import perfil from '../assets/img/perfil.png';
import React from 'react'

export const AboutMe = () => {
  return (
    <>
       <Header />
  <div className='bg-pink-200 flex flex-col sm:flex sm:justify-evenly'>
          <img
            alt='Developer'
            src={perfil}
            className='ml-10 opacity-80 w-[200px] sm:w-1/4 sm:ml-[300px] sm:h-auto rounded-full shadow-xl transition-transform duration-1000 hover:scale-105 filter brightness-125' />  
        </div>

      <div className="flex space-x-10 justify-between  sm:p-[500px] sm:mt-[-400px] sm:ml-[200px]">
        <div className=' flex flex-col text-Roboto text-[16px] sm:text-[20px]'>
          <p>React</p>
          <p>Javascript</p>
          <p>Figma</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Tailwind</p>
        </div>

        <div className=" text-[20px]  text-Roboto flex flex-col space-x-1 transform rotate-180 font-bold perspective-1 hover:scale-75 hover:text-zinc-300 transition-transform duration-1000 ease-in-out">
          <span className="transform rotate-90">S</span>
          <span className="transform rotate-90">K</span>
          <span className="transform rotate-90">I</span>
          <span className="transform rotate-90">L</span>
          <span className="transform rotate-90">L</span>
          <span className="transform rotate-90">S</span>
        </div>

        <div className='flex flex-col text-Roboto text-[16px] sm:text-[20px]'>
          <p>Continuo</p>
          <p>Aprendizaje</p>
          <p>Resilencia</p>
          <p>Trabajo</p>
          <p>Colaborativo</p>

        </div>
      </div>
      
      <div className="sm:ml-[50px] sm:mt-[-1000px] sm:h-[600px] sm:w-[500px] bg-black  w-full h-[350px] p-10   sm:rounded-lg text-white
      ">        
        <p className=" text-Roboto text-2xl">
        <span className="font-bold text-[244px] text-GrayishBlue hover:text-white">
        SAM CARO
        </span>  
        {' '} Hola soy Sam Caro, Diseñadora y desarrolladora Web de Colombia. Me apasiona el emprendimientos, {' '}
        <span className="font-bold  text-3xl text-GrayishBlue hover:text-white ">
        la investigación
           </span> {' '}
           y {' '}
           <span className="font-bold  text-4xl text-GrayishBlue hover:text-white ">
           nuevas tecnologías
           </span> 
            . {' '} Disfruto mi vida afrontando retos y evolucionando día a día. Me encanta el campo, nadar y pasar tiempo con mi familia.
        </p>
      </div>
      <footer className="bg-DarkGrayisBlue opacity-30 text-[12px] text-white p-1 mt-5">
        <div className="container mx-auto text-center">
          <p>SC &copy; 2024</p>
        </div>
      </footer>
    </>
  )
}