import useTranslation from 'next-translate/useTranslation'

import { getTexts } from './../../../services/getTexts.js'

export const Informative = () => {
  let { t } = useTranslation('about')
  const data = getTexts()
  console.log(data)

  return (
    <section className='flex justify-center mb-[72px] md:mb-24 px-6 md:px-6 xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova500 text-4xl md:text-[56px] leading-[100%]
        tracking-wider uppercase text-left md:text-center'>
          { t('what-is-it-for') }
        </h2>
        <div className='pt-8 md:pt-11'>
          <p className='w-full md:w-[98%] text-left md:text-center font-proximaNova300
          text-xl md:text-2xl leading-9'>
            { t('we-created') }
          </p>
        </div>
      </div>
    </section>
  )
}