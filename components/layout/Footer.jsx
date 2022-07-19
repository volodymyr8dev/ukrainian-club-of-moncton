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
              <Link href='./'>
                <Image
                  src={ UCMLogo }
                />
              </Link>
            </li>
            <li className='flex flex-col'>
              <span>
                Contact us:
                {' '}
                <Link href='./'>
                  +222-2222-2222
                </Link>
              </span>
              <span>
                Email:
                {' '}
                <Link href='./'>
                  info@ukrclubmoncton.ca
                </Link>
              </span>
              <span>
                Address:
                {' '}
                <Link href='./'>
                  123 ABC Street, Moncton. NB, E1D2D3
                </Link>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <span>By <Link href='./'>BinaryFuture.io</Link></span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}