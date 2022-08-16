import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export const Footer = () => {
  const { t } = useTranslation('common')

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
                <span>
                  <Image
                    src='/ucm-logo.svg' width='90' height='85' alt='Ukrainian club of Moncton'
                  alt='logo'/>
                </span>
              </Link>
            </li>
            <li className='flex flex-col text-center md:text-left'>
              <span className='text-xs md:text-sm'>
                { t('contact-us') }
                {' '}
                <a href='tel:+22222222222'>
                  +222-2222-2222
                </a>
              </span>
              <span className='text-xs md:text-sm'>
                { t('email') }
                {' '}
                <a href='mailto:info@ukrclubmoncton.ca'>
                  info@ukrclubmoncton.ca
                </a>
              </span>
              <span className='text-xs md:text-sm'>
                { t('address') }
                {' '}
                <a href='https://www.google.com.br/maps/place/123+Cameron+St,+Moncton,+NB+E1C+5Y7,+Canadá/@46.0890425,-64.7909006,17z/data=!3m1!4b1!4m5!3m4!1s0x4ca0b92340567205:0x6d9d8c7d02438947!8m2!3d46.0890388!4d-64.7887119'>
                  123 ABC Street, Moncton. NB, E1D2D3
                </a>
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