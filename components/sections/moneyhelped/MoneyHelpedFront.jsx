import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import Img1Desktop from './../../../assets/images/our-help/img-d-1.svg'
import Img2Desktop from './../../../assets/images/our-help/img-d-2.svg'
import Img3Desktop from './../../../assets/images/our-help/img-d-3.svg'

import Img1Mobile from './../../../assets/images/our-help/img-m-1.svg'
import Img2Mobile from './../../../assets/images/our-help/img-m-2.svg'
import Img3Mobile from './../../../assets/images/our-help/img-m-3.svg'

export const MoneyHelpedFront = () => {
  let { t } = useTranslation()

  return (
    <>
    <section
      className='flex justify-center items-center mb-[60px]'
    >
      <div className='flex justify-between gap-6 flex-col'>
        {/* Desktop version */}
        <div className='hidden tablets:flex justify-between gap-1 tablets:gap-[18px]
        w-screen about-front-farm'>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Img1Desktop }
              layout='responsive'
            />
          </div>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Img2Desktop }
              layout='responsive'
            />
          </div>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Img3Desktop }
              layout='responsive'
            />
          </div>
        </div>

        {/* Mobile version */}
        <div className='flex tablets:hidden justify-between gap-[5px] w-screen'>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Img1Mobile }
              layout='responsive'
            />
          </div>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Img2Mobile }
              layout='responsive'
            />
          </div>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Img3Mobile }
              layout='responsive'
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}