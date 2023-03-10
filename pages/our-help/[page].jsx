import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import {useRouter} from 'next/router'
import {gql} from '@apollo/client'

import {hygraph} from './../../services'

import {getTexts} from './../../services/getTexts.js'
import {MoneyHelpedFront} from '../../components/sections/moneyhelped/MoneyHelpedFront'
import {Informative} from '../../components/sections/moneyhelped/Informative'
import {Data} from '../../components/sections/moneyhelped/data'
import {MobileSwiperDisplay} from './../../components/utils/MobileSwiperDisplay'

import nextBlue from './../../assets/images/pagination/next-blue.webp'
import nextGray from './../../assets/images/pagination/next-gray.webp'
import previousBlue from './../../assets/images/pagination/previous-blue.webp'
import previousGray from './../../assets/images/pagination/previous-gray.webp'
import lineGray from './../../assets/images/pagination/line-gray.svg'
import {REVALIDATION_TIME_PAGINATION} from "../../services/constants";
import {isPostInvalid} from "../../services/helpers";

const limit = 6

function OurHelp({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  posts,
}) {
  const router = useRouter()
  const { data, loading, error } = getTexts(router.locale)

  if (loading) return <span></span>
  if (error) return <span></span>

  return (
    <>
    <Head>
      <title>Our help - Ukrainian Association of Moncton</title>
      <meta
        name="description"
        // equal data
        content={ data["how-tag-seo"] }
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
          <Data />
            <section className='flex justify-center mb-16 md:mb-28 pl-6 md:px-6'>
              <div className='flex justify-center flex-col max-w-[1215px] w-full'>
              <div className='flex justify-between gap-2 xl:gap-0 -ml-[23px]
              md:ml-0'>
                  <MobileSwiperDisplay
                    posts={ posts }
                  />
                  <div className='justify-start gap-2 xl:gap-8 max-w-full
                  w-full pt-10 hidden md:grid grid-cols-3'>
                  { 
                    posts.map((post, i) => {
                      return isPostInvalid(router.locale, post.node)
                        ? ''
                        : <div key={i} className='shadow-[0px_2px_22px_rgba(0,32,73,0.13)]
                        w-full max-h-full h-full
                        overflow-hidden bg-gray-100 rounded-3xl mt-6
                        hidden md:flex flex-col justify-start'>
                        <div className='w-full flex flex-col'>
                          <img
                            className='w-full min-h-[200px] max-h-[200px]
                            md:min-h-[256px] md:max-h-[256px] object-cover'
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
                        <div className='px-4 lg:px-6 pt-6 flex flex-col
                        justify-between h-full'>
                          <div>
                            <div>
                              <span className={`font-proximaNova200 text-yellow-900
                              px-6 py-2 rounded-[20px] ${post.node.tags[0]?.name ? 'bg-yellow-100' : 'bg-none'}`}>
                                {
                                  router.locale == 'ua'
                                    ? post.node.localizations[0].tags[0]?.name
                                    : post.node.tags[0]?.name
                                }
                              </span>
                            </div>

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

                            </div>
                          </div>

                          <div>
                              <div className='w-full md:w-auto flex justify-between
                                items-center pt-10 pb-6'>
                                <span className='font-proximaNova200 text-base
                                  text-gray-500 md:text-lg leading-[18px]'>
                                  {moment(post.node.createdAt).format('MMM DD, YYYY')}
                                </span>

                                <Link href={`/posts/${post.node.slug}`}>
                                  <span className='bg-[#006DB6] text-gray-100
                                    py-3 px-8 lg:px-10 rounded-[64px]
                                    font-proximaNova400 text-base md:text-lg
                                    text-center cursor-pointer'>
                                    {
                                      router.locale == 'ua'
                                        ? '???????????? ????????'
                                        : 'Read more'
                                    }
                                  </span>
                                </Link>
                              </div>
                          </div>
                        </div>
                      </div>
                    })
                  }
                  </div>
                </div>

                { posts.length> 6 && <div className='flex justify-center w-full mt-1 md:mt-16
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
                </div>}
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
    query postsPageQuery($limit: Int!) {
      postsConnection (
        first: $limit,
        where: { category: { slug: "how-your-money-helped" }},
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

export default OurHelp
