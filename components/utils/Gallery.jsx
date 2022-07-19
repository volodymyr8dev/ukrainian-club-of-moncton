import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

import galleryImage1 from './../../assets/images/sample-photo-1.svg'
import galleryImage2 from './../../assets/images/sample-photo-2.svg'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

export const Gallery = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        onAutoplay={ 5000 }
        modules={[ Pagination, Autoplay ]}
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