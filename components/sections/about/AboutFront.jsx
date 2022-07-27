import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import Farm1 from './../../../assets/images/farm-1.png'
import Farm2 from './../../../assets/images/farm-2.png'
import Farm3 from './../../../assets/images/farm-3.png'

export const AboutFront = () => {
  let { t } = useTranslation()

  return (
    <>
    <section
      className='flex justify-center items-center mb-[60px]'
    >
      <div className='flex justify-between gap-6 flex-col'>
        <div className='w-screen flex justify-between gap-1 tablets:gap-[18px]'>
          <div className='w-full'>
            <Image
              src={ Farm1 }
              layout='responsive'
            />
          </div>
          <div className='w-full'>
            <Image
              src={ Farm2 }
              layout='responsive'
            />
          </div>
          <div className='w-full'>
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