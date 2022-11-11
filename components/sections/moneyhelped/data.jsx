import Image from 'next/image'

import { useRouter } from 'next/router'
import { getTexts } from './../../../services/getTexts.js'

import DividerLine from './../../../assets/images/divider-line.svg'
import DividerLineMobile from './../../../assets/images/divider-line-mobile.svg'

export const Data = () => {
  const { locale } = useRouter()
  const { data, loading, error } = getTexts(locale)

  if (loading) return <span></span>
  if (error) return <span></span>

  return (
    <>
    <section className='flex justify-center mb-[72px] md:mb-14 px-6 md:px-6
    xl:px-0 bg-gray-100 md:bg-yellow-500'>
      <div className='flex flex-col md:flex-row justify-between max-w-[1216px]
      w-full py-12 items-center gap-10 md:gap-0'>
        <div className='flex'>
          <div className='flex flex-col md:flex-row items-center gap-2 lg:gap-8
          w-full'>
            <span className='font-proximaNova500 text-3xl md:text-5xl
            lg:text-[56px] leading-[56px] tracking-wider text-blue-500
            md:text-gray-900'>
             {data[90].textContent}
            </span>
            <span className='font-proximaNova200 text-xl lg:text-2xl leading-[36px]
            max-w-[152px] text-center md:text-left'>
              {data[16].textContent}
            </span>
          </div>
        </div>
          <div className='hidden md:block'>
            <Image
              src={ DividerLine }
              alt=''
            />
          </div>
          <div className='block md:hidden'>
            <Image
              src={ DividerLineMobile }
              alt=''
            />
          </div>
        <div className='flex'>
          <div className='flex flex-col md:flex-row items-center gap-2 lg:gap-8
          w-full'>
            <span className='font-proximaNova500 text-3xl md:text-5xl
            lg:text-[56px] leading-[56px] tracking-wider text-blue-500
            md:text-gray-900'>
              {data[91].textContent}
            </span>
            <span className='font-proximaNova200 text-xl lg:text-2xl leading-[36px]
            max-w-[152px] text-center md:text-left'>
              {data[23].textContent}
            </span>
          </div>
        </div>
          <div className='hidden md:block'>
            <Image
              src={ DividerLine }
              alt=''
            />
          </div>
          <div className='block md:hidden'>
            <Image
              src={ DividerLineMobile }
              alt=''
            />
          </div>
        <div className='flex'>
          <div className='flex flex-col md:flex-row items-center gap-2 lg:gap-8
          w-full'>
            <span className='font-proximaNova500 text-3xl md:text-5xl
            lg:text-[56px] leading-[56px] tracking-wider text-blue-500
            md:text-gray-900'>
              {data[89].textContent}
            </span>
            <span className='font-proximaNova200 text-xl lg:text-2xl leading-[36px]
            max-w-[152px] text-center md:text-left'>
              {data[17].textContent}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section className='flex justify-center px-6 pt-8 md:px-6
    xl:px-0'>
      <div className='flex flex-col md:flex-row justify-between max-w-[1216px]
      w-full py-6 items-center gap-10 md:gap-0'>
        <h6 className='font-proximaNova400 text-[32px] md:text-5xl text-left
        leading-[48px] tracking-wider uppercase'>
          {data[18].textContent}
        </h6>
      </div>
    </section>
    </>
  )
}