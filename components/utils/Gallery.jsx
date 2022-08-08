import { gql, useQuery } from '@apollo/client'
import { Pagination, Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

const GET_GALLERY_IMAGES_QUERY = gql`
  query getGalleryImages {
    galleries (
      orderBy: createdAt_DESC,
      last: 16
    ) {
    picture {
      url
    }
    }
  }
`

export const Gallery = () => {
  const { loading, error, data } = useQuery(GET_GALLERY_IMAGES_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

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
          pauseOnMouseEnter: true
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
        {
          data.galleries.map(item => (
            <SwiperSlide>
            <img
              src={ item.picture.url }
              className='rounded-[16px] w-full max-w-[376px] h-full max-h-[244px]
              object-cover'
              loading='lazy'
            />
          </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}