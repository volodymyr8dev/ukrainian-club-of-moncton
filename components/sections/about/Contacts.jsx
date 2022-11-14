import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'

import { ContactForm } from '../../utils/ContactForm'


import BlueEmailIcon from './../../../assets/images/contacts/blue-email.webp'
import WhiteEmailIcon from './../../../assets/images/contacts/white-email.webp'
import FacebookIcon from './../../../assets/images/post/facebook.svg'
import FacebookActiveIcon from './../../../assets/images/post/facebook-active.svg'

import { getTexts } from './../../../services/getTexts.js'

export const Contacts = () => {
  const { locale } = useRouter()
  const { data, loading, error } = getTexts(locale)
  console.log("data", data);
  
  const [facebookActive, setFacebookActive] = useState(false)
  const [locationActive, setLocationActive] = useState(false)
  const [emailActive, setEmailActive] = useState(false)

  if (loading) return <span></span>
  if (error) return <span></span>

  const toggleFacebookStyle = () => {
    setFacebookActive(!facebookActive)
  }

  const toggleEmailStyle = () => {
    setEmailActive(!emailActive)
  }

  return (
    <section className='flex justify-center w-full mb-[72px] md:mb-24 px-6'>
      <div className='flex justify-between flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova400 text-[40px] leading-[100%]
        tracking-wider uppercase text-center'>
          {data[2].textContent}
        </h2>
        <div className='flex gap-10 justify-between w-full pt-11 mb-[72px] md:mb-10
        flex-col lg:flex-row'>
          <div className={`shadow-[0px_2px_32px_rgba(0,32,73,0.13)] rounded-3xl 
          flex items-center justify-center w-full gap-2 py-[9px] cursor-pointer
          transition-all
          ${ facebookActive ? 'bg-blue-500' : 'bg-gray-100' }`}
          onClick={ toggleFacebookStyle }
          >
            <Image
              src={ facebookActive ? FacebookActiveIcon : FacebookIcon }
              alt='facebook'
            />
            <a href={data[92].textContent}>
              <span className={`font-proximaNova500 text-base md:text-lg leading-[150%]
              max-w-[205px] 
              ${ facebookActive ? 'text-gray-100' : 'text-blue-500'}`}>
                {data[92].textContent}
              </span>
            </a>
          </div>
          <div className={`shadow-[0px_2px_32px_rgba(0,32,73,0.13)] rounded-3xl 
          flex items-center justify-center w-full gap-9 py-[25px] cursor-pointer
          transition-all
          ${ emailActive ? 'bg-blue-500' : 'bg-gray-100' }`}
          onClick={ toggleEmailStyle }
          >
            <Image
              src={ emailActive ? WhiteEmailIcon : BlueEmailIcon }
              alt='email'
              width={32}
              height={25.6}
            />
            <a href={`mailto:${ data[5].textContent }`}>
              <span className={`font-proximaNova500 text-base md:text-lg leading-[150%]
              max-w-[205px] inline-block
              ${ emailActive ? 'text-gray-100' : 'text-blue-500'}`}>
            
                {data[5].textContent}
              </span>
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}