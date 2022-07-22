import React, { useRef } from 'react'
import Image from 'next/image'
import { EventCard } from '../../utils/EventCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Grid, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/grid'
import 'swiper/css/autoplay'

import prevArrow from './../../../assets/images/prev-arrow.svg'
import nextArrow from './../../../assets/images/next-arrow.svg'

export const UpcomingEvents = () => {
  return (
    <>
      <section className='flex justify-center mb-28 px-6 xl:px-0'>
        <div className='flex justify-center flex-col max-w-[1216px] w-full'>

          <div className='flex justify-between items-center pb-12 md:pb-16'>
            <div>
              <h2 className='font-proximaNova400 text-[32px] md:text-[40px] uppercase
              tracking-wider'>
                'Upcoming	&amp; latest events'
              </h2>
            </div>
            <div className='hidden md:flex gap-8'>
              <Image className='event-prev cursor-pointer'
                src={ prevArrow }
                width={ 64 }
                height={ 64 }
              />
              <Image className='event-next cursor-pointer'
                src={ nextArrow }
                width={ 64 }
                height={ 64 }
              />
            </div>
          </div>

          <div className='flex justify-between gap-2 xl:gap-0'>
            <Swiper className='home-events-swiper'
              modules={[Navigation, Pagination]}
              slidesPerView={ 3 }
              navigation={{
                prevEl: '.event-prev',
                nextEl:'.event-next'
              }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <EventCard />
              </SwiperSlide>
              <SwiperSlide>
                <EventCard />
              </SwiperSlide>
              <SwiperSlide>
                <EventCard />
              </SwiperSlide>
              <SwiperSlide>
                <EventCard />
              </SwiperSlide>
            </Swiper>



          </div>
        </div>

      </section>
    </>
  )
}