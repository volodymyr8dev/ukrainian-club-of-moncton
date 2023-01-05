import { gql, useQuery } from '@apollo/client'
import {useState} from 'react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import FsLightbox from 'fslightbox-react';

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

  const [toggler, setToggler] = useState(false);
  const [img, setImg] = useState();

  const handleOpenImg = (img)=>{
    setToggler(!toggler)
    setImg(img)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <>
      <Swiper
        breakpoints={{
          100: {
            slidesPerView: 1.2,
            spaceBetween: 18
          },
          768: {
            slidesPerView: 3,
          },
        }}
        pagination={true}
        spaceBetween={ 30 }
        // autoplay
        controlsProps={{
          dotsTouchable: true,
          prevPos: 'left',
          nextPos: 'right',
          nextTitle: '',
          prevTitle: '',
          dotsWrapperStyle: { marginBottom: 20 },
          nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '500' },
          }}
        autoplay={{
          delay: 2000,
          // disableOnInteraction: false,
        }}
       
        navigation={{
          prevEl: '.gallery-prev',
          nextEl:'.gallery-next'

        }}
        modules={[ Pagination, Navigation, Autoplay ]}
        className='home-gallery-swiper '
      >
        { img &&
         <FsLightbox
                toggler={ toggler }
                sources={ img? [img] : data.galleries.map((item)=>item.picture.url)}
              />
        }
        {
          data.galleries.map((item, i) => (
            <SwiperSlide
              key={ i }
            >
            <img
            onClick={()=>handleOpenImg(item.picture.url)}
              src={ item.picture.url }
              className='rounded-[16px] w-full max-w-[376px] h-full max-h-[244px]
              object-cover hover:max-w-[413.6px] origin-center
              transition-all'
              loading='lazy'
              alt='Ukraine'
            />
          </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}