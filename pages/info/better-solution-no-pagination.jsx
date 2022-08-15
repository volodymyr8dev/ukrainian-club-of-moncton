/* file name: [page].jsx */
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import { useRouter } from 'next/router'
import { gql } from '@apollo/client'
import useTranslation from 'next-translate/useTranslation'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css/autoplay'

import { hygraph } from '../../services'

import { InfoFront } from '../../components/sections/info/InfoFront'
import { Informative } from '../../components/sections/info/Informative'

import LoadingAnimation from 'react-circle-loading-animation'
import nextBlue from './../../assets/images/pagination/next-blue.svg'
import nextGray from './../../assets/images/pagination/next-gray.svg'
import previousBlue from './../../assets/images/pagination/previous-blue.svg'
import previousGray from './../../assets/images/pagination/previous-gray.svg'
import lineGray from './../../assets/images/pagination/line-gray.svg'

const limit = 6

function PostPage({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  posts,
}) {
  const router = useRouter()
  let { t } = useTranslation('info')

  return (
    <>
    <Head>
      <title>Info - Ukrainian Club of Moncton</title>
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
                  flex justify-center rounded-l-3xl overflow-hidden`}>
                    <Link
                      href='/info'
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
                          router.locale === 'ua'
                          ? 'Для тих, хто вже в Канаді'
                          : 'Already in Canada?'
                        }
                      </button>
                    </Link>
                  </div>

                  <div className={`border border-blue-500 w-full py-7
                  flex justify-center rounded-r-3xl
                  bg-blue-500`}>
                    <Link
                      href='/info/going-to-canada'
                      replace
                      scroll={false}
                    >
                      <button
                        className={`text-gray-100 font-proximaNova400
                        md:font-proximaNova500 text-base md:text-2xl
                        max-w-[130px] md:max-w-full`}
                        type='button'
                      >
                        {
                          router.locale === 'ua'
                          ? 'Для тих, хто збирається'
                          : 'Going to Canada?'
                        }
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            
            <section className='flex justify-center mb-16 md:mb-28 pl-6 md:px-6'>
                <div className='flex justify-center flex-col max-w-[1215px] w-full'>
                  <div className='flex justify-start gap-2 xl:gap-8 max-w-full
                  w-full'>
                    {
                      posts.slice(0, 3).map(post => (                          
                        <div className='shadow-[0px_2px_22px_rgba(0,32,73,0.13)]
                        max-w-[33%] w-full max-h-full h-full overflow-hidden
                      bg-gray-100 rounded-3xl mt-6'>
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
                                ? post.node.localizations[0].tags[0].name
                                : post.node.tags[0].name
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

                  <div className='flex justify-start gap-2 xl:gap-8 max-w-full
                  w-full pt-10'>
                    {
                      posts.slice(3, 6).map(post => (                          
                        <div className='shadow-[0px_2px_22px_rgba(0,32,73,0.13)]
                        max-w-[33%] w-full max-h-full h-full overflow-hidden
                      bg-gray-100 rounded-3xl mt-6'>
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
                                ? post.node.localizations[0].tags[0].name
                                : post.node.tags[0].name
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
                  
                  <div className='hidden md:flex justify-center w-full mt-16
                  z-50'>
                    <div className='flex gap-7 border border-gray-500
                    py-5 px-6 rounded-full'>
                      {
                        hasPreviousPage
                        ? (
                          <Link
                            href={`${
                              router.pathname === '/info/in-canada/'
                              ? `going-to-canada/${currentPageNumber - 1}`
                              : `in-canada/${currentPageNumber - 1}`
                            }`}
                            scroll={ false }
                          >
                            <Image
                              src={ previousBlue }
                              className='cursor-pointer'
                            />
                          </Link>
                        )
                        : (
                          <Image
                            src={ previousGray }
                          />
                        )
                      }

                      <Image
                        src={ lineGray }
                      />

                      {
                        hasNextPage
                        ? (
                          <Link
                            href={`${
                              router.pathname === '/info/in-canada/'
                              ? `going-to-canada/${currentPageNumber + 1}`
                              : `in-canada/${currentPageNumber + 1}`
                            }`}
                            scroll={ false }
                          >
                            <Image
                              src={ nextBlue }
                              className='cursor-pointer'
                            />
                          </Link>
                        )
                        : (
                          <Image
                            src={ nextGray }
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
    query postsPageQuery($slug: String!) {
      postsConnection (where: {category: {slug: $slug }}) {
        aggregate {
          count
        }
        posts: edges {
          node {
            id
          }
        }
      }
    }
  `
  const paths = [];
  ['going-to-canada', 'in-canada'].map(async slug => {
    const { postsConnection } = await hygraph.request(query, { slug: slug })

    function* numberOfPages({ total, limit }) {
      let page = 1
      let offset = 0

      while (offset < total) {
        yield page

        page++
        offset += limit
      }
    }

    paths.push([
      ...numberOfPages({
        total: postsConnection.aggregate.count,
        limit,
      }),
    ].map((page) => ({
      params: { arg: [slug, String(page)] },
    })))

    paths.push({
      params: { arg: [slug] },
    })
  })
  paths.push({
    params: { arg: [] },
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const slug = params.arg && params.arg[0] || "in-canada";
  const page = params.arg && params.arg[1] || 1;
  const query = gql`
    query postsPageQuery($limit: Int!, $offset: Int!, $slug: String!) {
      postsConnection (
        first: $limit,
        skip: $offset,
        where: { category: { slug: $slug }}
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
              minutesRead
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
    offset: Number((page - 1) * limit),
    slug
  })

  return {
    props: {
      params,
      currentPageNumber: Number(page),
      posts,
      ...pageInfo,
    },
  }
}

export default PostPage