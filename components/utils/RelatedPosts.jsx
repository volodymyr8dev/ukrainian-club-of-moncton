import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

import { gql, useQuery } from '@apollo/client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import { getRelatedPosts } from '../../services'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/grid'
import 'swiper/css/autoplay'

import locationImage from './../../assets/images/card-location.svg'

import { HeadingToggler } from './HeadingToggler'

export const RelatedPosts = ({ category, tags, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    getRelatedPosts(category, tags, slug)
      .then((result) => setRelatedPosts(result))
  }, [slug])

  return (
    <>
      <section className='hidden md:flex justify-center pl-6 md:px-6 xl:px-0
      pt-28'>
        <div className='flex justify-center flex-col max-w-[1260px] w-full'>

        <HeadingToggler
          heading='Related articles'
          togglerPrevClass='event-prev'
          togglerNextClass='event-next'
        />

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
                  spaceBetween: 60
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
            { relatedPosts.map(post => ( 
              <SwiperSlide
                key={ post.title }
                className='py-6'
              >
                <div
                  className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] max-w-full
                  w-full max-h-full h-full overflow-hidden
                  rounded-3xl'
                  key={ post.title }
                >
                  <div className='w-full'>
                    <img
                      className='w-full min-h-[200px] md:min-h-[256px]
                      object-cover'
                      src={ post.featuredImage.url }
                      alt={ post.title }
                      title={ post.title }
                      loading='lazy'
                    />
                  </div>
                  <div className='px-4 lg:px-6 pt-6'>
                    <span className='font-proximaNova200 bg-yellow-100
                    text-yellow-900 px-6 py-2 rounded-[20px]'>
                      { post.tags[0].name }
                    </span>

                    <div className='pt-8'>
                      <h6 className='font-proximaNova500 uppercase text-xl
                      md:text-2xl'>
                        { post.title }
                      </h6>
                      <p className='pr-4 md:pr-0 font-proximaNova200 text-base
                      md:text-lg
                      pt-2 leading-[18px]'>
                        { post.excerpt }
                      </p>

                      <div className='flex gap-[18px] items-center pt-6'>
                        <Image
                          src={ locationImage }
                          width={ 18.8 }
                          height={ 24 }
                        />

                        <span className='font-proximaNova200 text-gray-500
                        text-base first-letter:md:text-lg leading-[18px]'>
                          { post.address }
                        </span>
                      </div>

                      <div className='w-full md:w-auto flex justify-between
                      items-center pt-10 pb-6'>
                        <span className='font-proximaNova200 text-gray-500
                        text-base md:text-lg leading-[18px]'>
                          { moment(post.createdAt).format('MMM DD, YYYY') }
                        </span>

                        <Link href={`/posts/${ post.slug }`}>
                          <span className='bg-yellow-500 text-gray-100 py-3
                          px-8 lg:px-10 rounded-[64px] font-proximaNova400
                          text-base md:text-lg text-center cursor-pointer'>
                            Read more
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}