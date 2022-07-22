import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import galleryImage1 from './../../assets/images/sample-photo-1.svg'
import galleryImage2 from './../../assets/images/sample-photo-2.svg'

export const Gallery = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          100: {
            slidesPerView: 1.2,
            spaceBetween: 8
          },
          768: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={ 30 }
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.gallery-prev',
          nextEl:'.gallery-next'
        }}
        modules={[ Pagination, Navigation, Autoplay ]}
        className='home-gallery-swiper'
      >
        <SwiperSlide>
          <Image
            src={ galleryImage1 }
            className='rounded-[16px]'
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={ galleryImage2 }
            className='rounded-[16px]'
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={ galleryImage1 }
            className='rounded-[16px]'
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={ galleryImage2 }
            className='rounded-[16px]'
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={ galleryImage1 }
            className='rounded-[16px]'
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={ galleryImage2 }
            className='rounded-[16px]'
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}