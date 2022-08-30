import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import { getTexts } from './../../services/getTexts.js'

import UkrClubLogo from './../../assets/images/footer/ukr-monc-logo.svg'
import VercelLogo from './../../assets/images/footer/vercel-logo.svg'
import BinaryFutureLogo from './../../assets/images/footer/bf-logo.svg'

import LocationIcon from './../../assets/images/footer/location.svg'
import PhoneIcon from './../../assets/images/footer/phone.svg'
import EmailIcon from './../../assets/images/footer/email.svg'
import FacebookIcon from './../../assets/images/footer/facebook.svg'
import InstagramIcon from './../../assets/images/footer/instagram.svg'

export const Footer = () => {
  const { t } = useTranslation('common')
  const { data, loading, error } = getTexts()
  const { locale } = useRouter()

  if (loading) return <span></span>
  if (error) return <span></span>

  return (
    <footer                                      
      className='bg-gray-900 flex justify-center h-full px-6
      xl:px-0'
    >
      <div className='bg-gray-900 max-w-[1216px] w-full'>
        <div className='bg-gray-900 h-24 border-b-[1px] border-[#666177]'></div>

        <div className='bg-gray-900 w-full flex justify-center items-center
        gap-32 py-[60px]'>
          <div className='cursor-pointer'>
            <Link href='/'>
              <span>
                <Image
                  src={ UkrClubLogo }
                  width={ 194 }
                  alt='Ukrainian Club of Moncton'
                />
              </span>
            </Link>
          </div>

          <div className='flex flex-col justify-end items-center gap-9'>
            <div className='flex gap-[18px] justify-end w-full'>
              <Image
                src={ LocationIcon }
                width={ 24 }
                alt='address'
              />
              <a href={ data.englishTexts[6].textContent }>
                <span className='font-proximaNova300 text-sm leading-[14px]
                text-gray-100'>
                  {          
                    locale === 'en'
                    ? data.englishTexts[4].textContent
                    : data.ukrainianTexts[4].textContent
                  }
                </span>
              </a>
            </div>

            <div className='flex justify-between gap-6'>
              <div className='flex gap-[18px]'>
                <Image
                  src={ PhoneIcon }
                  width={ 24 }
                  alt='phone'
                />
                <a href={`tel:${ data.englishTexts[7].textContent }`}>
                  <span className='font-proximaNova300 text-sm leading-[14px]
                  text-gray-100'>
                    {          
                      locale === 'en'
                      ? data.englishTexts[3].textContent
                      : data.ukrainianTexts[3].textContent
                    }
                  </span>
                </a>
              </div>

              <div className='flex gap-[18px]'>
                <Image
                  src={ EmailIcon }
                  width={ 24 }
                  alt='email'
                />
                <a href={`mailto:${ data.englishTexts[5].textContent }`}>
                  <span className='font-proximaNova300 text-sm leading-[14px]
                  text-gray-100'>
                    {          
                      locale === 'en'
                      ? data.englishTexts[5].textContent
                      : data.ukrainianTexts[5].textContent
                    }
                  </span>
                </a>
              </div>
            </div>

            <div className='flex gap-[26px] justify-end w-full'>
              <div>
                <span className='font-proximaNova300 text-sm leading-[14px]
                  text-gray-500'>
                  Social media:
                </span>
              </div>

              <div className='flex gap-[30px]'>
                <a
                  href={ data.englishTexts[88].textContent }
                  target='_blank'
                  rel='noreferrer'
                >
                  <Image
                    src={ FacebookIcon }
                    width={ 24 }
                    alt='facebook'
                  />
                </a>

                <a
                  href={ data.englishTexts[89].textContent }
                  target='_blank'
                  rel='noreferrer'
                >
                  <Image
                    src={ InstagramIcon }
                    width={ 24 }
                    alt='instagram'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-900 h-32 border-t-[1px] border-[#666177]
        flex justify-between items-center w-full'>
          <div className='w-[33%]'>
            <span className='font-proximaNova300 text-sm leading-[14px]
            text-gray-500'>
              Powered by
            </span>
          </div>

          <div className='flex justify-center items-center gap-3 w-[33%]'>
            <div>
              <a
                href=''
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src={ VercelLogo }
                  width={ 90 }
                  alt='Vercel'
                />
              </a>
            </div>

            <div className='-mt-[7px]'>
              <span className='font-proximaNova300 text-sm leading-[14px]
              text-gray-500'>
                /
              </span>
            </div>

            <div>
              <a
                href='https://binaryfuture.io'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src={ BinaryFutureLogo }
                  width={ 115 }
                  alt='Vercel'
                />
              </a>
            </div>
          </div>

          <div className='flex justify-end w-[33%]'>
            <span className='font-proximaNova300 text-sm leading-[14px]
            text-gray-500 w-full text-right'>
              Copyright © 2022 • Ukrainian Club of Moncton
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}