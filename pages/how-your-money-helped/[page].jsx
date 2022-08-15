import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import { useRouter } from 'next/router'
import { gql } from '@apollo/client'
import useTranslation from 'next-translate/useTranslation'

import { hygraph } from './../../services'

import { MoneyHelpedFront } from '../../components/sections/moneyhelped/MoneyHelpedFront'
import { Informative } from '../../components/sections/moneyhelped/Informative'

import LoadingAnimation from 'react-circle-loading-animation'
import nextBlue from './../../assets/images/pagination/next-blue.svg'
import nextGray from './../../assets/images/pagination/next-gray.svg'
import previousBlue from './../../assets/images/pagination/previous-blue.svg'
import previousGray from './../../assets/images/pagination/previous-gray.svg'
import lineGray from './../../assets/images/pagination/line-gray.svg'

const limit = 6

function Events({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  posts,
}) {
  const router = useRouter()
  let { t } = useTranslation('events')

  return (
    <>
    <Head>
      <title>How your money helped - Ukrainian Club of Moncton</title>
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
      <MoneyHelpedFront />
      <div className='info-section'>
        <div className='info-section-bg'>
          <Informative />
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
                                {moment(post.node.createdAt).format('MMM DD, YYYY')}
                              </span>

                              <Link href={`/posts/${post.node.slug}`}>
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
                                {moment(post.node.createdAt).format('MMM DD, YYYY')}
                              </span>

                              <Link href={`/posts/${post.node.slug}`}>
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
                            href={`${currentPageNumber - 1}`}
                            scroll={false}
                          >
                            <Image
                              src={previousBlue}
                              className='cursor-pointer'
                            />
                          </Link>
                        )
                        : (
                          <Image
                            src={previousGray}
                          />
                        )
                    }

                    <Image
                      src={lineGray}
                    />

                    {
                      hasNextPage
                        ? (
                          <Link
                            href={`${currentPageNumber + 1}`}
                            scroll={false}
                          >
                            <Image
                              src={nextBlue}
                              className='cursor-pointer'
                            />
                          </Link>
                        )
                        : (
                          <Image
                            src={nextGray}
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
      postsConnection (where: {category: {slug: "how-your-money-helped" }}) {
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
        where: { category: { slug: "how-your-money-helped" }}
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
    offset: Number((params.page - 1) * limit),
  })

  return {
    props: {
      currentPageNumber: Number(params.page),
      posts,
      ...pageInfo,
    },
  }
}

export default Events