import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import menuIcon from './../../assets/images/menu-icon.svg'
import { DonateButton } from '../utils/DonateButton'
import { LanguageSwitch } from '../utils/LanguageSwitch'

export const Header = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <header
      className='relative flex justify-center h-[72px] md:h-full
      shadow-[0px_4px_4px_rgba(0,0,0,0.06)]'
    >
      <nav
        className='flex justify-between items-center max-w-[1216px] w-full px-6
        xl:px-0'
      >
        <div className={`md:flex ${ isActive ? 'flex bg-gray-100 absolute w-full h-full top-0 -mx-7 justify-center z-10' : 'hidden' }`}>
          <ul className={`flex items-center gap-16 flex-col md:flex-row translate-y-[200px] md:translate-y-0 bg-gray-100 h-screen md:h-full w-screen md:w-full pt-6 md:pt-0 -mt-[130px] md:mt-0`}>
            <li className='py-6 font-proximaNova500 text-xl text-center
            text-blue-500 border-b-2 border-blue-500'>
              <Link href='/'>Home</Link>
            </li>
            <li className='py-6 font-proximaNova500 text-xl text-center'>
              <Link href='/info'>Info</Link>
            </li>
            <li className='py-6 font-proximaNova500 text-xl text-center'>
              <Link href='/events'>Events</Link>
            </li>
            <li className='py-6 font-proximaNova500 text-xl text-center'>
              <Link href='/about'>About</Link>
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
              src={ menuIcon }
              width={ 16 }
              height={ 16 }
            />
          </button>
        </div>

        <div>
          <ul className='flex items-center gap-4 small-phones:gap-8'>
            <LanguageSwitch />
            
            <DonateButton />
          </ul>
        </div>
      </nav>
    </header>
  )
}