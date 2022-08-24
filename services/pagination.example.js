/* file name: [page].jsx */

import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import {useRouter} from 'next/router'
import {gql} from 'graphql-request'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css/autoplay'

import {hygraph} from './../../services'

import beforeArrow from './../../assets/images/before-arrow-pagination.svg'
import nextArrow from './../../assets/images/next-arrow-pagination.svg'
import {REVALIDATION_TIME_PAGINATION} from "./constants";

const limit = 3

function PostPage({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  posts,
}) {
  const router = useRouter()

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>"
    },
  }

  return (
    <>
    <section className='flex justify-center mb-16 md:mb-28 pl-6 md:px-6'>
      <div className='flex justify-center flex-col max-w-[1230px] w-full'>
        <div className='flex justify-between md:justify-center gap-2 xl:gap-0
        -ml-[23px] md:ml-0'>
            <Swiper className='home-events-swiper info-swiper events-swiper
            h-full'
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
                  centeredSlides: false,
                  spaceBetween: 30
                },
              }}
              pagination={pagination}
              navigation={{
                prevEl: '.info-pagination-before',
                nextEl: '.info-pagination-next'
              }}
              modules={[Pagination, Navigation]}
            >
              {
                posts.map(post => (
                  <SwiperSlide
                    className='py-6 max-w-[33.3%]'
                    key={post.title}
                  >
                    <div className='shadow-[0px_2px_22px_rgba(0,32,73,0.13)]
                          max-w-full w-full max-h-full h-full overflow-hidden
                          bg-gray-100 rounded-3xl'>
                      <div className='w-full'>
                        <img
                          className='w-full min-h-[200px] md:min-h-[256px]
                                object-cover'
                          src={post.node.featuredImage.url}
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
                            <span className='font-proximaNova200 text-gray-500
                                  text-base md:text-lg leading-[18px]'>
                              {moment(post.node.createdAt).format('MMM DD, YYYY')}
                            </span>

                            <Link href={`/posts/${post.node.slug}`}>
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
      <pre>{JSON.stringify(posts, 2, null)}</pre>
      {hasPreviousPage ? (
        <Link href={`${currentPageNumber - 1}`}>
          <a>Previous page</a>
        </Link>
      ) : null}
      {hasNextPage ? (
        <Link href={`${currentPageNumber + 1}`}>
          <a>Next page</a>
        </Link>
      ) : null}
    </>
  )
}

export async function getStaticPaths() {
  const query = gql`
    {
      postsConnection (where: {category: {slug: "event" }}) {
        aggregate {
          count
        }
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
            localizations(locales: uk_UA) {
              title
              excerpt
              tags {
                name
              }
            }
          }
        }
      }
    }
  `
  const { postsConnection } = await hygraph.request(query)

  function* numberOfPages({ total, limit }) {
    let page = 1
    let offset = 0

    while (offset < total) {
      yield page

      page++
      offset += limit
    }
  }

  const paths = [
    ...numberOfPages({
      total: postsConnection.aggregate.count,
      limit,
    }),
  ].map((page) => ({
    params: { page: String(page) },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const query = gql`
    query postsPageQuery($limit: Int!, $offset: Int!) {
      postsConnection (
        first: $limit,
        skip: $offset,
        where: { category: { slug: "event" }}
        ) {
        aggregate {
          count
        }
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
            localizations(locales: uk_UA) {
              title
              excerpt
              tags {
                name
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  `

  const {
    postsConnection: { posts, pageInfo },
  } = await hygraph.request(query, {
    limit,
    offset: Number((params.page - 1) * limit),
  })

  return {
    props: {
      currentPageNumber: Number(params.page),
      posts,
      ...pageInfo,
    },
    revalidate: REVALIDATION_TIME_PAGINATION
  }
}

export default PostPage
