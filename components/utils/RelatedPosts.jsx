import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

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
  const { locale } = useRouter()

  useEffect(() => {
    getRelatedPosts(category, tags, slug)
      .then((result) => setRelatedPosts(result))
  }, [slug])

  const totalSlides = relatedPosts.length < 3 ? 'auto' : 3

  return (
    <>
      <section className='hidden md:flex justify-center pl-6 md:px-6 xl:px-0
      pt-28'>
        <div className='flex justify-center flex-col max-w-[1260px] w-full'>

        <HeadingToggler
          heading='Related articles'
          togglerPrevClass='event-prev'
          togglerNextClass='event-next'
          relatedPosts={relatedPosts}
        />

          <div className='flex justify-between gap-2 xl:gap-0 -ml-[23px] md:ml-0'>
            <Swiper className='home-events-swiper h-full'
              breakpoints={{
                100: {
                  slidesPerView: 'auto',
                  centeredSlides: true,
                  spaceBetween: 8
                },
                700: {
                  spaceBetween: 8
                },
                900: {
                  slidesPerView: totalSlides,
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
                className='py-10'
              >
                <div className='shadow-[0px_2px_22px_rgba(0,32,73,0.13)]
                w-full max-h-full h-full
                overflow-hidden bg-gray-100 rounded-3xl mt-6
                md:flex hidden flex-col justify-start'>
                  <div className='w-full flex flex-col'>
                    <img
                      className='w-full min-h-[200px] md:min-h-[256px]
                      object-cover max-h-[200px] md:max-h-[256px]'
                      src={post.featuredImage.url}
                      alt={
                        locale == 'ua'
                          ? post?.localizations[0]?.title
                          : post.title
                      }
                      title={
                        locale == 'ua'
                          ? post.localizations[0]?.title
                          : post.title
                      }
                      loading='lazy'
                    />
                  </div>
                  <div className='px-4 lg:px-6 pt-6 flex flex-col justify-between
                  h-full'>
                    <div>
                      <div>
                        <span className={`font-proximaNova200 text-yellow-900
                        px-6 py-2 rounded-[20px] ${post.tags[0]?.name ? 'bg-yellow-100' : 'bg-none'}`}>
                          {
                            locale == 'ua'
                              ? post.localizations[0]?.tags[0]?.name
                              : post.tags[0]?.name
                          }
                        </span>
                      </div>

                      <div className='pt-8'>
                        <h6 className='font-proximaNova500 uppercase text-xl
                        md:text-2xl'>
                          {
                            locale == 'ua'
                            ? post?.localizations[0]?.title
                            : post.title
                          }
                        </h6>
                        <p className='pr-4 md:pr-0 font-proximaNova200
                        text-base md:text-lg pt-2 leading-[18px]'>
                          {
                            locale == 'ua'
                            ? post?.localizations[0]?.excerpt
                            : post.excerpt
                          }
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className='w-full md:w-auto flex justify-between
                      items-center pt-10 pb-6'>
                        <span className='font-proximaNova200 text-base
                       text-gray-500 md:text-lg leading-[18px]'>
                          {moment(post.createdAt).format('MMM DD, YYYY')}
                        </span>

                        <Link href={`/posts/${post.slug}`}>
                          <span className='bg-[#006DB6] text-gray-100
                          py-3 px-8 lg:px-10 rounded-[64px]
                          font-proximaNova400 text-base md:text-lg
                          text-center cursor-pointer'>
                            {
                              locale == 'ua'
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
            ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}