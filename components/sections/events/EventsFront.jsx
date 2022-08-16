import Image from 'next/image'

import Img1Desktop from './../../../assets/images/events/img-d-1.svg'
import Img2Desktop from './../../../assets/images/events/img-d-2.svg'
import Img3Desktop from './../../../assets/images/events/img-d-3.svg'

import Img1Mobile from './../../../assets/images/events/img-m-01.svg'
import Img2Mobile from './../../../assets/images/events/img-m-02.svg'
import Img3Mobile from './../../../assets/images/events/img-m-03.svg'

export const EventsFront = () => {
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
              alt='events'
              layout='responsive'
            />
          </div>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Img2Desktop }
              alt='events'
              layout='responsive'
            />
          </div>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Img3Desktop }
              alt='events'
              layout='responsive'
            />
          </div>
        </div>

        {/* Mobile version */}
        <div className='flex tablets:hidden justify-between gap-[5px] w-screen'>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Img1Mobile }
              alt='events'
              layout='responsive'
            />
          </div>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Img2Mobile }
              alt='events'
              layout='responsive'
            />
          </div>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Img3Mobile }
              alt='events'
              layout='responsive'
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}