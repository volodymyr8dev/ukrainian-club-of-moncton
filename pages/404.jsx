import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import ZeroIcon from './../assets/images/404-icon.svg'

export default function FourOhFour() {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <>
    <div className='h-screen w-screen -mt-[70px] not-found-bg'>
      <div className='w-full h-full flex justify-center items-center flex-col'>
        <div className='flex justify-center items-center w-full gap-4 -mt-100'>
          <span className='font-proximaNova300 text-[114px] md:text-[227px]
          text-center text-blue-500'>
            4
          </span>
          <div className='w-[83px] md:w-[166px]'>
            <Image
              src={ ZeroIcon }
              alt='0'
              layout='intrinsic'
            />
          </div>
          <span className='font-proximaNova300 text-[114px] md:text-[227px]
          text-center text-blue-500'>
            4
          </span>
        </div>

        <div className='-mt-10 w-full text-center'>
          <span className='text-center font-proximaNova300 text-xl md:text-2xl
          leading-9'>
            { t('what-looking-for') }
            <br className='hidden md:block' />
            { t('try-below') }
          </span>  
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-8 justify-center
        w-[240px] md:w-full pt-10'>
          <Link href='/'>
            <a className='font-proximaNova400 text-gray-100 text-lg text-center
            uppercase bg-blue-500 border border-blue-500 rounded-full px-8 py-4
            cursor-pointer'>
              { t('go-home') }
            </a>
          </Link>

          <a
          onClick={ router.back }
          className='font-proximaNova400 text-blue-500 text-lg text-center
          uppercase bg-gray-100 border border-blue-500 rounded-full px-8 py-4
          cursor-pointer'>
            { t('previous') }
          </a>
        </div>
      </div>
    </div>
    </>
  )
}