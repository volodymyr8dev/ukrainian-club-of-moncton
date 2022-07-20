import Image from 'next/image'
import Link from 'next/link'
import UCMLogo from './../../assets/images/ucm-logo.svg'

export const Footer = () => {
  return (
    <footer                                      
      className='flex justify-center h-[120px] shadow-[0px_-6px_8px_-4px_rgba(0,0,0,0.06)]'
    >
      <div className='flex justify-between items-center max-w-[1216px] w-full'>
        <div>
          <ul className='flex items-center gap-4'>
            <li>
              <a href='/'>
                <Image
                  src={ UCMLogo }
                />
              </a>
            </li>
            <li className='flex flex-col'>
              <span>
                Contact us:
                {' '}
                <a href='/'>
                  +222-2222-2222
                </a>
              </span>
              <span>
                Email:
                {' '}
                <a href='/'>
                  info@ukrclubmoncton.ca
                </a>
              </span>
              <span>
                Address:
                {' '}
                <a href='/'>
                  123 ABC Street, Moncton. NB, E1D2D3
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <span>By <a href='https://binaryfuture.io'>BinaryFuture.io</a></span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}