import { useState } from 'react'
import Image from 'next/image'

import { ContactForm } from '../../utils/ContactForm'
import useTranslation from 'next-translate/useTranslation'

import BluePhoneIcon from './../../../assets/images/contacts/blue-phone.svg'
import BlueLocationIcon from './../../../assets/images/contacts/blue-location.svg'
import BlueEmailIcon from './../../../assets/images/contacts/blue-email.svg'
import WhitePhoneIcon from './../../../assets/images/contacts/white-phone.svg'
import WhiteLocationIcon from './../../../assets/images/contacts/white-location.svg'
import WhiteEmailIcon from './../../../assets/images/contacts/white-email.svg'

export const Contacts = () => {
  let { t } = useTranslation()

  const [phoneActive, setPhoneActive] = useState(false)
  const [locationActive, setLocationActive] = useState(false)
  const [emailActive, setEmailActive] = useState(false)

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
          Our contacts
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
            />
            <span className={`font-proximaNova500 text-base md:text-lg leading-[150%]
            max-w-[205px] inline-block
            ${ phoneActive ? 'text-gray-100' : 'text-blue-500'}`}>
              +222-2222-2222
            </span>
          </div>

          <div className={`shadow-[0px_2px_32px_rgba(0,32,73,0.13)] rounded-3xl 
          flex items-center justify-center w-full gap-9 py-[25px] cursor-pointer
          transition-all
          ${ locationActive ? 'bg-blue-500' : 'bg-gray-100' }`}
          onClick={ toggleLocationStyle }
          >
            <Image
              src={ locationActive ? WhiteLocationIcon : BlueLocationIcon }
            />
            <span className={`font-proximaNova500 text-base md:text-lg leading-[150%]
            max-w-[205px] inline-block
            ${ locationActive ? 'text-gray-100' : 'text-blue-500'}`}>
              123 ABC Street, Moncton NB, E1D2D
            </span>
          </div>

          <div className={`shadow-[0px_2px_32px_rgba(0,32,73,0.13)] rounded-3xl 
          flex items-center justify-center w-full gap-9 py-[25px] cursor-pointer
          transition-all
          ${ emailActive ? 'bg-blue-500' : 'bg-gray-100' }`}
          onClick={ toggleEmailStyle }
          >
            <Image
              src={ emailActive ? WhiteEmailIcon : BlueEmailIcon }
            />
            <span className={`font-proximaNova500 text-base md:text-lg leading-[150%]
            max-w-[205px] inline-block
            ${ emailActive ? 'text-gray-100' : 'text-blue-500'}`}>
              info@ukrclubmoncton.ca
            </span>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}