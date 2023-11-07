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
      <article className='bg-zinc-300 h-20 rounded-bl-[50px] sm:rounded-bl-[70px] sm:h-[300px]'>
        <h1 className=' text-[30px] sm:text-[40px] text-Roboto ml-[140px] sm:ml-[230px] '>CONTACT</h1>

        {/* <AnimationLogo /> */}

        <form ref={refForm} onSubmit={handleSubmit(onSubmit)} className='bg-white h-[400px] sm:h-[300px] w-[210px] p-4 ml-[100px] text-Roboto shadow-md rounded-sm sm:w-[500px] sm:h-[700px] sm:pt-20 sm:ml-[600px] sm:mt-[-200px]'>
          <div className='flex flex-col shadow-md mb-10 text-[12px] sm:mb-12'>
            <input name='username' id='username' type='text' className='sm:h-12 sm:text-[16px]' {...register('name', {
              required: true,
              maxLength: 10,
            })}

              placeholder='NAME'
              style={{
                color: '#B0B0B0',
                fontSize: '0.8rem',
                margin: '4px',
              }} />
            {errors.name?.type === 'required' && <p className='text-black'>Name is required</p>}
            {errors.name?.type === 'maxLength' && <p className='text-black'>Name must be less than 10 characters</p>}
          </div>
          <div className='flex flex-col shadow-md mb-10 text-[12px] sm:mb-12 '>
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
            {errors.useremail?.type === 'pattern' && <p>Please enter a valid Email</p>}
          </div>
          <div className='flex flex-col shadow-md mb-10 text-[12px] sm:mb-12'>
            <input name="message" className='sm:h-12 sm:text-[16px]' type='text' {...register('message', {
              required: true
            })}
              placeholder='MESSAGE'
              style={{
                color: '#B0B0B0',
                fontSize: '0.8rem',
                margin: '4px',
              }} />
            {errors.message?.type === 'required' && <p className='text-black'>Enter a message</p>}
          </div>

          <input name='send' className='text-[12px] bg-zinc-300 w-[180px] h-6 rounded-sm sm:mb-12 sm:h-12 sm:w-[400px] hover:text-white hover:shadow-md cursor-pointer' type='submit' value='SEND' />
          {sendConfirmation && <p className='text-[12px]'>Thank You {name}!</p>}
          <p className='mt-12 text-[10px] text-center sm:text-[14px]'>
            You can also write to my email
            <a
              className='text-DarkGrayisBlue hover:underline'
              href='mailto:slcaroquiroga@gmail.com'
            >
              slcaroquiroga@gmail.com
            </a>
          </p>

          <div className='flex items-center justify-center space-x-5 relative mt-8 '>
            <a href='https://www.linkedin.com/in/sandracaroquiroga/' target='_blank' rel="noreferrer">
              <img className='w-8 rounded-f hover:border-2 hover:border-white hover:rounded-full ' src={linkedin} alt='Logo Linkedin' />
            </a>

            <a href='https://github.com/SamCaro' target='_blank' rel="noreferrer">
              <img className='w-8 hover:border-2 hover:border-white hover:rounded-full' src={github} alt='Logo Github' />
            </a>
          </div>
        </form>
      </article></>
  )
}

