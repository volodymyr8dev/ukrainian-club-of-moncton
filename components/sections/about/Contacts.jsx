import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'

import { ContactForm } from '../../utils/ContactForm'


import BlueEmailIcon from './../../../assets/images/contacts/email.svg'
import WhiteEmailIcon from './../../../assets/images/contacts/email-active.svg'
import FacebookIcon from './../../../assets/images/contacts/facebook-active.svg'
import FacebookActiveIcon from './../../../assets/images/contacts/facebook.svg'
import InstagramIcon from './../../../assets/images/contacts/instagram.svg'
import InstagramActiveIcon from './../../../assets/images/contacts/instagram-active.svg'

import { getTexts } from './../../../services/getTexts.js'

export const Contacts = () => {
  const { locale } = useRouter()
  const {data:dataFrom100 } = getTexts(locale,100)
  const { data, loading, error } = getTexts(locale,)
console.log("dataFrom100",dataFrom100)
  const [instagramActive, setInstagramActive] = useState(false)
  const [facebookActive, setFacebookActive] = useState(false)
  const [emailActive, setEmailActive] = useState(false)

  if (loading) return <span></span>
  if (error) return <span></span>

  const toggleFacebookStyle = () => {
    setFacebookActive(!facebookActive)
    setInstagramActive(false)
    setEmailActive(false)
  }

  const toggleEmailStyle = () => {
    setEmailActive(!emailActive)
    setInstagramActive(false)
    setFacebookActive(false)
  }
  
  const toggleInstagramStyle = () => {
    setInstagramActive(!instagramActive)
    setFacebookActive(false)
    setEmailActive(false)
  }

  console.log('data["instagram-navigation"]}',data['instagram-navigation-link'])
  return (
    <section className='flex justify-center w-full mb-[72px] md:mb-24 px-6'>
      <div className='flex justify-between flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova400 text-[40px] leading-[100%]
        tracking-wider uppercase text-center'>
          {data['about-our-contacts']}
        </h2>
        <div className='flex gap-5 justify-between w-full pt-11 mb-[72px] md:mb-10
        flex-col lg:flex-row'>
             <a href={instagramActive && dataFrom100["instagram-navigation"]} rel="noreferrer" target="_blank" className={`shadow-[0px_2px_32px_rgba(0,32,73,0.13)] rounded-3xl 
          flex flex-col  items-center justify-center w-full py-[25px] cursor-pointer
          transition-all
          ${ instagramActive ? 'bg-blue-500' : 'bg-gray-100' }`}
          onClick={ toggleInstagramStyle }
          >
            <Image
              src={ instagramActive ? InstagramActiveIcon : InstagramIcon }
              alt='isntagram'
            />
              <span className={`font-proximaNova500 text-base md:text-lg leading-[150%]  mt-[4px]
              ${ instagramActive ? 'text-gray-100' : 'text-blue-500'}`}>
                {data["instagram-description"]}
              </span>
          </a>


          <a href={facebookActive && data["facebook-navigation"]} rel="noreferrer" target="_blank" className={`shadow-[0px_2px_32px_rgba(0,32,73,0.13)] rounded-3xl 
          flex flex-col  items-center justify-center w-full py-[25px] cursor-pointer
          transition-all 
          ${ facebookActive ? 'bg-blue-500' : 'bg-gray-100' }`}
          onClick={ toggleFacebookStyle }
          >
            <Image
              src={ facebookActive ? FacebookActiveIcon : FacebookIcon  }
              alt='facebook'
            />
              <span className={`font-proximaNova500 text-base md:text-lg leading-[150%]  mt-[4px]
              max-w-[205px] inline-block
              ${ facebookActive ? 'text-gray-100' : 'text-blue-500'}`}>
            
                {data["facebook-description"]}
              </span>
          </a>
          <a rel="noreferrer" target="_blank" href={emailActive && `mailto:${ data["about-email-box"] }`} className={`shadow-[0px_2px_32px_rgba(0,32,73,0.13)] rounded-3xl 
          flex flex-col  items-center justify-center w-full py-[25px] cursor-pointer
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
              <span className={`font-proximaNova500 text-base md:text-lg leading-[150%] mt-[4px]
              max-w-[205px] inline-block
              ${ emailActive ? 'text-gray-100' : 'text-blue-500'}`}>
            
                {data["about-email-box"]}
              </span>
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}