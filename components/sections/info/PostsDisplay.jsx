import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import useTranslation from 'next-translate/useTranslation'
import { InfoEventCard } from '../../utils/InfoEventCard'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css/autoplay'

export const PostsDisplay = () => {
  let { t } = useTranslation()

  const [activeTab, setActiveTab] = useState(true)

  const handleTabSwitch = () => {
    setActiveTab(!activeTab)
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>"
    },
  }

  return (
    <>
    <section className='flex flex-col items-center justify-center px-6 md:px-6
    xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full pb-3
      md:pb-0'>
        <div className='flex justify-between w-full bg-gray-100'>
          <div className={`border border-blue-500 w-full py-7
          flex justify-center rounded-l-3xl
          ${ activeTab ? 'bg-blue-500' : '' }`}>
            <button
              className={`${ activeTab ? 'text-gray-100' : 'text-blue-500' }
              font-proximaNova400 md:font-proximaNova500 text-base md:text-2xl
              max-w-[100px] md:max-w-full`}
              onClick={ handleTabSwitch }
              type='button'
            >
              Для тих, хто вже в Канаді
            </button>
          </div>

          <div className={`border border-blue-500 w-full py-7
          flex justify-center rounded-r-3xl
          ${ !activeTab ? 'bg-blue-500' : '' }`}>
            <button
              className={`${ !activeTab ? 'text-gray-100' : 'text-blue-500' }
              font-proximaNova400 md:font-proximaNova500 text-base md:text-2xl
              max-w-[100px] md:max-w-full`}
              onClick={ handleTabSwitch }
              type='button'
            >
              Для тих, хто збирається
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <section className='flex justify-center mb-16 md:mb-28 pl-6 md:px-6'>
        <div className='flex justify-center flex-col max-w-[1215px] w-full'>
          <div className='flex justify-between gap-2 xl:gap-0 -ml-[23px] md:ml-0'>
            <Swiper className='home-events-swiper h-full'
              breakpoints={{
                100: {
                  slidesPerView: 1.1,
                  centeredSlides: true,
                  spaceBetween: 8
                },
                700: {
                  spaceBetween: 8
                },
                900: {
                  slidesPerView: 3,
                  centeredSlides: false,
                  spaceBetween: 40
                },
              }}
              pagination={ pagination }
              modules={[ Pagination ]}
            >
              <SwiperSlide className='py-6'>
                <InfoEventCard />
              </SwiperSlide>
              <SwiperSlide className='py-6'>
                <InfoEventCard />
              </SwiperSlide>
              <SwiperSlide className='py-6'>
                <InfoEventCard />
              </SwiperSlide>
              <SwiperSlide className='py-6'>
                <InfoEventCard />
              </SwiperSlide>
              <SwiperSlide className='py-6'>
                <InfoEventCard />
              </SwiperSlide>
              <SwiperSlide className='py-6'>
                <InfoEventCard />
              </SwiperSlide>
              <SwiperSlide className='py-6'>
                <InfoEventCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
    </section>
    </>
  )
}