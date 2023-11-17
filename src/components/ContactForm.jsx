/* eslint-disable no-restricted-globals */
import { useForm } from 'react-hook-form'
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Header } from "./Header";
// import AnimationLogo from './AnimationLogo'
import linkedin from '../assets/img/linkedin.png'
import github from '../assets/img/github.png'


export const ContactForm = () => {
  const refForm = useRef()
  const { register, formState: { errors }, handleSubmit, reset } = useForm()
  const [sendConfirmation, setSendConfirmation] = useState(false)

  const onSubmit = () => {
    //  const onSubmit = (data) => {
    // console.log(data)


    // const serviceId = 'service_mwbvb1b'
    // const templateId = 'template_mu21r7h'
    // const apiKey = '1za7EVodQy9VBMn1-'

    emailjs.sendForm('service_mwbvb1b', 'template_mu21r7h', refForm.current, '1za7EVodQy9VBMn1-')
      .then((result) => {
        console.log(result.text);
        reset()
        setSendConfirmation(true)
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <Header />
      <article className='h-20 sm:h-[300px]'>
        <h1 className='text-xl font-bold sm:text-4xl  ml-[220px] sm:ml-[250px]   hover:text-GrayishBlue transition-transform duration-300 hover:scale-125'>CONTACTO</h1>

        {/* <AnimationLogo /> */}

        <form ref={refForm} onSubmit={handleSubmit(onSubmit)} className='bg-white mt-2 h-[300px] w-[210px] p-4 ml-[100px] text-Roboto shadow-md rounded-sm border border-gray-300 border-solid sm:w-[500px] sm:h-[600px] sm:pt-20 sm:ml-[600px] sm:mt-[-200px]'>
          <div className='flex flex-col shadow-md border border-solid border-zinc-300 rounded-sm mb-10 text-[12px] sm:mb-12'>
            <input name='username' id='username' type='text' className='sm:h-12 sm:text-[16px]' {...register('name', {
              required: true,
              maxLength: 10,
            })}

              placeholder='NOMBRE'
              style={{
                color: '#B0B0B0',
                fontSize: '0.8rem',
                margin: '4px',
              }} />
            {errors.name?.type === 'required' && <p className='text-black'>Tu nombre es requerido</p>}
            {errors.name?.type === 'maxLength' && <p className='text-black'>Tu nombre debe tener menos de 10 caracteres</p>}
          </div>
          <div className='flex flex-col shadow-md border border-solid border-zinc-300 rounded-sm mb-10 text-[12px] sm:mb-12 '>
            <input name="useremail" id='useremail' className='sm:h-12 sm:text-[16px]' type='text' {...register('useremail', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i // nombre@dominio.com
            })}
              placeholder='EMAIL'
              style={{
                color: '#B0B0B0',
                fontSize: '0.8rem',
                margin: '4px',
              }} />
            {errors.useremail?.type === 'pattern' && <p>Por favor ingresa un Email valido</p>}
          </div>
          <div className='flex flex-col shadow-md border border-solid border-zinc-300 rounded-sm mb-10 text-[12px] sm:mb-12'>
            <textarea name="message" className='h-12 sm:h-24 sm:text-[16px]' type='text' {...register('message', {
              required: true
            })}
              placeholder='MENSAJE'
              style={{
                color: '#B0B0B0',
                fontSize: '0.8rem',
                margin: '4px',
              }} />
            {errors.message?.type === 'required' && <p className='text-black'>Ingresa un mensaje</p>}
          </div>

          <input name='send' className='text-[12px] bg-zinc-300 w-[160px] h-6 rounded-sm border border-gray-300 border-solid sm:mb-12 sm:h-12 sm:w-[400px] sm:ml-[30px] hover:text-white hover:shadow-md cursor-pointer' type='submit' value='SEND' />
          {sendConfirmation && <p className='text-[12px]'>Gracias, Muy pronto me estare comunicando contigo!</p>}       
        </form>
        <p className='mt-8 sm:mt-[-400px] text-[12px] text-center sm:text-[14px] sm:mr-[600px]'>
           Email {' '}
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
      </article></>
  )
}

