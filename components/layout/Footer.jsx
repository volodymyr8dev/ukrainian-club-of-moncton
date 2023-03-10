import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import { getTexts } from './../../services/getTexts.js'

import UkrClubLogo from './../../assets/images/footer/ukr-monc-logo.png'
import VercelLogo from './../../assets/images/footer/vercel-logo.webp'
import BinaryFutureLogo from './../../assets/images/footer/bf-logo.webp'

import EmailIcon from './../../assets/images/footer/email.webp'
import FacebookIcon from './../../assets/images/footer/facebook.webp'
import InstagramIcon from './../../assets/images/footer/instagram.webp'

export const Footer = () => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const { data:dataFrom100,loading:loadingFrom100,error:errorFrom100 } = getTexts(locale,100);
  const { data, loading, error } = getTexts(locale);

  if (loading || loadingFrom100) return <span></span>;
  if (error || errorFrom100) return <span></span>;


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
                  alt={dataFrom100['assosiation-of-moncton']}
                />
              </span>
            </Link>
          </div>

          <div className='flex flex-col justify-start items-center gap-4'>
            <div className='flex gap-[18px] justify-start w-full'>
              <Image
                src={ EmailIcon }
                width={ 24 }
                alt='email'
              />
              <a  href={`mailto:${ data["about-email-box"] }`}>
                <span className='font-proximaNova300 text-sm leading-[14px]
                text-gray-100'>
                  {data["footer-email"]}

                </span>
              </a>
            </div>

            <div className='flex justify-start gap-6 pr-4'>
              <div className='flex gap-[18px]'>
                <Image
                  src={ InstagramIcon }
                  width={ 24 }
                  alt='instagram'
                />
                <a href={`${dataFrom100["instagram-navigation"] }`} target='_blank' rel='noreferrer'>
                  <span className='font-proximaNova300 text-sm leading-[14px]
                  text-gray-100'>
                  {data["footer-instagram-box"]}
                  </span>
                </a>
              </div>

             
            </div>
            <div className='flex justify-start gap-[18px]  w-full'>
                <Image
                  src={ FacebookIcon }
                  width={ 24 }
                  alt='facebook'
                />
                <a href={`${ data["facebook-navigation"] }`}>
                  <span className='font-proximaNova300 text-sm leading-[14px]
                  text-gray-100'>
                    { data["footer-facebook-description"]}
                  </span>
                </a>
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
                href='https://vercel.com/?utm_source=binary-future-moncton&utm_campaign=oss'
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
              {dataFrom100['footer-assosiation-of-moncton']}
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
                  alt={dataFrom100['assosiation-of-moncton']}
                />
              </span>
            </Link>
          </div>

          <div className='flex flex-col justify-start items-start gap-[26px]'>
            <div className='flex gap-[18px] justify-start w-full'>
              <Image
                src={ EmailIcon }
                width={ 24 }
                alt='address'
              />
              <a href={`mailto:${ data["about-email-box"] }`}>
                <span className='font-proximaNova300 text-sm leading-[14px]
                text-gray-100'>
          {data["footer-email"]}
                </span>
              </a>
            </div>

            <div className='flex gap-[18px]'>
              <Image
                src={ InstagramIcon }
                width={ 24 }
                alt='instagram'
              />
              <a href={`${dataFrom100["instagram-navigation"] }`} target='_blank' rel='noreferrer'>
                <span className='font-proximaNova300 text-sm leading-[14px]
                text-gray-100'>
                 {data["footer-instagram-box"]}
                </span>
              </a>
            </div>

            <div className='flex gap-[18px]'>
              <Image
                src={ FacebookIcon }
                width={ 24 }
                alt='facebook'
              />
              <a href={`${ data["facebook-navigation"] }`}>
                <span className='font-proximaNova300 text-sm leading-[14px]
                text-gray-100'>
                      { data["footer-facebook-description"]}
                </span>
              </a>
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
               {dataFrom100['footer-assosiation-of-moncton']}
            </span>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
