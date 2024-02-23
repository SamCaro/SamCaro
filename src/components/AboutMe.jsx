import { Header } from "./Header";
import perfil from '../assets/img/perfil.png';
import React from 'react'

export const AboutMe = () => {
  return (
    <>
      <Header />
      <div className='mt-[10px] bg-gradient-to-b from-fuchsia-200 to-white flex flex-col sm:flex sm:justify-evenly'>
        <img
          alt='Developer'
          src={perfil}
          className=' opacity-60 w-[200px] sm:w-1/4 ml-[360px] mt-[-150px] sm:h-auto rounded-full shadow-sm transition-transform duration-1000 hover:scale-105 filter brightness-105' />
        <span className="mt-[-250px] p-2 font-bold text-[184px] text-GrayishBlue hover:text-white" style={{ letterSpacing: '20px' }}>
          SAM CARO
        </span>
      </div>
      <section>

        <div className="flex flex-col sm:ml-[50px] sm:w-[500px]  w-full h-[350px] p-10   sm:rounded-lg text-black
      ">
          <p className="text-Roboto text-xl">
            Hola soy Diseñadora y desarrolladora Web de Colombia, apasionada por los emprendimientos, {' '}
            <span className="font-bold  text-3xl text-GrayishBlue hover:text-white ">
              investigación
            </span> {' '}
            y {' '}
            <span className="font-bold  text-2xl text-GrayishBlue hover:text-white ">
              tecnología
            </span>
            .{' '} Mi vida está impulsada por la emoción de afrontar retos y evolucionar constantemente. Combino creatividad y habilidades técnicas para ofrecer soluciones innovadoras. 
          </p> 
          {' '}
          <p className="text-Roboto text-xl">
            Fuera de lo digital, encuentro inspiración en el campo, donde disfruto de la tranquilidad y conexión con la naturaleza. Nadar es mi escape favorito, proporcionandome energía renovada y claridad mental. Además, valoro el tiempo en familia como un pilar fundamental en mi vida.
          </p>
        </div>

        <div className="border-l p-14 flex items-center space-x-10 justify-between">
          <div className=' flex flex-col text-Roboto text-[16px] sm:text-[20px]'>
            <p>React</p>
            <p>Javascript</p>
            <p>Figma</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Tailwind</p>
          </div>

          <div className=" text-[20px]  text-Roboto flex flex-col  transform rotate-180 font-bold perspective-1 hover:scale-75 hover:text-zinc-300 transition-transform duration-1000 ease-in-out">
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

      </section >
      <footer className="bg-DarkGrayisBlue opacity-30 text-[12px] text-white p-1 mt-12">
        <div className="container ml-[950px]">
          <p>SC &copy; 2024</p>
        </div>
      </footer>
    </>
  )
}