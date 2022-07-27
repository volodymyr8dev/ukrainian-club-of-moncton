import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import Farm1 from './../../../assets/images/farm/farm-01.svg'
import Farm2 from './../../../assets/images/farm/farm-02.svg'
import Farm3 from './../../../assets/images/farm/farm-03.svg'

export const AboutFront = () => {
  let { t } = useTranslation()

  return (
    <>
    <section
      className='flex justify-center items-center mb-[60px]'
    >
      <div className='flex justify-between gap-6 flex-col'>
        <div className='about-front-farm w-screen flex justify-between gap-1
        tablets:gap-[18px]'>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Farm1 }
              layout='responsive'
            />
          </div>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Farm2 }
              layout='responsive'
            />
          </div>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Farm3 }
              layout='responsive'
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}