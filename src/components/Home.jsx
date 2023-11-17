import perfil from '../assets/img/perfil.png';
import linkedin from '../assets/img/linkedin.png'
import github from '../assets/img/github.png'
import cv from '../assets/img/cv.png'
import { Header } from './Header';
import { Projects } from '../components/Projects';
import { AboutMe } from '../components/AboutMe'
import { ContactForm } from '../components/ContactForm'


export const Home = () => {
  return (
    <>
      <Header />

      <section className='h-screen p-3 pt-20 sm:mt-[-150px]'>
        <div className='flex flex-col sm:flex  sm:justify-evenly'>
          <div className='bg-white ml-20 sm:ml-40 sm:text-[40px] black  flex flex-col justify-center items-center'>
            <h1 className="text-5xl font-bold text-black transition-transform duration-500 hover:scale-105 hover:text-GrayishBlue">Hola! Soy SANDRA CARO</h1>
            <p className="text-4xl font-normal text-black transition-transform duration-300 hover:scale-125 hover:text-zinc-300">Desarrolladora Web</p>
          </div>
          <img
            alt='Developer'
            src={perfil}
            className='ml-10 opacity-80 w-[200px] sm:w-1/2 sm:ml-[300px] sm:h-auto rounded-full shadow-xl transition-transform duration-1000 hover:scale-105 filter brightness-125' />
        </div>

        <div className='mt-60 mr-8 space-x-10 relative sm:mr-2 sm:mt-40 '>
          <a href='https://www.linkedin.com/in/sandracaroquiroga/' target='_blank' rel="noreferrer">
            <img className='w-10 sm:w-14 rounded-f hover:border-4
          hover:border-white
          hover:rounded-full' src={linkedin} alt='Logo Linkedin' />
          </a>

          <a href='https://github.com/SamCaro' target='_blank' rel="noreferrer">
            <img className='w-10 sm:w-14  hover:border-4 hover:border-white
          hover:rounded-full' src={github} alt='Logo Github' />
          </a>

          <a href='https://drive.google.com/file/d/1TCYVth1oa_hqi_WbHB0oj6GWNsLv9R56/view?usp=sharing' target='_blank' rel="noreferrer">
            <img className='w-10 sm:w-14  hover:border-4
          hover:border-white hover:rounded-full' src={cv} alt='Logo CV' />
          </a>
        </div>
      </section>

      <div className='snap-y snap-mandatory relative w-full h-screen overflow-auto scroll-m-4'>
        <div className='snap-center'>
          <AboutMe />
        </div>
        <div className='snap-center'>
          <Projects />
        </div>
        <div className='snap-center'>
          <ContactForm />
        </div>
      </div>

      <footer className="bg-DarkGrayisBlue opacity-30 text-[12px] text-white p-1">
        <div className="container mx-auto text-center">
          <p>SANDRA CARO &copy; 2023</p>
        </div>
      </footer>

    </>
  );
};


