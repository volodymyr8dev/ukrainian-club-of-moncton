import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import HowBg from '../../../assets/images/how-bg.svg'
import HowBgMobile from '../../../assets/images/how-bg-mobile.svg'

export const HowFront = () => {
  let { t } = useTranslation()

  return (
    <>
    <section
      className='flex justify-center items-center mb-12 md:mb-[60px]'
    >
      <div className='flex justify-between gap-6 flex-col'>
        <div className='flex justify-between w-screen info-front-farm'>
          <div className='hidden tablets:block w-full overflow-hidden'>
            <Image
              src={ HowBg }
              layout='responsive'
            />
          </div>

          <div className='block tablets:hidden w-full overflow-hidden'>
            <Image
              src={ HowBgMobile }
              layout='responsive'
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}