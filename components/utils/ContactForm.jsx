import React, { useState, useRef } from 'react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'
import useTranslation from 'next-translate/useTranslation'

import ProfileIcon from './../../assets/images/form/profile.svg'
import EmailIcon from './../../assets/images/form/email.svg'
import PhoneIcon from './../../assets/images/form/phone.svg'
import SendIcon from './../../assets/images/form/send.svg'

export const ContactForm = () => {
  const form = useRef()

  const [showThankYou, setShowThankYou] = useState(false)
  const [showError, setShowError] = useState(false)

  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_EMAIL_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  function sendEmail(e) {
    e.preventDefault()

    emailjs
    .sendForm(
      serviceID,
      templateID,
      form.current,
      publicKey
    )
    .then(
      (result) => {
        console.log(result.text)
        setShowThankYou(true)
      },
      (error) => {
        console.log(error.text)
        setShowError(true)
      }
    )

    e.target.reset() 
  }

  let { t } = useTranslation()

  return (
    <>
    <div className='flex tablets:hidden pb-8 justify-center'>
      <h2 className='font-proximaNova400 uppercase text-[32px]
      text-center tracking-wider'>
        Let&apos;s talk
      </h2>
    </div>

    <div className='shadow-none tablets:shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
    w-full h-full rounded-3xl px-0 tablets:p-16 tablets:pb-10'>

      <form
        ref={ form }
        onSubmit={ sendEmail }
      >
        <div className='flex justify-between gap-0 tablets:gap-16 pb-10 w-full flex-col
        tablets:flex-row'>
          <div className='w-full tablets:w-[41.45%] h-full'>
            <div className='flex flex-col pb-6 tablets:pb-8'>
              <label
                className='font-proximaNova400 text-sm pb-4'
                htmlFor='name'
              >
                Name
              </label>
              <div className='bg-gray-200 px-4 flex items-center gap-8
              rounded-2xl'>
                <Image
                  src={ ProfileIcon }
                />
                <input
                  className='text-base tablets:text-lg font-proximaNova300 text-gray-500
                  bg-gray-200 py-3 tablets:py-[19px] w-full'
                  name='name'
                  id='name'
                  type='name'
                  placeholder='John Doe'
                  required
                />
              </div>
            </div>

            <div className='flex flex-col pb-6 tablets:pb-8'>
              <label
                className='font-proximaNova400 text-sm pb-4'
                htmlFor='email'
              >
                Email
              </label>
              <div className='bg-gray-200 px-4 flex items-center gap-8
              rounded-2xl'>
                <Image
                  src={ EmailIcon }
                />
                <input
                  className='text-base tablets:text-lg font-proximaNova300 text-gray-500
                  bg-gray-200 w-full py-3 tablets:py-[19px]'
                  name='email'
                  id='email'
                  type='email'
                  placeholder='JohnDoe@gmail.com'
                  required
                />
              </div>
            </div>

            <div className='flex flex-col'>
              <label
                className='font-proximaNova400 text-sm pb-4'
                htmlFor='phone'
              >
                Phone
              </label>
              <div className='bg-gray-200 px-4 flex items-center gap-10
              rounded-2xl'>
                <Image
                  src={ PhoneIcon }
                />
                <input
                  className='text-base tablets:text-lg font-proximaNova300 text-gray-500
                  bg-gray-200 w-full py-3 tablets:py-[19px]'
                  name='phone'
                  id='phone'
                  type='phone'
                  placeholder='+1 772 1'
                />
              </div>
            </div>
          </div>

          <div className='w-full tablets:w-[58.55%] pt-6 tablets:pt-0'>
            <label
              className='font-proximaNova400 text-sm'
              htmlFor='message'
            >
              Message
            </label>
              <textarea
                className='bg-gray-200 px-6 py-3 tablets:py-6 flex items-center gap-10
                rounded-2xl resize-none w-full h-32 tablets:h-[90%] mt-[15px] text-base
                tablets:text-lg'
                name='message'
                id='message'
                placeholder='Feed animals and enjoy life.'
                minLength={ 20 }
                required       
              >
              </textarea>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <button
            className='bg-blue-500 text-gray-100 py-[15px] px-8 rounded-[50px]
            flex items-center gap-[18px] justify-between'
            type='submit'
          >
            Send message
            <Image
              src={ SendIcon }
            />
          </button>
        </div>
      </form>
      <div className='pt-6 flex justify-center w-full'>
        <span className={`${ showThankYou
          ? 'visible text-blue-500'
          : 'invisible' }`}
        >
          Thank you for your message!
        </span>
        <span className={`${ showError
          ? 'inline-block visible text-yellow-500'
          : 'invisible hidden' }`}
        >
          Your message could not be sent, service unavailable.
        </span>
      </div>
    </div>
    </>
  )
}