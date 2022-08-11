import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import UkrainianSymbol from './../../../assets/images/ukrainian-symbol.svg'

export const Informative = () => {
  let { t } = useTranslation('info')

  return (
    <section className='flex justify-center mb-[72px] md:mb-24 px-6 md:px-6 xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova500 text-4xl md:text-[56px] leading-[100%]
        tracking-wider uppercase text-center'>
          { t('title') }
        </h2>
        <div className='flex justify-center pt-10'>
          <Image
            src={ UkrainianSymbol }
          />
        </div>
        <div className='pt-8 md:pt-11'>
          <p className='w-full md:w-[98%] text-center font-proximaNova300
          text-xl md:text-2xl leading-[30px] md:leading-9'>
            { t('info-1') }
            <br />
            <br className='block md:hidden' />
            { t('info-2') }
          </p>
        </div>
      </div>
    </section>
  )
}