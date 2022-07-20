import Link from 'next/link'
import Image from 'next/image'

import languageSwitch from './../../assets/images/language-switch.svg'
import { DonateButton } from '../utils/DonateButton'

export const Header = () => {
  return (
    <header
      className='flex justify-center h-20 shadow-[0px_4px_4px_rgba(0,0,0,0.06)]'
    >
      <nav
        className='flex justify-between items-center max-w-[1216px] w-full'
      >
        <div>
          <ul className='flex align-center gap-16'>
            <li className='font-proximaNova500 text-xl text-blue-500'>
              <Link href='/'>Home</Link>
            </li>
            <li className='font-proximaNova500 text-xl'>
              <Link href='/'>Info</Link>
            </li>
            <li className='font-proximaNova500 text-xl'>
              <Link href='/'>Events</Link>
            </li>
            <li className='font-proximaNova500 text-xl'>
              <Link href='/'>About</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className='flex align-center gap-8'>
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