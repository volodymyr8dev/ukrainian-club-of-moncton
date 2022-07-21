import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css/autoplay'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Grid, Autoplay } from 'swiper'
import galleryImage1 from './../../assets/images/sample-photo-1.svg'
import galleryImage2 from './../../assets/images/sample-photo-2.svg'

export const Gallery = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          100: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            slidesPerColumn: 2,
            slidesPerRow: 2,
            grid: {
              rows: 2,
            }
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
        modules={[ Pagination, Grid, Autoplay ]}
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