import { Header } from "./Header";

import React from 'react'

export const AboutMe = () => {
  return (
    <>
      <Header />
      <div className="flex ml-[10px] p-4 sm:ml-[400px]">
        <p className="text-4xl font-bold">ABOUT</p>
        <p className="text-4xl font-bold ml-2">ME</p>
      </div>

      <div className="flex space-x-3 p-6 justify-between  sm:p-[500px] sm:mt-[-400px] sm:ml-[-300px]">
        <div className='flex flex-col text-Roboto text-[16px] sm:text-[20px]'>
          <p>React</p>
          <p>Javascript</p>
          <p>PostgreSQL</p>
          <p>NodeJS</p>
          <p>Express</p>
          <p>Tailwind</p>
        </div>

        <div className=" text-[20px]  text-Roboto flex flex-col space-x-1 transform rotate-180 font-bold transform perspective-1 hover:scale-75 hover:text-zinc-300 transition-transform duration-1000 ease-in-out">
          <span className="transform rotate-90">S</span>
          <span className="transform rotate-90">K</span>
          <span className="transform rotate-90">I</span>
          <span className="transform rotate-90">L</span>
          <span className="transform rotate-90">L</span>
          <span className="transform rotate-90">S</span>
        </div>

        <div className='flex flex-col text-Roboto text-[16px] sm:text-[20px]'>
          <p>Atención al detalle</p>
          <p>Continuo</p>
          <p>Aprendizaje</p>
          <p>Resilencia</p>
          <p>Trabajo</p>
          <p>Colaborativo</p>

        </div>
      </div>
      <div className="sm:ml-[850px] sm:mt-[-900px] sm:h-[600px] sm:w-[250px] bg-black w-[350px] h-[350px] p-10 ml-3  rounded-lg text-white transition-opacity hover:opacity-80">
        <p className="text-center text-Roboto">
          Hola, mi nombre es <span className="font-bold cursor-pointer hover:text-zinc-300">SANDRA CARO</span> y uso <span className="font-bold cursor-pointer hover:text-zinc-300">SAMCARO</span> como apodo en las redes sociales. Soy Developer Frontend de Colombia. Me apasionan los emprendimientos, crear nuevos proyectos útiles, tengo curiosidad por aprender nuevas tecnologías y codificación creativa. Quiero disfrutar mi vida enfrentando retos y evolucionando día a día. Me encanta estar rodeada de naturaleza, nadar y compartir con mi familia.
        </p>
      </div>
    </>
  )
}