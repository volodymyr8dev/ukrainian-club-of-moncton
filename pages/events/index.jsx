import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import { useRouter } from 'next/router'
import { gql } from '@apollo/client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import { hygraph } from './../../services/index'

import useTranslation from 'next-translate/useTranslation'

import beforeArrow from './../../assets/images/before-arrow-pagination.svg'
import nextArrow from './../../assets/images/next-arrow-pagination.svg'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css/autoplay'

import { EventsFront } from '../../components/sections/events/EventsFront'
import { Informative } from '../../components/sections/events/Informative'

const limit = 3

export default function Events({ posts }) {
  const { locale, asPath } = useRouter()
  const router = useRouter()
  let { t } = useTranslation()

  const page = 'Page: '

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>"
    },
  }

  return (
    <>
    <Head>
      <title>Events - Ukrainian Club of Moncton</title>
      <meta
        name="description"
        content="To be written"
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
    
    <main id='main'>
      <EventsFront />
      <div className='info-section'>
        <div className='info-section-bg'>
          <Informative />
          <section className='flex flex-col items-center justify-center px-6 md:px-6
          xl:px-0'>
            <div className='flex justify-center flex-col max-w-[1216px] w-full pb-3
            md:pb-0'>

            </div>
          </section>
          
          <section className='flex justify-center mb-16 md:mb-28 pl-6 md:px-6'>
              <div className='flex justify-center flex-col max-w-[1215px] w-full'>
                <div className='flex justify-between gap-2 xl:gap-0 -ml-[23px] md:ml-0'>
                  <Swiper className='home-events-swiper info-swiper h-full'
                    breakpoints={{
                      100: {
                        slidesPerGroup: 1,
                        slidesPerView: 1.1,
                        centeredSlides: true,
                        spaceBetween: 8
                      },
                      700: {
                        spaceBetween: 8
                      },
                      900: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        centeredSlides: false,
                        spaceBetween: 40
                      },
                    }}
                    pagination={ pagination }
                    navigation={{
                      prevEl: '.info-pagination-before',
                      nextEl:'.info-pagination-next'
                    }}
                    modules={[ Pagination, Navigation ]}
                  >
                    {
                      posts.map(post => (
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
                    }
                  </Swiper>
                </div>
                
                <div className='flex justify-between w-full -translate-y-[18px] z-10'>
                  <div className='z-10'>
                    <Image
                      src={ beforeArrow }
                      className='info-pagination-before cursor-pointer select-none z-50'
                    />
                  </div>
                  <div className='z-10'>
                    <Image
                      src={ nextArrow }
                      className='info-pagination-next cursor-pointer select-none z-50'
                    />
                  </div>
                </div>
              </div>
          </section>
        </div>
      </div>
    </main>
    </>
  )
}

export async function getStaticProps() {
  const query = gql`
    query indexPageQuery($limit: Int!, $offset: Int!) {
      postsConnection (
      first: $limit,
      skip: $offset,
      where: {category: { slug: "event" }},
      orderBy: createdAt_DESC,
      ) {
        posts: edges {
          node {
            id
            title
            excerpt
            address
            slug
            createdAt
            tags {
              name
              slug
            }
            featuredImage {
              url
            }
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  `

  async function* fetchData(query) {
    let offset = 0
    let hasNextPage = true

    while (hasNextPage) {
      const {
        postsConnection: { posts, pageInfo },
      } = await hygraph.request(query, { limit, offset })

      hasNextPage = pageInfo.hasNextPage
      offset += limit

      yield posts
    }
  }

  async function paginatedQuery({ query }) {
    const iterator = fetchData(query)

    let data = []

    for await (const posts of iterator) data = [...data, ...posts]

    return data
  }

  const posts = await paginatedQuery({ query })

  return {
    props: {
      posts,
    },
  }
}