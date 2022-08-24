/* file name: [page].jsx */
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import {useRouter} from 'next/router'
import {gql} from '@apollo/client'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css/autoplay'

import {hygraph} from '../../../services'

import {InfoFront} from '../../../components/sections/info/InfoFront'
import {Informative} from '../../../components/sections/info/Informative'
import {MobileSwiperDisplay} from '../../../components/utils/MobileSwiperDisplay'

import nextBlue from './../../../assets/images/pagination/next-blue.svg'
import nextGray from './../../../assets/images/pagination/next-gray.svg'
import previousBlue from './../../../assets/images/pagination/previous-blue.svg'
import previousGray from './../../../assets/images/pagination/previous-gray.svg'
import lineGray from './../../../assets/images/pagination/line-gray.svg'

import {getTexts} from './../../../services/getTexts.js'
import {REVALIDATION_TIME_PAGINATION} from "../../../services/constants";

const limit = 6

function PostPage({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  posts,
}) {
  const router = useRouter()
  const { data, loading, error } = getTexts()
  
  if (loading) return <span></span>
  if (error) return <span></span>

  return (
    <>
    <Head>
      <title>Info - Ukrainian Club of Moncton</title>
      <meta
        name="description"
        content={
          router.locale === 'en'
          ? data.englishTexts[81].textContent
          : data.ukrainianTexts[81].textContent
        }
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
    
    <main id='main'>
      <InfoFront />
      <div className='info-section'>
        <div className='info-section-bg'>
          <Informative />
            <section className='flex flex-col items-center justify-center px-6 md:px-6
            xl:px-0'>
              <div className='flex justify-center flex-col max-w-[1216px] w-full pb-3
              md:pb-0'>
                <div className='flex justify-between w-full bg-gray-100 rounded-3xl
                shadow-[0px_2px_22px_rgba(0,32,73,0.13)] overflow-hidden'>
                  <div className={`border border-blue-500 w-full py-7
                  flex justify-center rounded-l-3xl overflow-hidden
                  bg-blue-500`}>
                    <button
                      className={`text-gray-100 font-proximaNova400
                      md:font-proximaNova500 text-base md:text-2xl
                      max-w-[130px] md:max-w-full`}
                      type='button'
                    >
                      {
                        router.locale === 'en'
                        ? data.englishTexts[30].textContent
                        : data.ukrainianTexts[30].textContent
                      }
                    </button>
                  </div>

                  <div className={`border border-blue-500 w-full py-7
                  flex justify-center rounded-r-3xl`}>
                    <Link
                      href='/info/going-to-canada/1'
                      replace
                      scroll={false}
                    >
                      <button
                        className={`text-blue-500 font-proximaNova400
                        md:font-proximaNova500 text-base md:text-2xl
                        max-w-[130px] md:max-w-full`}
                        type='button'
                      >
                        {
                          router.locale === 'en'
                          ? data.englishTexts[31].textContent
                          : data.ukrainianTexts[31].textContent
                        }
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            
            <section className='flex justify-center mb-16 md:mb-28 pl-6 md:px-6'>
                <div className='flex justify-center flex-col max-w-[1215px] w-full'>
                  <div className='flex justify-between gap-2 xl:gap-0 -ml-[23px]
                  md:ml-0'>
                    <MobileSwiperDisplay
                      posts={ posts }
                    />

                  <div className='justify-start gap-2 xl:gap-8 max-w-full
                  w-full pt-10 hidden md:flex'>
                    {
                      posts.slice(0, 3).map((post, i) => (
                        <div key={i} className='shadow-[0px_2px_22px_rgba(0,32,73,0.13)]
                        max-w-[33%] xl:max-w-[31.5%] w-full max-h-full h-full
                        overflow-hidden bg-gray-100 rounded-3xl mt-6
                        hidden md:block'>
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
                            <span className={`font-proximaNova200 text-yellow-900
                            px-6 py-2 rounded-[20px] ${ post.node.tags[0]?.name ? 'bg-yellow-100' : 'bg-none' }`}>
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
                      ))
                    }
                  </div>
                  </div>

                  <div className='justify-start gap-2 xl:gap-8 max-w-full
                  w-full pt-10 hidden md:flex'>
                    {
                      posts.slice(3, 6).map((post, i) => (
                        <div key={i} className='shadow-[0px_2px_22px_rgba(0,32,73,0.13)]
                        max-w-[33%] xl:max-w-[31.5%] w-full max-h-full h-full
                        overflow-hidden bg-gray-100 rounded-3xl mt-6
                        hidden md:block'>
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
                          <span className={`font-proximaNova200 text-yellow-900
                          px-6 py-2 rounded-[20px] ${ post.node.tags[0]?.name ? 'bg-yellow-100' : 'bg-none' }`}>
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
                      ))
                    }
                  </div>
                  
                  <div className='flex justify-center w-full mt-1 md:mt-16
                  z-50'>
                    <div className='flex gap-7 border border-gray-500
                    py-5 px-6 rounded-full'>
                      {
                        hasPreviousPage
                        ? (
                          <Link
                            href={`${currentPageNumber - 1}`}
                            scroll={ false }
                          >
                            <span>
                              <Image
                                src={ previousBlue }
                                alt='previous'className='cursor-pointer'
                              />
                            </span>
                          </Link>
                        )
                        : (
                          <Image
                            src={ previousGray }
                            alt=''
                          />
                        )
                      }

                      <Image
                        src={ lineGray }
                        alt=''
                      />

                      {
                        hasNextPage
                        ? (
                          <Link
                            href={`${currentPageNumber + 1}`}
                            scroll={ false }
                          >
                            <span>
                              <Image
                                src={ nextBlue }
                                alt='next'className='cursor-pointer'
                              />
                            </span>
                          </Link>
                        )
                        : (
                          <Image
                            src={ nextGray }
                            alt=''
                          />
                        )
                      }
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

export async function getStaticPaths() {
  const query = gql`
    {
      postsConnection (where: {category: {slug: "in-canada" }}) {
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
        where: { category: { slug: "in-canada" }},
        orderBy: createdAt_DESC
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