import { Header } from "./Header";
import linkedin from '../assets/img/linkedin.png'
import github from '../assets/img/github.png'


export const ContactForm = () => {
  return (
    <div className='bg-gray-100'>
      <Header/>
      <article className='sm:ml-96 h-20 sm:h-[300px]'>
        <h1 className='text-xl font-bold sm:text-4xl  ml-[220px] sm:ml-[250px]   hover:text-GrayishBlue transition-transform duration-300 hover:scale-125'>CONTACTO</h1>
        <p className='mt-8  text-center text-xl sm:mr-[600px]'>
          Email:{' '}
          <a
            className='text-DarkGrayisBlue hover:underline'
            href='mailto:slcaroquiroga@gmail.com'
          >
            slcaroquiroga@gmail.com
          </a>
        </p>
        <div className='flex items-center justify-center space-x-5 relative mt-8 sm:mr-[650px] '>
          <a href='https://www.linkedin.com/in/sandracaroquiroga/' target='_blank' rel="noreferrer">
            <img className='w-10 sm:w-14 rounded-f hover:border-4 hover:border-white hover:rounded-full ' src={linkedin} alt='Logo Linkedin' />
          </a>

          <a href='https://github.com/SamCaro' target='_blank' rel="noreferrer">
            <img className='w-10 sm:w-14  hover:border-4 hover:border-white
          hover:rounded-full' src={github} alt='Logo Github' />
          </a>
        </div>
      </article>
    </div>
  )
}
