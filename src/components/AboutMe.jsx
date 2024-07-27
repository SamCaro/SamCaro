import { Header } from "./Header";
import perfil from '../assets/img/perfil.png';
import React from 'react'

export const AboutMe = () => {
  return (
    <div className="relative">
      <Header/>

<div className='mt-[-50px] bg-gradient-to-b from-white to-fuchsia-100 flex flex-col sm:flex-row sm:justify-evenly relative z-50'> 
 <div className="flex items-center justify-center sm:justify-start sm:w-1/2 sm:ml-10">
    <span className="text-4xl p-2 mb-2 sm:p-4
    
    font-bold sm:text-8xl text-GrayishBlue hover:text-pink-200" style={{ letterSpacing: '10px' }}>
      SAM CARO
    </span>
  </div>
  <div className="flex items-center justify-center sm:justify-start sm:w-1/2">
    <img
      alt='Developer'
      src={perfil}
      className='w-1/6 mb-2 mt-2 ml-72 opacity-60 sm:w-52 rounded-full shadow-2xl shadow-fuchsia-300 transition-transform duration-1000 hover:scale-105 filter brightness-105' />
  </div>
</div>

<div className='mt-[-80px] sm:mt-[-100px] flex justify-center text-white h-24 w-96 sm:h-28 sm:w-full shadow-xl hue-rotate-90 shadow-gray-100 text-2xl font-thin bg-slate-10 rounded-md origin-center '>
          <div className='mr-6'>
          </div>
        </div>
      

        <div className=' flex justify-center text-white mt-96 h-24  shadow-xl  text-xl font-thin bg-slate-10  rounded-md origin-center'>
        </div>
      
      
     <section className="flex flex-col sm:flex sm:flex-row overflow-x-hidden mt-[-450px]">

        <div className="sm:flex sm:flex-col sm:ml-[10px] sm:w-[700px]  w-full h-auto p-4   rounded-lg text-black
      ">
          <p className="text-Roboto text-sm sm:text-lg">
            Soy Diseñadora y desarrolladora Web, apasionada por los emprendimientos, {' '}
            <span className="font-bold  sm:text-3xl text-GrayishBlue hover:text-white ">
              investigación
            </span> {' '}
            y {' '}
            <span className="font-bold  sm:text-2xl text-GrayishBlue hover:text-white ">
              tecnología
            </span>
            .{' '} Mi vida está impulsada por la emoción de afrontar retos y evolucionar constantemente. Combino creatividad y {' '}
            <span className="font-bold  sm:text-2xl text-GrayishBlue hover:text-white ">
              habilidades técnicas
            </span>{' '}

            para ofrecer soluciones innovadoras.
          </p>
          {' '}
          <p className="mt-6 text-Roboto text-sm sm:text-xl">
            Fuera de lo digital, encuentro inspiración en el{' '}
            <span className="font-bold  sm:text-2xl text-GrayishBlue hover:text-white ">
              campo
            </span>{' '}
            , disfruto la tranquilidad y conexión con la{' '}
            <span className="font-bold  sm:text-3xl text-GrayishBlue hover:text-white ">
              naturaleza
            </span>{' '}
            . Nadar es mi escape, proporcionandome energía renovada y claridad mental.
          </p>
        </div>

        <div className=" p-4 sm:border-l sm:p-14 flex items-center space-x-10 justify-between">
          <div className='flex flex-col text-Roboto text-[16px] sm:text-[20px]'>
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

       <footer class="bg-white rounded-lg ">

        <hr class=" border-gray-200 sm:mx-auto" />
        <span class="block p-6 text-sm text-gray-400 sm:text-center dark:text-gray-400">© 2024 SC</span>

      </footer>
    </div>
  )
}

