import Image from 'next/image'

import FarmDesktop from '../../../assets/images/about/farm-d-first.webp'
import Farm2Desktop from './../../../assets/images/about/farm-d-second.webp'
import Farm3Desktop from './../../../assets/images/about/farm-d-third.webp'

import Farm1Mobile from './../../../assets/images/about/farm-m-first.webp'
import Farm2Mobile from './../../../assets/images/about/farm-m-second.webp'
import Farm3Mobile from './../../../assets/images/about/farm-m-third.webp'

export const AboutFront = () => {
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
              src={ FarmDesktop }
              alt='farm'
              layout='responsive'
              priority
              />
          </div>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Farm2Desktop }
              alt='farm'
              layout='responsive'
              priority
              />
          </div>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Farm3Desktop }
              alt='farm'
              layout='responsive'
              priority
              />
          </div>
        </div>

        {/* Mobile version */}
        <div className='flex tablets:hidden justify-between gap-[5px] w-screen'>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Farm1Mobile }
              alt='farm'
              layout='responsive'
              priority
              />
          </div>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Farm2Mobile }
              alt='farm'
              layout='responsive'
              priority
              />
          </div>
          <div className='w-full overflow-hidden'>
            <Image
              src={ Farm3Mobile }
              alt='farm'
              layout='responsive'
              priority
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}