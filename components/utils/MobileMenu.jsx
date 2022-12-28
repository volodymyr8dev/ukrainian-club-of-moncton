import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import { DonateButton } from '../utils/DonateButton'
import { LanguageSwitch } from '../utils/LanguageSwitch'

import CloseIcon from './../../assets/images/mobile-menu/close.webp'

import HomeBlackIcon from './../../assets/images/mobile-menu/home-black.webp'
import EventsBlackIcon from './../../assets/images/mobile-menu/events-black.webp'
import InfoBlackIcon from './../../assets/images/mobile-menu/info-black.webp'
import AboutBlackIcon from './../../assets/images/mobile-menu/about-black.webp'
import HelpBlackIcon from './../../assets/images/mobile-menu/help-black.webp'

import HomeWhiteIcon from './../../assets/images/mobile-menu/home-white.webp'
import EventsWhiteIcon from './../../assets/images/mobile-menu/events-white.webp'
import InfoWhiteIcon from './../../assets/images/mobile-menu/info-white.webp'
import AboutWhiteIcon from './../../assets/images/mobile-menu/about-white.webp'
import HelpWhiteIcon from './../../assets/images/mobile-menu/help-white.webp'

export const MobileMenu = ({ setIsActive }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  
  const handleClose = () => {
    setIsActive(false)
  }

  return (
    <>
    <div
      onClick={ handleClose }
      className='opacity-60 bg-white-opacity h-screen w-full fixed top-0
      bottom-0 m-auto z-10'
    >
      <header
        className='separate-mobile-menu relative flex justify-center h-[72px]
        md:h-full shadow-[0px_4px_4px_rgba(0,0,0,0.06)] -mt-[72px] bg-gray-100
        z-40'
      >
        <nav
          className={`flex justify-between items-center max-w-[1216px] w-full px-6
          xl:px-0 bg-white-opacity`}
        >
          <div className={`mobile-menu-bg bg-gray-100 md:flex flex fixed
          max-w-[236px] w-full h-full top-0 -mx-7 justify-center z-10`}>
            <ul className='flex items-center gap-4 md:gap-16 flex-col md:flex-row
            translate-y-[200px] md:translate-y-0 bg-none md:bg-gray-100 h-screen
            md:h-full w-screen md:w-full pt-8 md:pt-0 -mt-[130px] md:mt-0 px-2
            md:px-0'>
              <li className='block md:hidden pb-11 md:pb-0'>
                <div
                  className='cursor-pointer font-proximaNova300 border-solid
                  border-blue-500 border-[1px] text-base py-[12px] px-[15px]
                  rounded-[50px] uppercase'>
                  <Link
                    href='/how'
                  >
                    <span className='text-blue-500'>
                      { t('volunteer-with') }
                    </span>
                  </Link>
                </div>
              </li>

              <li className={`py-6 font-proximaNova300 md:font-proximaNova500
              text-base md:text-xl text-center md:border-b-2 w-full md:w-auto
              px-7 md:px-0
              ${ router.pathname == '/' ? 'md:text-blue-500 md:border-blue-500 bg-blue-500 md:bg-gray-100 rounded-lg md:rounded-none px-4 md:px-0' : '' }`}>
                <Link href='/'>
                  <div className='flex md:block items-center justify-start gap-4
                  md-gap-0'>
                    <div className='flex md:hidden items-center'>
                      <Image
                        src={ router.pathname == '/' ? HomeWhiteIcon : HomeBlackIcon }
                        alt='home'
                        width={ 18.2 }
                        height={ 20 }
                      />
                    </div>
                    <a className={`${ router.pathname == '/' ? 'text-gray-100 md:text-blue-500' : '' } cursor-pointer`}>
                      { t('home') }
                    </a>
                  </div>
                </Link>
              </li>

              <li className={`py-6 font-proximaNova300 md:font-proximaNova500
              text-base md:text-xl text-center md:border-b-2 w-full md:w-auto
              px-7 md:px-0
              ${ router.pathname == '/info/[page]' ? 'md:text-blue-500 md:border-blue-500 bg-blue-500 md:bg-gray-100 rounded-lg md:rounded-none px-4 md:px-0' : '' }`}>
                <Link href='/info/1'>
                  <div className='flex md:block items-center justify-start gap-4
                  md-gap-0'>
                    <div className='flex md:hidden items-center'>
                      <Image
                        src={ router.pathname == '/info/[page]' ? InfoWhiteIcon : InfoBlackIcon }
                        alt='info'
                        width={ 20 }
                        height={ 20 }
                      />
                    </div>
                    <a className={`${ router.pathname == '/info/[page]' ? 'text-gray-100 md:text-blue-500' : '' } cursor-pointer`}>
                      { t('info') }
                    </a>
                  </div>
                </Link>
              </li>

              <li className={`py-6 font-proximaNova300 md:font-proximaNova500
              text-base md:text-xl text-center md:border-b-2 w-full md:w-auto
              px-7 md:px-0
              ${ router.pathname == '/events/[page]' ? 'md:text-blue-500 md:border-blue-500 bg-blue-500 md:bg-gray-100 rounded-lg md:rounded-none px-4 md:px-0' : '' }`}>
                <Link href='/events/1'>
                  <div className='flex md:block items-center justify-start gap-4
                  md-gap-0'>
                    <div className='flex md:hidden items-center'>
                      <Image
                        src={ router.pathname == '/events/[page]' ? EventsWhiteIcon : EventsBlackIcon }
                        alt='events'
                        width={ 20 }
                        height={ 20 }
                      />
                    </div>
                    <a className={`${ router.pathname == '/events/[page]' ? 'text-gray-100 md:text-blue-500' : '' } cursor-pointer`}>
                      { t('events') }
                    </a>
                  </div>
                </Link>
              </li>

              <li className={`py-6 font-proximaNova300 md:font-proximaNova500
              text-base md:text-xl text-center md:border-b-2 w-full md:w-auto
              px-7 md:px-0
              ${ router.pathname == '/our-help/[page]' ? 'md:text-blue-500 md:border-blue-500 bg-blue-500 md:bg-gray-100 rounded-lg md:rounded-none px-4 md:px-0' : '' }`}>
                <Link href='/our-help/1'>
                  <div className='flex md:block items-center justify-start gap-4
                  md-gap-0'>
                    <div className='flex md:hidden items-center'>
                      <Image
                        src={ router.pathname === '/our-help/[page]' ? HelpWhiteIcon : HelpBlackIcon }
                        alt='our help'
                        width={ 20 }
                        height={ 20 }
                      />
                    </div>
                    <a className={`${ router.pathname == '/our-help/[page]' ? 'text-gray-100 md:text-blue-500' : '' } cursor-pointer capitalize`}>
                      { t('our-help') }
                    </a>
                  </div>
                </Link>
              </li>

              <li className={`py-6 font-proximaNova300 md:font-proximaNova500
              text-base md:text-xl text-center md:border-b-2 w-full md:w-auto px-7
              md:px-0
              ${ router.pathname == '/about' ? 'md:text-blue-500 md:border-blue-500 bg-blue-500 md:bg-gray-100 rounded-lg md:rounded-none px-4 md:px-0' : '' }`}>
                <Link href='/about'>
                  <div className='flex md:block items-center justify-start gap-4
                  md-gap-0'>
                    <div className='flex md:hidden items-center'>
                      <Image
                        src={ router.pathname == '/about' ? AboutWhiteIcon : AboutBlackIcon }
                        alt='about'
                        width={ 20 }
                        height={ 20 }
                      />
                    </div>
                    <a className={`${ router.pathname == '/about' ? 'text-gray-100 md:text-blue-500' : '' } cursor-pointer`}>
                      { t('about') }
                    </a>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div className='flex md:hidden z-20'>
            <button
              className='flex items-center'
              onClick={ handleClose }
              aria-label='toggle menu'
            >
              <Image
                src={ CloseIcon }
                alt='close'
                width={ 16 }
                height={ 16 }
              />
            </button>
          </div>

          <div className={``}>
            <ul className='flex items-center gap-0 small-phones:gap-8'>
              <LanguageSwitch />
              <DonateButton />
            </ul>
          </div>
        </nav>
      </header>
    </div>
    </>
  )
}