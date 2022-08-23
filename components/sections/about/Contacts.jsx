import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'

import { ContactForm } from '../../utils/ContactForm'

import BluePhoneIcon from './../../../assets/images/contacts/blue-phone.svg'
import BlueLocationIcon from './../../../assets/images/contacts/blue-location.svg'
import BlueEmailIcon from './../../../assets/images/contacts/blue-email.svg'
import WhitePhoneIcon from './../../../assets/images/contacts/white-phone.svg'
import WhiteLocationIcon from './../../../assets/images/contacts/white-location.svg'
import WhiteEmailIcon from './../../../assets/images/contacts/white-email.svg'

import { getTexts } from './../../../services/getTexts.js'

export const Contacts = () => {
  const { locale } = useRouter()
  const { data, loading, error } = getTexts()
  
  const [phoneActive, setPhoneActive] = useState(false)
  const [locationActive, setLocationActive] = useState(false)
  const [emailActive, setEmailActive] = useState(false)

  if (loading) return <span></span>
  if (error) return <span></span>

  const togglePhoneStyle = () => {
    setPhoneActive(!phoneActive)
  }

  const toggleLocationStyle = () => {
    setLocationActive(!locationActive)
  }

  const toggleEmailStyle = () => {
    setEmailActive(!emailActive)
  }

  return (
    <section className='flex justify-center w-full mb-[72px] md:mb-24 px-6'>
      <div className='flex justify-between flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova400 text-[40px] leading-[100%]
        tracking-wider uppercase text-center'>
          {
            locale === 'en'
            ? data.englishTexts[2].textContent
            : data.ukrainianTexts[2].textContent
          }
        </h2>
        <div className='flex gap-10 justify-between w-full pt-11 mb-[72px] md:mb-10
        flex-col tablets:flex-row'>
          <div className={`shadow-[0px_2px_32px_rgba(0,32,73,0.13)] rounded-3xl 
          flex items-center justify-center w-full gap-9 py-[25px] cursor-pointer
          transition-all
          ${ phoneActive ? 'bg-blue-500' : 'bg-gray-100' }`}
          onClick={ togglePhoneStyle }
          >
            <Image
              src={ phoneActive ? WhitePhoneIcon : BluePhoneIcon }
              alt='phone'
            />
            <a href={`tel:${ data.englishTexts[7].textContent }`}>
              <span className={`font-proximaNova500 text-base md:text-lg leading-[150%]
              max-w-[205px] inline-block
              ${ phoneActive ? 'text-gray-100' : 'text-blue-500'}`}>
                {
                  locale === 'en'
                  ? data.englishTexts[3].textContent
                  : data.ukrainianTexts[3].textContent
                }
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
            />
            <a href={ data.englishTexts[6].textContent }>
              <span className={`font-proximaNova500 text-base md:text-lg leading-[150%]
              max-w-[205px] inline-block
              ${ locationActive ? 'text-gray-100' : 'text-blue-500'}`}>
                {
                  locale === 'en'
                  ? data.englishTexts[4].textContent
                  : data.ukrainianTexts[4].textContent
                }
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
            />
            <a href={`mailto:${ data.englishTexts[5].textContent }`}>
              <span className={`font-proximaNova500 text-base md:text-lg leading-[150%]
              max-w-[205px] inline-block
              ${ emailActive ? 'text-gray-100' : 'text-blue-500'}`}>
                {
                  locale === 'en'
                  ? data.englishTexts[5].textContent
                  : data.ukrainianTexts[5].textContent
                }
              </span>
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}