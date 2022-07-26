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
        <div className='flex justify-between gap-[18px]'>
          <div>
            <Image
              src={ Farm1 }
            />
          </div>
          <div>
            <Image
              src={ Farm2 }
            />
          </div>
          <div>
            <Image
              src={ Farm3 }
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}