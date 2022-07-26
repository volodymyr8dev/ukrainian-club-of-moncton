import Image from 'next/image'

import { ContactForm } from '../../utils/ContactForm'
import useTranslation from 'next-translate/useTranslation'

import BluePhoneIcon from './../../../assets/images/blue-phone.svg'
import WhiteLocationIcon from './../../../assets/images/white-location.svg'
import BlueEmailIcon from './../../../assets/images/blue-email.svg'

export const Contacts = () => {
  let { t } = useTranslation()

  return (
    <section className='flex justify-center mb-[72px] md:mb-24 pl-6 xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova400 text-[40px] leading-[100%]
        tracking-wider uppercase text-left md:text-center'>
          Our contacts
        </h2>
        <div className='flex gap-10 justify-between pt-11 mb-10'>
          <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-white
          rounded-3xl flex items-center justify-center w-full gap-9 py-[25px]
          cursor-pointer'>
            <Image
              src={ BluePhoneIcon }
            />
            <span className='font-proximaNova500 text-lg leading-[150%]
            text-blue-500 max-w-[205px] inline-block'>
              +222-2222-2222
            </span>
          </div>

          <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-blue-500
          rounded-3xl flex align-center justify-center w-full gap-9 py-[25px]
          cursor-pointer'>
            <Image
              src={ WhiteLocationIcon }
            />
            <span className='text-gray-100 font-proximaNova500 text-lg
            leading-[150%] max-w-[205px] inline-block'>
              123 ABC Street, Moncton NB, E1D2D
            </span>
          </div>

          <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-white
          rounded-3xl flex items-center justify-center w-full gap-9 py-[25px]
          cursor-pointer'>
            <Image
              src={ BlueEmailIcon }
            />
            <span className='font-proximaNova500 text-lg leading-[150%]
            text-blue-500 max-w-[205px] inline-block'>
              info@ukrclubmoncton.ca
            </span>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}