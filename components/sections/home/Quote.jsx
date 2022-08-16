import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import quoteImage from './../../../assets/images/quote.svg'

export const Quote = () => {
  const { t } = useTranslation('home')

  return (
    <section className='flex justify-center mb-12 mt-0 md:mt-36 px-6 xl:px-0'>
    <div className='flex justify-center flex-col max-w-[1216px] w-full'>
      <div className='flex flex-col justify-center rounded-3xl overflow-visible
      shadow-[0px_2px_32px_rgba(0,32,73,0.13)] px-4 md:px-9'>
        <div className='flex justify-center -translate-y-12 z-5'>
          <Image
            src={ quoteImage }
            alt='quote'
          />
        </div>

        <div className='-mt-5 pb-10'>
          <p className='text-left md:text-center font-proximaNova300 text-base md:text-lg
          leading-4'>
            <span className='max-w-2xl w-full inline-block'>
              { t('we-are') }
              <br/>
              { t('membership') }
            </span>
            <br />
            <br />
            { t('our-focus') }
            <br />
            <br />
            <span className='max-w-2xl w-full inline-block'>
              { t('finally') }
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}