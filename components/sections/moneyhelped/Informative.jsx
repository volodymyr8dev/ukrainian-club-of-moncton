import Image from 'next/image'

import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import UkrainianSymbol from './../../../assets/images/ukrainian-symbol.svg'

export const Informative = () => {
  const router = useRouter()
  let { t } = useTranslation()

  return (
    <section className='flex justify-center mb-[72px] md:mb-14 px-6 md:px-6
    xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova500 text-4xl md:text-[56px] leading-[100%]
        tracking-wider uppercase text-center'>
          How your money helped
        </h2>
        <div className='flex justify-center pt-10'>
          <Image
            src={ UkrainianSymbol }
            alt=''
          />
        </div>
        <div className='pt-8 md:pt-11'>
          <p className='w-full md:w-[98%] text-center font-proximaNova300
          text-xl md:text-2xl leading-[30px] md:leading-9'>
            Ми хочемо допомогти тим, хто ще у лютому мав зовсім інші плани.
            <br />
            <br className='block md:hidden' />
            To those who are forced to temporarily move to Canada because of the war between Russia and Ukraine
          </p>
        </div>
      </div>
    </section>
  )
}