import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import { DonateButton } from '../../utils/DonateButton'

export const Informative = () => {
  let { t } = useTranslation('our-help')

  return (
    <section className='flex justify-center mb-[72px] md:mb-14 px-6 md:px-6
    xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <h2 className='text-4xl md:text-[56px] leading-[100%]
        tracking-wider uppercase text-center'>
          <span className='font-proximaNova300'>
            { t('what-have') }
          </span>
          {' '}
          <span className='font-proximaNova500'>
            { t('with') }
          </span>
          {' '}
          <span className='font-proximaNova500 text-blue-500'>
            { t('your-help') }
          </span>
        </h2>

        <div className='pt-12 md:pt-10'>
          <p className='w-full max-w-[1066px] text-center font-proximaNova300
          text-xl md:text-2xl leading-[30px] md:leading-9'>
            { t('we-created') }
          </p>
        </div>

        <div className='flex justify-end md:justify-center gap-8 pt-16 flex-col
        md:flex-row items-end md:items-center'>
          <div className='max-w-[186px] md:max-w-full flex flex-end'>
            <DonateButton />
          </div>
          <div className='flex items-center justify-center'>
            <Link
              href='/how'
            >
              <span className='font-proximaNova400 text-base md:text-lg leading-[18px]
              text-blue-500 uppercase flex gap-3 cursor-pointer'>
                { t('volunteer') }
                <img
                  src='/blue-right-arrow.svg'
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}