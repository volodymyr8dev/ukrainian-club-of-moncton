import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/grid'
import 'swiper/css/autoplay'

import { HeadingToggler } from '../../utils/HeadingToggler'
import { EventCard } from '../../utils/EventCard'

export const UpcomingEvents = () => {
  return (
    <>
      <section className='flex justify-center mb-16 md:mb-28 pl-6 md:px-6 xl:px-0'>
        <div className='flex justify-center flex-col max-w-[1260px] w-full'>

        <HeadingToggler
          heading='Upcoming	&amp; latest events'
          togglerPrevClass='event-prev'
          togglerNextClass='event-next'
        />

          <div className='flex justify-between gap-2 xl:gap-0 -ml-[23px] md:ml-0'>
            <Swiper className='home-events-swiper h-full'
              breakpoints={{
                100: {
                  slidesPerView: 1.1,
                  centeredSlides: true,
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
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: '.event-prev',
                nextEl:'.event-next'
              }}
              modules={[ Navigation, Pagination ]}
            >
              <SwiperSlide className='pt-6 pb-8'>
                <EventCard />
              </SwiperSlide>
              <SwiperSlide className='py-6'>
                <EventCard />
              </SwiperSlide>
              <SwiperSlide className='py-6'>
                <EventCard />
              </SwiperSlide>
              <SwiperSlide className='py-6'>
                <EventCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}