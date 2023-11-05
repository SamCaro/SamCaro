import perfil from '../assets/img/perfil.png';
import linkedin from '../assets/img/linkedin.png'
import github from '../assets/img/github.png'
import cv from '../assets/img/cv.png'
import { Header } from './Header';


export const Home = () => {
  return (
    <>
    <Header />
    <section className='h-screen p-3 bg-zinc-300 pt-20 sm:mt-[-150px]'>
      <div className='sm:flex  sm:justify-evenly'>
        <div className='bg-zinc-300 sm:text-[40px] black  flex flex-col justify-center items-center'>
          <h1 className="text-5xl font-bold text-black">Hi! I'm SANDRA CARO</h1>
          <p className="text-4xl font-normal text-black">Frontend Developer</p>
        </div>
        <img
          alt='Developer'
          src={perfil}
          className='bg-zinc-300 ml-20 w-[200px]  sm:w-1/4  sm:h-auto rounded-full' />
      </div>

      <div className='flex items-center justify-center space-x-10 relative mt-6'>
        <a href='https://www.linkedin.com/in/sandracaroquiroga/' target='_blank' rel="noreferrer">
          <img className='w-10 rounded-f hover:border-2 hover:border-white hover:rounded-full' src={linkedin} alt='Logo Linkedin' />
        </a>

        <a href='https://github.com/SamCaro' target='_blank' rel="noreferrer">
          <img className='w-10 hover:border-2 hover:border-white hover:rounded-full' src={github} alt='Logo Github' />
        </a>

        <a href='https://drive.google.com/file/d/1TCYVth1oa_hqi_WbHB0oj6GWNsLv9R56/view?usp=sharing' target='_blank' rel="noreferrer">
          <img className='w-10 hover:border-2 hover:border-military hover:rounded-full' src={cv} alt='Logo CV' />
        </a>
      </div>
    </section>
    {/* <footer className="bg-DarkGrayisBlue text-white p-1.5">
  <div className="container mx-auto text-center">
    <p>&copy; 2023  S.C</p>
  </div>
</footer> */}

    </>
  );
};


