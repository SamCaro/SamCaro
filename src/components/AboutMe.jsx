import { Header } from "./Header";

import React from 'react'

export const AboutMe = () => {
  return (
    <>
       <Header />
      <div className="flex ml-[120px] p-4 sm:ml-[400px] transition-transform duration-500 hover:scale-125 hover:text-GrayishBlue">
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

        <div className=" text-[20px]  text-Roboto flex flex-col space-x-1 transform rotate-180 font-bold perspective-1 hover:scale-75 hover:text-zinc-300 transition-transform duration-1000 ease-in-out">
          <span className="transform rotate-90">S</span>
          <span className="transform rotate-90">K</span>
          <span className="transform rotate-90">I</span>
          <span className="transform rotate-90">L</span>
          <span className="transform rotate-90">L</span>
          <span className="transform rotate-90">S</span>
        </div>

        <div className='flex flex-col text-Roboto text-[16px] sm:text-[20px]'>
          <p>Attention to detail</p>
          <p>Continuous</p>
          <p>learning</p>
          <p>Resilience</p>
          <p>Collaborative</p>
          <p>work</p>

        </div>
      </div>
      <div className="sm:ml-[850px] sm:mt-[-900px] sm:h-[600px] sm:w-[250px] bg-black  w-full h-[350px] p-10   sm:rounded-lg text-white
      ">        
        <p className=" text-Roboto">
        Hi my name is {' '}
        <span className="font-bold text-[18px] text-GrayishBlue hover:text-white">
        SANDRA CARO
        </span> {' '}
        and use {' '}
        <span className="font-bold text-[18px] text-GrayishBlue hover:text-white ">
        SAMCARO
        </span> {' '}
         as a nickname on social networks. I'm a Frontend Developer from Colombia. I'm passionate about entrepreneurship, creating new useful projects, I'm curious to learn {' '}
        <span className="font-bold text-[18px] text-GrayishBlue hover:text-white ">
           new technologies
           </span> {' '}
           and {' '}
           <span className="font-bold text-[18px] text-GrayishBlue hover:text-white ">
         creative coding 
           </span> 
            . {' '}I Enjoy my life facing challenges and evolving day by day. I love the countryside, swimming and time with my family.
        </p>
      </div>
    </>
  )
}