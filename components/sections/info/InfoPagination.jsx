import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css/autoplay'

import { InfoEventCard } from '../../utils/InfoEventCard'

export const InfoPagination = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>"
    },
  }
  
  return (
    <>
      <section className='flex justify-center pl-6'>
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
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}