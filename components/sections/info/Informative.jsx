import { useRouter } from 'next/router'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import UkrainianSymbol from './../../../assets/images/ukrainian-symbol.svg'

export const Informative = () => {
  let { t } = useTranslation('info')
  const router = useRouter()

  return (
    <section className='flex justify-center mb-[72px] md:mb-24 px-6 md:px-6 xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova500 text-4xl md:text-[56px] leading-[100%]
        tracking-wider uppercase text-center'>
          {
            router.locale === 'ua'
            ? 'Ми - Українці в Канаді'
            : 'Info page title'
          }
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
            {
              router.locale === 'ua'
              ? 'Ми хочемо допомогти тим, хто ще у лютому мав зовсім інші плани.'
              : 'Translation for this text...'
            }
            <br />
            <br className='block md:hidden' />
            {
              router.locale === 'ua'
              ? 'Тим, хто вимушений тимчасово переїхати до Канади через війну ₚосії проти України'
              : 'Translation for this text...'
            }
          </p>
        </div>
      </div>
    </section>
  )
}