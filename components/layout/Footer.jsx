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
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const { data, loading, error } = getTexts(locale);

  if (loading) return <span></span>;
  if (error) return <span></span>;
  return (
    <>
    <footer                                      
      className='bg-gray-900 justify-center h-full px-6 xl:px-0 hidden md:flex'
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

          <div className='flex flex-col justify-start items-center'>
            <div className='flex gap-[18px] w-full mb-[12px]'>
              <Image
                src={ FacebookIcon }
                width={ 24 }
                alt='facebook'
              />
              <a  href={data["facebook-navigation"]}>
                <span className='font-proximaNova300 text-sm leading-[14px]
                text-gray-100'>
                  {data["facebook-description"]}
                </span>
              </a>
            </div>

              <div className='flex gap-[18px] mb-[12px]'>
                <Image
                  src={ InstagramIcon }
                  width={ 24 }
                  alt='instagram'
                />
                <a href={`${ data["about-phone-url"] }`}>
                  <span className='font-proximaNova300 text-sm leading-[14px]
                  text-gray-100'>
                 {data["instagram-description"]}
                  </span>
                </a>
              </div>

              <div className='flex w-full gap-[18px] ml-[6px]  mb-[15px] '>
                <Image
                  src={ EmailIcon }
                  width={ 19 }
                  height={20}
                  alt='email'
                />
                <a href={`mailto:${ data["about-email-box"] }`} className="ml-[1px]">
                  <span className='font-proximaNova300 text-sm leading-[14px]
                  text-gray-100'>
                    { data["about-email-box"] }
                  </span>
                </a>
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
                  href={ data["footer-facebook"] }
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
                  href={ data["footer-instagram"] }
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

    <footer                                      
      className='bg-gray-900 justify-center h-full px-6 xl:px-0 flex md:hidden'
    >
      <div className='bg-gray-900 max-w-[1216px] w-full'>
        <div className='bg-gray-900 w-full flex flex-col justify-center
        items-center gap-10 py-[40px]'>
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

          <div className='flex flex-col justify-start items-start gap-[26px]'>
            <div className='flex gap-[18px] justify-start w-full'>
              <Image
                src={ LocationIcon }
                width={ 24 }
                alt='address'
              />
              <a href={ data["about-google-url"] }>
                <span className='font-proximaNova300 text-sm leading-[14px]
                text-gray-100'>
                  {data["about-location-box"]}
                </span>
              </a>
            </div>

            <div className='flex gap-[18px]'>
              <Image
                src={ PhoneIcon }
                width={ 24 }
                alt='phone'
              />
              <a href={`tel:${ data["about-phone-url"] }`}>
                <span className='font-proximaNova300 text-sm leading-[14px]
                text-gray-100'>
                  { data["about-phone-box"]}
                </span>
              </a>
            </div>

            <div className='flex gap-[18px]'>
              <Image
                src={ EmailIcon }
                width={ 24 }
                alt='email'
              />
              <a href={`mailto:${ data["about-email-box"] }`}>
                <span className='font-proximaNova300 text-sm leading-[14px]
                text-gray-100'>
                  {data["about-email-box"]}
                </span>
              </a>
            </div>

            <div className='flex gap-[26px] justify-start w-full'>
              <div>
                <span className='font-proximaNova300 text-sm leading-[14px]
                  text-gray-500'>
                  Social media:
                </span>
              </div>

              <div className='flex gap-[30px]'>
                <a
                  href={ data["footer-facebook"] }
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
                  href={ data["footer-instagram"] }
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

        <div className='bg-gray-900 h-[188px] border-t-[1px] border-[#666177]
        flex flex-col justify-center items-center w-full'>
          <div className=''>
            <span className='font-proximaNova300 text-sm leading-[14px]
            text-gray-500'>
              Powered by
            </span>
          </div>

          <div className='flex justify-center items-center gap-3 pt-[18px]
          pb-[39px]'>
            <div>
              <a
                href={'https://vercel.com/?utm_source=ukrainian-club-of-moncton&utm_campaign=oss'}
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
                  alt='Binary Future'
                />
              </a>
            </div>
          </div>

          <div className='flex justify-end'>
            <span className='font-proximaNova300 text-sm leading-[14px]
            text-gray-500 w-full text-center'>
              Copyright © 2022 • Ukrainian Club of Moncton
            </span>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
