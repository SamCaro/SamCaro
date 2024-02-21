// import perfil from '../assets/img/perfil.png';
import linkedin from '../assets/img/linkedin.png'
import github from '../assets/img/github.png'
import cv from '../assets/img/cv.png'
import { Header } from './Header';


export const Home = () => {
  return (
    <>
      <Header />

      <section className='h-screen p-3 pt-20 sm:mt-[-150px]'>
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

      <footer className="bg-DarkGrayisBlue opacity-30 text-[12px] text-white p-1">
        <div className="container mx-auto text-center">
          <p>SANDRA CARO &copy; 2024</p>
        </div>
      </footer>

    </>
  );
};


