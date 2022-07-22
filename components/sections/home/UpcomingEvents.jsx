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
      <section className='flex justify-center mb-28 px-6 xl:px-0'>
        <div className='flex justify-center flex-col max-w-[1216px] w-full'>

        <HeadingToggler
          heading='Upcoming	&amp; latest events'
          togglerPrevClass='event-prev'
          togglerNextClass='event-next'
        />

          <div className='flex justify-between gap-2 xl:gap-0'>
            <Swiper className='home-events-swiper'
              modules={[ Navigation, Pagination ]}
              slidesPerView={ 3 }
              navigation={{
                prevEl: '.event-prev',
                nextEl:'.event-next'
              }}
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