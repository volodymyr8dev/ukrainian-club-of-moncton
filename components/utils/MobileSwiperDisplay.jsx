import Link from 'next/link'
import moment from 'moment'
import { useRouter } from 'next/router'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css/autoplay'

export const MobileSwiperDisplay = ({ posts }) => {
  const router = useRouter()
  
  return (
    <Swiper className='home-events-swiper info-swiper h-full
    block md:hidden'
      breakpoints={{
        100: {
          slidesPerView: 'auto',
          spaceBetween: 8
        },
        700: {
          spaceBetween: 8
        },
        900: {
          centeredSlides: false,
          spaceBetween: 40
        },
      }}
      pagination={{
        clickable: true
      }}
      navigation={{
        prevEl: '.info-pagination-before',
        nextEl:'.info-pagination-next'
      }}
      modules={[ Pagination, Navigation ]}
    >
    {
      posts.map(post => (       
        <SwiperSlide
          key={ post.node.title }
          className='py-6'
        >
          <div className='shadow-[0px_2px_22px_rgba(0,32,73,0.13)]
          min-w-full max-w-full w-full max-h-full h-full overflow-hidden
        bg-gray-100 rounded-3xl mt-6 block md:hidden'>
            <div className='w-full'>
              <img
                className='w-full min-h-[200px] md:min-h-[256px]
                object-cover'
                src={ post.node.featuredImage.url }
                alt={
                  router.locale == 'ua'
                  ? post.node.localizations[0].title
                  : post.node.title
                }
                title={
                  router.locale == 'ua'
                  ? post.node.localizations[0].title
                  : post.node.title
                }
                loading='lazy'
              />
            </div>
            <div className='px-4 lg:px-6 pt-6'>
              <span className='font-proximaNova200 bg-yellow-100
            text-yellow-900 px-6 py-2 rounded-[20px]'>
                {
                  router.locale == 'ua'
                  ? post.node.localizations[0].tags[0]?.name
                  : post.node.tags[0]?.name
                }
              </span>

              <div className='pt-8'>
                <h6 className='font-proximaNova500 uppercase text-xl
                md:text-2xl'>
                  {
                    router.locale == 'ua'
                    ? post.node.localizations[0].title
                    : post.node.title
                  }
                </h6>
                <p className='pr-4 md:pr-0 font-proximaNova200
                text-base md:text-lg pt-2 leading-[18px]'>
                  {
                    router.locale == 'ua'
                    ? post.node.localizations[0].excerpt
                    : post.node.excerpt
                  }
                </p>

                <div className='w-full md:w-auto flex justify-between
                items-center pt-10 pb-6'>
                  <span className='font-proximaNova200 text-base
                  text-gray-500 md:text-lg leading-[18px]'>
                    { moment(post.node.createdAt).format('MMM DD, YYYY') }
                  </span>

                  <Link href={`/posts/${ post.node.slug }`}>
                    <span className='bg-yellow-500 text-gray-100
                    py-3 px-8 lg:px-10 rounded-[64px]
                    font-proximaNova400 text-base md:text-lg
                    text-center cursor-pointer'>
                      {
                        router.locale == 'ua'
                        ? 'Читати далі'
                        : 'Read more'
                      }
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>                   
      ))
    }
    </Swiper>
  )
}