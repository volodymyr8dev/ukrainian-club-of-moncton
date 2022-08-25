import { useRouter } from 'next/router'
import Image from 'next/image'

import { getTexts } from './../../../services/getTexts.js'

import UkrainianSymbol from './../../../assets/images/ukrainian-symbol.svg'

export const Informative = () => {
  const { data, loading, error } = getTexts()
  const { locale } = useRouter()
  
  if (loading) return <span></span>
  if (error) return <span></span>

  return (
    <section className='flex justify-center mb-[72px] md:mb-24 px-6 md:px-6 xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova500 text-4xl md:text-[56px] leading-[100%]
        tracking-wider uppercase text-center'>
          {
            locale === 'en'
            ? data.englishTexts[27].textContent
            : data.ukrainianTexts[27].textContent
          }
        </h2>
        <div className='flex justify-center pt-10'>
          <Image
            src={ UkrainianSymbol }
            layout='intrinsic'
            alt=''
            priority
          />
        </div>
        <div className='pt-8 md:pt-11'>
          <p className='w-full md:w-[98%] text-center font-proximaNova300
          text-xl md:text-2xl leading-[30px] md:leading-9'>
            {
              locale === 'en'
              ? data.englishTexts[28].textContent
              : data.ukrainianTexts[28].textContent
            }
            <br />
            <br className='block md:hidden' />
            {
              locale === 'en'
              ? data.englishTexts[29].textContent
              : data.ukrainianTexts[29].textContent
            }
          </p>
        </div>
      </div>
    </section>
  )
}