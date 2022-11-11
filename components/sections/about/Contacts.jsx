import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'

import { ContactForm } from '../../utils/ContactForm'

import BluePhoneIcon from './../../../assets/images/contacts/blue-phone.webp'
import BlueLocationIcon from './../../../assets/images/contacts/blue-location.webp' //
import BlueEmailIcon from './../../../assets/images/contacts/blue-email.webp'      //
import WhitePhoneIcon from './../../../assets/images/contacts/white-phone.webp'
import WhiteLocationIcon from './../../../assets/images/contacts/white-location.webp'
import WhiteEmailIcon from './../../../assets/images/contacts/white-email.webp'

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
              src={ phoneActive ? WhitePhoneIcon : BluePhoneIcon }
              alt='phone'
              width={21.33}
              height={32}
            />
            <a href={`tel:${ data[7].textContent }`}>
              <span className={`font-proximaNova500 text-base md:text-lg leading-[150%]
              max-w-[205px] inline-block
              ${ phoneActive ? 'text-gray-100' : 'text-blue-500'}`}>
                {data[3].textContent}
              </span>
            </a>
          </div>

          <div className={`shadow-[0px_2px_32px_rgba(0,32,73,0.13)] rounded-3xl 
          flex items-center justify-center w-full gap-9 py-[25px] cursor-pointer
          transition-all
          ${ locationActive ? 'bg-blue-500' : 'bg-gray-100' }`}
          onClick={ toggleLocationStyle }
          >
            <Image
              src={ locationActive ? WhiteLocationIcon : BlueLocationIcon }
              alt='location'
              width={25.14}
              height={32}
            />
            <a href={ data[6].textContent }>
              <span className={`font-proximaNova500 text-base md:text-lg leading-[150%]
              max-w-[205px] inline-block
              ${ locationActive ? 'text-gray-100' : 'text-blue-500'}`}>
                {data[4].textContent}
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