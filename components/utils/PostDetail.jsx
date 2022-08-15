import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

import { RelatedPosts } from './RelatedPosts'

import UCMLogo from './../../assets/images/ucm-logo.svg'
import FacebookIcon from './../../assets/images/post/facebook.svg'
import TwitterIcon from './../../assets/images/post/twitter.svg'
import ShareIcon from './../../assets/images/post/share.svg'
import GreenShareIcon from './../../assets/images/post/green-share.svg'
import { useRouter } from 'next/router'

import { FacebookShareButton, TwitterShareButton } from 'next-share'

export const PostDetail = ({ post }) => {
  const router = useRouter()

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL

  const [copied, setCopied] = React.useState(false)

  return (
    <>
    <section className='flex justify-center mb-[72px] md:mb-24 px-6 md:px-6
    xl:px-0 pt-3 md:pt-16'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <div className='hidden md:flex justify-center w-full'>
          <Image
            src={ UCMLogo }
            width={ 89 }
            height={ 84 }
          />
        </div>
        <div className='pt-8'>
          <h1 className='font-proximaNova400 md:font-proximaNova500 text-[32px]
          md:text-[56px] tracking-wider uppercase text-left md:text-center'>
            { router.locale == 'ua' ? post.localizations[0].title : post.title }
          </h1>
          <div className='flex flex-col items-center justify-center w-full pt-6
          md:pt-0'>
            <span className='font-proximaNova200 text-gray-500 uppercase
            text-base md:text-lg leading-[18px] text-left md:text-center w-full'>
              { router.locale == 'ua'
                ? post.localizations[0].tags[0].name
                : post.tags[0].name
              }
              {' | '}
              { `${ post.minutesRead } ${ router.locale == 'ua'
              ? 'хвилин читання'
              : 'min read' }` }
            </span>
            <span className='inline-block md:hidden font-proximaNova200 text-gray-500 uppercase
            text-base md:text-lg leading-[18px] text-left md:text-center w-full'>
              { moment(post.createdAt).format('MMMM DD, YYYY') }
            </span>
          </div>
          <div className='pt-8 md:pt-16'>
            <img
              className='min-w-full'
              src={ post.featuredImage.url }
              alt={ router.locale == 'ua' ? post.localizations[0].title : post.title
            }
            />
          </div>

          <div className='absolute hidden small-notebooks:flex flex-col justify-start'>
            <span className='mt-16 pt-4 font-proximaNova400 text-4xl leading-8
            text-center tracking-wider px-2 border-blue-500 border-t-4'>
              { moment(post.createdAt).format('DD') }
            </span>
            <span className='font-proximaNova300 text-sm text-center'>
              { moment(post.createdAt).format('MMM, YY') }
            </span>
            
            <div className='hidden small-notebooks:flex flex-col gap-4 pt-8'>
              <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] h-16 w-16
              rounded-full cursor-pointer'>
                <FacebookShareButton
                  url={ `${ baseURL }${ router.asPath }` }
                  quote={'Check out this post from Ukrainian Club of Moncton!'}
                >
                  <Image
                    src={ FacebookIcon }
                    width={ 64 }
                    height={ 64 }
                  />
                </FacebookShareButton>
              </div>

              <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] h-16 w-16
              rounded-full cursor-pointer'>
                <TwitterShareButton
                  url={ `${ baseURL }${ router.asPath }` }
                  quote={'Check out this post from Ukrainian Club of Moncton!'}
                >
                  <Image
                    src={ TwitterIcon }
                    width={ 64 }
                    height={ 64 }
                  />
                </TwitterShareButton>
              </div>

              <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] h-16 w-16
              rounded-full cursor-pointer'>
                <div
                  onClick={
                    () => {
                      setCopied(true)
                      navigator.clipboard.writeText(`${ baseURL }${ router.asPath }`)
                    }
                  }
                >
                  <div className=''>
                    <Image
                      src={ copied ? ShareIcon : GreenShareIcon }
                      width={ 64 }
                      height={ 64 }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full min-w-full max-w-[960px] flex justify-center'>
            <div
              className='w-full max-w-[960px] custom-post-page-styles'
              dangerouslySetInnerHTML={
                {__html: router.locale == 'ua'
                ? post.localizations[0].content.html
                : post.content.html}
              }
            >
            </div>

          </div>
          <div className='min-w-full max-w-[960px] flex flex-col justify-center
          items-center'>
            <span className='font-proximaNova300 text-2xl leading-[36px]
            w-full max-w-[960px] text-left'>
              TAGS:
              {' '}
              {
                post.tags.length < 1
                ?
                post.tags.map(tag => (
                  <span
                  key={ tag.name }
                  className='uppercase text-blue-500'>
                    { tag.name }
                    {', '}
                  </span>
                ))
                :
                post.tags.map(tag => (
                  <span
                    key={ tag.name }
                    className='uppercase text-blue-500'
                  >
                    { tag.name }
                  </span>
                ))
              }
            </span>

            <div className='flex gap-4 pt-8 w-full max-w-[960px]'>
              <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] h-16 w-16
              rounded-full cursor-pointer'>
                <FacebookShareButton
                  url={ `${ baseURL }${ router.asPath }` }
                  quote={'Check out this post from Ukrainian Club of Moncton!'}
                >
                  <Image
                    src={ FacebookIcon }
                    width={ 64 }
                    height={ 64 }
                  />
                </FacebookShareButton>
              </div>

              <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] h-16 w-16
              rounded-full cursor-pointer'>
                <TwitterShareButton
                  url={ `${ baseURL }${ router.asPath }` }
                  quote={'Check out this post from Ukrainian Club of Moncton!'}
                >
                  <Image
                    src={ TwitterIcon }
                    width={ 64 }
                    height={ 64 }
                  />
                </TwitterShareButton>
              </div>

              <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] h-16 w-16
              rounded-full cursor-pointer'>
                <Link
                  href='https://twitter.com'
                >
                  <Image
                    src={ ShareIcon }
                    width={ 64 }
                    height={ 64 }
                  />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <RelatedPosts
              slug={ post.slug }
              category={ post.category.name }
              tags={ post.tags.map((tag) => tag.slug) }
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}