import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import { DonateButton } from '../utils/DonateButton'
import { LanguageSwitch } from '../utils/LanguageSwitch'
import { ThankYouModal } from '../utils/ThankYouModal'
import { MobileMenu } from '../utils/MobileMenu'

import OpenIcon from './../../assets/images/mobile-menu/open.svg'
import CloseIcon from './../../assets/images/mobile-menu/close.svg'

import HomeBlackIcon from './../../assets/images/mobile-menu/home-black.svg'
import EventsBlackIcon from './../../assets/images/mobile-menu/events-black.svg'
import InfoBlackIcon from './../../assets/images/mobile-menu/info-black.svg'
import AboutBlackIcon from './../../assets/images/mobile-menu/about-black.svg'

import HomeWhiteIcon from './../../assets/images/mobile-menu/home-white.svg'
import EventsWhiteIcon from './../../assets/images/mobile-menu/events-white.svg'
import InfoWhiteIcon from './../../assets/images/mobile-menu/info-white.svg'
import AboutWhiteIcon from './../../assets/images/mobile-menu/about-white.svg'

export const Header = () => {
  const router = useRouter()

  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => {
    setIsActive(!isActive)
    document.body.classList.toggle('lock-scroll')
    document.documentElement.classList.toggle('lock-scroll')
  }

  return (
    <>
    <header
      className='relative flex justify-center h-[72px] md:h-full
      shadow-[0px_4px_4px_rgba(0,0,0,0.06)]'
    >
      <nav
        className={`flex justify-between items-center max-w-[1216px] w-full px-6
        xl:px-0`}
      >
        <div className={`mobile-menu-bg bg-gray-100 md:flex ${ isActive ? 'flex fixed max-w-[236px] w-full h-full top-0 -mx-7 justify-center z-10' : 'hidden' }`}>
          <ul className='flex items-center gap-4 md:gap-16 flex-col md:flex-row
          translate-y-[200px] md:translate-y-0 bg-none md:bg-gray-100 h-screen md:h-full
          w-screen md:w-full pt-8 md:pt-0 -mt-[130px] md:mt-0 px-2 md:px-0'>
            <li className='block md:hidden pb-11 md:pb-0'>
              <div
                className='cursor-pointer font-proximaNova300 border-solid
                border-blue-500 border-[1px] text-base py-[12px] px-[15px]
                rounded-[50px] uppercase'>
                <span className='text-blue-500'>
                  Volunteer with us
                </span>
              </div>
            </li>
            <li className={`py-6 font-proximaNova300 md:font-proximaNova500
            text-base md:text-xl text-center md:border-b-2 w-full md:w-auto px-7 md:px-0
            ${ router.pathname == '/' ? 'md:text-blue-500 md:border-blue-500 bg-blue-500 md:bg-gray-100 rounded-lg md:rounded-none px-4 md:px-0' : '' }`}>
              <Link href='/'>
                <div className='flex md:block items-center justify-start gap-4
                md-gap-0'>
                  <div className='flex md:hidden items-center'>
                    <Image
                      src={ router.pathname == '/' ? HomeWhiteIcon : HomeBlackIcon }
                      width={ 18.2 }
                      height={ 20 }
                    />
                  </div>
                  <a className={`${ router.pathname == '/' ? 'text-gray-100 md:text-blue-500' : '' } cursor-pointer`}>
                    Home
                  </a>
                </div>
              </Link>
            </li>

            <li className={`py-6 font-proximaNova300 md:font-proximaNova500
            text-base md:text-xl text-center md:border-b-2 w-full md:w-auto px-7 md:px-0
            ${ router.pathname == '/info' ? 'md:text-blue-500 md:border-blue-500 bg-blue-500 md:bg-gray-100 rounded-lg md:rounded-none px-4 md:px-0' : '' }`}>
              <Link href='/info'>
                <div className='flex md:block items-center justify-start gap-4
                md-gap-0'>
                  <div className='flex md:hidden items-center'>
                    <Image
                      src={ router.pathname == '/info' ? InfoWhiteIcon : InfoBlackIcon }
                      width={ 20 }
                      height={ 20 }
                    />
                  </div>
                  <a className={`${ router.pathname == '/info' ? 'text-gray-100 md:text-blue-500' : '' } cursor-pointer`}>
                    Info
                  </a>
                </div>
              </Link>
            </li>

            <li className={`py-6 font-proximaNova300 md:font-proximaNova500
            text-base md:text-xl text-center md:border-b-2 w-full md:w-auto px-7 md:px-0
            ${ router.pathname == '/events' ? 'md:text-blue-500 md:border-blue-500 bg-blue-500 md:bg-gray-100 rounded-lg md:rounded-none px-4 md:px-0' : '' }`}>
              <Link href='/events'>
                <div className='flex md:block items-center justify-start gap-4
                md-gap-0'>
                  <div className='flex md:hidden items-center'>
                    <Image
                      src={ router.pathname == '/events' ? EventsWhiteIcon : EventsBlackIcon }
                      width={ 20 }
                      height={ 20 }
                    />
                  </div>
                  <a className={`${ router.pathname == '/events' ? 'text-gray-100 md:text-blue-500' : '' } cursor-pointer`}>
                    Events
                  </a>
                </div>
              </Link>
            </li>

            <li className={`py-6 font-proximaNova300 md:font-proximaNova500
            text-base md:text-xl text-center md:border-b-2 w-full md:w-auto px-7 md:px-0
            ${ router.pathname == '/about' ? 'md:text-blue-500 md:border-blue-500 bg-blue-500 md:bg-gray-100 rounded-lg md:rounded-none px-4 md:px-0' : '' }`}>
              <Link href='/about'>
                <div className='flex md:block items-center justify-start gap-4
                md-gap-0'>
                  <div className='flex md:hidden items-center'>
                    <Image
                      src={ router.pathname == '/about' ? AboutWhiteIcon : AboutBlackIcon }
                      width={ 20 }
                      height={ 20 }
                    />
                  </div>
                  <a className={`${ router.pathname == '/about' ? 'text-gray-100 md:text-blue-500' : '' } cursor-pointer`}>
                    About
                  </a>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className='flex md:hidden z-20'>
          <button
            className='flex items-center'
            onClick={ toggleMenu }
            aria-label='toggle menu'
          >
            <Image
              src={ isActive ? CloseIcon : OpenIcon }
              width={ 16 }
              height={ 16 }
            />
          </button>
        </div>

        <div>
          <ul className='flex items-center gap-0 small-phones:gap-8'>
            <div className='hidden'>
              <ThankYouModal />
            </div>
            
            <LanguageSwitch />
            <DonateButton />
          </ul>
        </div>
      </nav>
    </header>

    {
    isActive && 
      <MobileMenu
        setIsActive={setIsActive}
      />
    }
    </>
  )
}