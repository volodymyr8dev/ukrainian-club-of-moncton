import Image from 'next/image'
import { useRouter } from 'next/router'
import { getTexts } from './../../../services/getTexts.js'

import UkrainianSymbol from './../../../assets/images/ukrainian-symbol.webp'

export const Informative = () => {
  const { locale } = useRouter()
  const { data, loading, error } = getTexts(locale)

  if (loading) return <span></span>
  if (error) return <span></span>
  
  return (
    <section className='flex justify-center mb-[72px] md:mb-14 px-6 md:px-6
    xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova500 text-4xl md:text-[56px] leading-[100%]
        tracking-wider uppercase text-center'>
          {data["events-title"]}
        </h2>
        <div className='flex justify-center pt-10'>
          <Image
            src={ UkrainianSymbol }
            alt=''
            layout='intrinsic'
            priority
          />
        </div>
        <div className='pt-8 md:pt-11'>
          <p className='w-full md:w-[98%] text-center font-proximaNova300
          text-xl md:text-2xl leading-[30px] md:leading-9'>
            {data["events-introduction-1"]}
            <br />
            <br className='block md:hidden' />
            { data["events-introduction"]}
          </p>
        </div>
      </div>
    </section>
  )
}