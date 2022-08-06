import { useState } from 'react'
import Link from 'next/link'
import moment from 'moment'
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import useTranslation from 'next-translate/useTranslation'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css/autoplay'

const GET_MOST_RECENT_IN_CANADA_POSTS_QUERY = gql`
  query getRecentInCanadaPosts {
    posts(
      where: {category: {slug: "in-canada"}}
      orderBy: createdAt_DESC,
      last: 6
    ) {
    title
      tags {
        name
        slug
      }
      category {
        name
        slug
      }
      excerpt
      featuredImage {
        url
      }
      address
      slug
      createdAt
      localizations(locales: uk_UA) {
        title
        excerpt
        minutesRead
        tags {
          name
        }
        content {
          html
        }
      }
    }
  }
`

const GET_MOST_RECENT_GOING_TO_CANADA_POSTS_QUERY = gql`
  query getRecentGoingToCanadaPosts {
    posts(
      where: {category: {slug: "going-to-canada"}}
      orderBy: createdAt_DESC,
      last: 6
    ) {
    title
      tags {
        name
        slug
      }
      category {
        name
        slug
      }
      excerpt
      featuredImage {
        url
      }
      address
      slug
      createdAt
      localizations(locales: uk_UA) {
          title
          excerpt
          minutesRead
          tags {
            name
          }
          content {
            html
          }
        }
    }
  }
`

export const PostsDisplay = () => {
  const { locale, asPath } = useRouter()
  const router = useRouter()
  let { t } = useTranslation()

  const [activeTab, setActiveTab] = useState(true)

  const handleTabSwitch = () => {
    setActiveTab(!activeTab)
  }

  const {
    loading: loadingIn,
    error: errorIn,
    data: dataIn
  } = useQuery(GET_MOST_RECENT_IN_CANADA_POSTS_QUERY)

  const {
    loading: loadingTo,
    error: errorTo,
    data: dataTo
  } = useQuery(GET_MOST_RECENT_GOING_TO_CANADA_POSTS_QUERY)

  if (loadingIn) return <p>Loading...</p>
  if (errorIn) return <p>Error</p>

  if (loadingTo) return <p>Loading...</p>
  if (errorTo) return <p>Error</p>

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>"
    },
  }

  return (
    <>
    <section className='flex flex-col items-center justify-center px-6 md:px-6
    xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full pb-3
      md:pb-0'>
        <div className='flex justify-between w-full bg-gray-100 rounded-3xl
        shadow-[0px_2px_22px_rgba(0,32,73,0.13)] overflow-hidden'>
          <div className={`border border-blue-500 w-full py-7
          flex justify-center rounded-l-3xl overflow-hidden
          ${ activeTab ? 'bg-blue-500' : '' }`}>
            <button
              className={`${ activeTab ? 'text-gray-100' : 'text-blue-500' }
              font-proximaNova400 md:font-proximaNova500 text-base md:text-2xl
              max-w-[100px] md:max-w-full`}
              onClick={ handleTabSwitch }
              type='button'
            >
              {
                router.locale == 'ua'
                ? 'Для тих, хто вже в Канаді'
                : 'For those already in Canada'
              }
            </button>
          </div>

          <div className={`border border-blue-500 w-full py-7
          flex justify-center rounded-r-3xl
          ${ !activeTab ? 'bg-blue-500' : '' }`}>
            <button
              className={`${ !activeTab ? 'text-gray-100' : 'text-blue-500' }
              font-proximaNova400 md:font-proximaNova500 text-base md:text-2xl
              max-w-[100px] md:max-w-full`}
              onClick={ handleTabSwitch }
              type='button'
            >
              {
                router.locale == 'ua'
                ? 'Для тих, хто збирається'
                : 'For those who are going'
              }
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <section className='flex justify-center mb-16 md:mb-28 pl-6 md:px-6'>
        <div className='flex justify-center flex-col max-w-[1215px] w-full'>
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
                  spaceBetween: 40
                },
              }}
              pagination={ pagination }
              modules={[ Pagination ]}
            >
              {
                activeTab
                ? dataIn.posts.map(post => (
                  <SwiperSlide
                    className='py-6'
                    key={ post.title }
                  >
                    <div className='shadow-[0px_2px_22px_rgba(0,32,73,0.13)]
                    max-w-full w-full max-h-full h-full overflow-hidden
                    bg-gray-100 rounded-3xl'>
                      <div className='w-full'>
                        <img
                          className='w-full min-h-[200px] md:min-h-[256px]
                          object-cover'
                          src={ post.featuredImage.url }
                          alt={
                            router.locale == 'ua'
                            ? post.localizations[0].title
                            : post.title
                          }
                          title={
                            router.locale == 'ua'
                            ? post.localizations[0].title
                            : post.title
                          }
                          loading='lazy'
                        />
                      </div>
                      <div className='px-4 lg:px-6 pt-6'>
                        <span className='font-proximaNova200 bg-yellow-100
                        text-yellow-900 px-6 py-2 rounded-[20px]'>
                          {
                            router.locale == 'ua'
                            ? post.localizations[0].tags[0].name
                            : post.tags[0].name
                          }
                        </span>
  
                        <div className='pt-8'>
                          <h6 className='font-proximaNova500 uppercase text-xl
                          md:text-2xl'>
                            {
                              router.locale == 'ua'
                              ? post.localizations[0].title
                              : post.title
                            }
                          </h6>
                          <p className='pr-4 md:pr-0 font-proximaNova200
                          text-base md:text-lg pt-2 leading-[18px]'>
                            {
                              router.locale == 'ua'
                              ? post.localizations[0].excerpt
                              : post.excerpt
                            }
                          </p>
  
                          <div className='w-full md:w-auto flex justify-between
                          items-center pt-10 pb-6'>
                            <span className='font-proximaNova200 text-gray-500
                            text-base md:text-lg leading-[18px]'>
                              { moment(post.createdAt).format('MMM DD, YYYY') }
                            </span>
  
                            <Link href={`/posts/${ post.slug }`}>
                              <span className='bg-yellow-500 text-gray-100
                              py-3 px-8 lg:px-10 rounded-[64px] font-proximaNova400
                              text-base md:text-lg text-center cursor-pointer'>
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
                : dataTo.posts.map(post => (
                  <SwiperSlide
                    className='py-6'
                    key={ post.name }
                  >
                    <div className='shadow-[0px_2px_22px_rgba(0,32,73,0.13)]
                    max-w-full w-full max-h-full h-full overflow-hidden
                    bg-gray-100 rounded-3xl'>
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
                          <p className='pr-4 md:pr-0 font-proximaNova200
                          text-base md:text-lg pt-2 leading-[18px]'>
                            { post.excerpt }
                          </p>
  
                          <div className='w-full md:w-auto flex justify-between
                          items-center pt-10 pb-6'>
                            <span className='font-proximaNova200 text-gray-500
                            text-base md:text-lg leading-[18px]'>
                              { moment(post.createdAt).format('MMM DD, YYYY') }
                            </span>
  
                            <Link href={asPath + `/posts/${ post.slug }`} locale={locale}>
                              <span className='bg-yellow-500 text-gray-100
                              py-3 px-8 lg:px-10 rounded-[64px] font-proximaNova400
                              text-base md:text-lg text-center cursor-pointer'>
                                Read more
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
          </div>
        </div>
    </section>
    </>
  )
}