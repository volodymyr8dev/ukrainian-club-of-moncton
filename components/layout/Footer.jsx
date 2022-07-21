import Image from 'next/image'
import Link from 'next/link'
import UCMLogo from './../../assets/images/ucm-logo.svg'

export const Footer = () => {
  return (
    <footer                                      
      className='flex justify-center h-full md:h-[120px] px-6 xl:px-0
      shadow-[0px_-6px_8px_-4px_rgba(0,0,0,0.06)] pt-8 pb-4 md:pt-0 md:pb-0'
    >
      <div className='flex justify-between items-center max-w-[1216px] w-full
      flex-col md:flex-row'>
        <div>
          <ul className='flex items-center gap-0 md:gap-4 flex-col md:flex-row'>
            <li>
              <Link href='/'>
                <Image
                  src={ UCMLogo }
                />
              </Link>
            </li>
            <li className='flex flex-col text-center md:text-left'>
              <span className='text-xs md:text-sm'>
                Contact us:
                {' '}
                <Link href='/'>
                  +222-2222-2222
                </Link>
              </span>
              <span className='text-xs md:text-sm'>
                Email:
                {' '}
                <Link href='/'>
                  info@ukrclubmoncton.ca
                </Link>
              </span>
              <span className='text-xs md:text-sm'>
                Address:
                {' '}
                <Link href='/'>
                  123 ABC Street, Moncton. NB, E1D2D3
                </Link>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='pt-4 md:pt-0'>
              <span className='text-xs md:text-sm'>
                By <Link href='https://binaryfuture.io'>BinaryFuture.io</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}