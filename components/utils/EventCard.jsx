import Image from 'next/image'
import Link from 'next/link'

import sampleImage from './../../assets/images/sample-photo-3.svg'
import locationImage from './../../assets/images/card-location.svg'

export const EventCard = () => {
  return (
    <>
      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] max-w-full
      xl:max-w-[376px] w-full max-h-full xl:max-h-[644px] h-full overflow-hidden
      rounded-3xl'>
        <div className='w-full'>
          <Image
            className='w-full max-h-52'
            src={ sampleImage }
            layout='responsive'
          />
        </div>
        <div className='px-4 lg:px-6 pt-6'>
          <span className='font-proximaNova200 bg-yellow-100 text-yellow-900
          px-6 py-2 rounded-[20px]'>
            Holidays
          </span>

          <div className='pt-8'>
            <h6 className='font-proximaNova500 uppercase text-xl md:text-2xl'>
              Ukrainian Easter
            </h6>
            <p className='pr-4 md:pr-0 font-proximaNova200 text-base md:text-lg
            pt-2 leading-[18px]'>
              The traditional Ukrainian Easter Potluck Dinner was held on April 8,
              2018. The food was scrumptious (isn&apos;t it always?), we had some fun 
              with door prizes and just enjoyed the time catching up after winter.
            </p>

            <div className='flex gap-[18px] items-center pt-6'>
              <Image
                src={ locationImage }
                width={ 18.8 }
                height={ 24 }
              />

              <span className='font-proximaNova200 text-gray-500 text-base
              md:text-lg leading-[18px]'>
                11 ABC Street, Moncton, NB, E1G1B2
              </span>
            </div>

            <div className='w-full md:w-auto flex justify-between items-center 
            pt-10 pb-6'>
              <span className='font-proximaNova200 text-gray-500 text-base md:text-lg
              leading-[18px]'>
                April 24, 2022
              </span>

              <Link href='/placeholder'>
                <span className='bg-yellow-500 text-gray-100 py-3 px-8 lg:px-10
                rounded-[64px] font-proximaNova400 text-base md:text-lg text-center'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}