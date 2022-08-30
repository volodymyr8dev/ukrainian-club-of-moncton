import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import { getTexts } from '../../services/getTexts.js'

import UkrClubLogo from './../../assets/images/footer/ukr-monc-logo.svg'
import VercelLogo from './../../assets/images/footer/vercel-logo.svg'
import BinaryFutureLogo from './../../assets/images/footer/bf-logo.svg'

import LocationIcon from './../../assets/images/footer/location.svg'
import PhoneIcon from './../../assets/images/footer/phone.svg'
import PrinterIcon from './../../assets/images/footer/printer.svg'
import FacebookIcon from './../../assets/images/footer/facebook.svg'
import InstagramIcon from './../../assets/images/footer/instagram.svg'

export const FooterCopy = () => {
  const { t } = useTranslation('common')
  const { data, loading, error } = getTexts()
  const { locale } = useRouter()

  if (loading) return <span></span>
  if (error) return <span></span>

  return (
    <footer                                      
      className='bg-gray-900 flex justify-center h-full md:h-[120px] px-6
      xl:px-0 shadow-[0px_-6px_8px_-4px_rgba(0,0,0,0.06)]pt-8 pb-4 md:pt-0
      md:pb-0'
    >
      <div className='flex justify-between items-center max-w-[1216px] w-full
      flex-col md:flex-row'>
        <div>
          <ul className='flex items-center gap-0 md:gap-4 flex-col md:flex-row'>
            <li>
              <Link href='/'>
                <span>
                  <Image
                    src='/ucm-logo.svg' width='90' height='85'
                    alt='logo'
                  />
                </span>
              </Link>
            </li>
            <li className='flex flex-col text-center md:text-left'>
              <span className='text-xs md:text-sm text-gray-100'>
                { t('contact-us') }
                {' '}
                <a href={`tel:${ data.englishTexts[7].textContent }`}>
                  {          
                    locale === 'en'
                    ? data.englishTexts[3].textContent
                    : data.ukrainianTexts[3].textContent
                  }
                </a>
              </span>
              <span className='text-xs md:text-sm text-gray-100'>
                { t('email') }
                {' '}
                <a href={`mailto:${ data.englishTexts[5].textContent }`}>
                  {          
                    locale === 'en'
                    ? data.englishTexts[5].textContent
                    : data.ukrainianTexts[5].textContent
                  }
                </a>
              </span>
              <span className='text-xs md:text-sm text-gray-100'>
                { t('address') }
                {' '}
                <a href={ data.englishTexts[6].textContent }>
                  {          
                    locale === 'en'
                    ? data.englishTexts[4].textContent
                    : data.ukrainianTexts[4].textContent
                  }
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className='pt-4 md:pt-0'>
              <span className='text-xs md:text-sm text-gray-100'>
                By
                {' '}
                <a
                  href='https://binaryfuture.io'
                  target='_blank'
                  rel='noreferrer'
                >
                  BinaryFuture.io
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}