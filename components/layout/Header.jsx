import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import languageSwitch from './../../assets/images/language-switch.svg'
import menuIcon from './../../assets/images/menu-icon.svg'
import { DonateButton } from '../utils/DonateButton'

export const Header = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <header
      className='flex justify-center h-20 shadow-[0px_4px_4px_rgba(0,0,0,0.06)]'
    >
      <nav
        className='flex justify-between items-center max-w-[1216px] w-full px-6
        xl:px-0'
      >
        <div className={`md:flex ${ isActive ? 'flex bg-gray-100 absolute w-full h-full top-0 -mx-7 justify-center z-10' : 'hidden' }`}>
          <ul className={`flex align-center gap-16 flex-col md:flex-row translate-y-[200px] md:translate-y-0`}>
            <li className='font-proximaNova500 text-xl text-center text-blue-500'>
              <Link href='/'>Home</Link>
            </li>
            <li className='font-proximaNova500 text-xl text-center'>
              <Link href='/'>Info</Link>
            </li>
            <li className='font-proximaNova500 text-xl text-center'>
              <Link href='/'>Events</Link>
            </li>
            <li className='font-proximaNova500 text-xl text-center'>
              <Link href='/'>About</Link>
            </li>
          </ul>
        </div>

        <div className='flex md:hidden z-20'>
          <button
            className=''
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
          <ul className='flex align-center gap-4 small-phones:gap-8'>
            <li className='flex align-center'>
              <span className='font-proximaNova500 text-xl pr-2 flex items-center'>
                ENG
              </span>
              <Image
                src={ languageSwitch }
                width={ 12 }
                height={ 7 }
              />
            </li>
            
            <DonateButton />
          </ul>
        </div>
      </nav>
    </header>
  )
}