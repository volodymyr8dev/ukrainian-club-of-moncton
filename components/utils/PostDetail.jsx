import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

import UCMLogo from './../../assets/images/ucm-logo.svg'
import FacebookIcon from './../../assets/images/post/facebook.svg'
import TwitterIcon from './../../assets/images/post/twitter.svg'
import ShareIcon from './../../assets/images/post/share.svg'

export const PostDetail = ({ post }) => {
  return (
    <>
    <section className='flex justify-center mb-[72px] md:mb-24 px-6 md:px-6
    xl:px-0 pt-16'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <div className='flex justify-center w-full'>
          <Image
            src={ UCMLogo }
            width={ 89 }
            height={ 84 }
          />
        </div>
        <div className='pt-8'>
          <h1 className='font-proximaNova500 text-[56px] tracking-wider
          text-center uppercase'>
            { post.title }
          </h1>
          <div className='flex justify-center w-full'>
            <span className='font-proximaNova200 text-gray-500 uppercase
            text-lg leading-[18px] text-center'>
              { post.tags[0].name }
              {' | '}
              { `${ post.minutesRead } min read` }
            </span>
          </div>
          <div className='pt-16'>
            <img
              className='min-w-full'
              src={ post.featuredImage.url }
              alt={ post.title }
            />
          </div>

          <div className='absolute flex flex-col justify-start'>
            <span className='mt-16 pt-4 font-proximaNova400 text-4xl leading-8 text-center
            tracking-wider px-2 border-blue-500 border-t-4'>
              { moment(post.createdAt).format('DD') }
            </span>
            <span className='font-proximaNova300 text-sm text-center'>
              { moment(post.createdAt).format('MMM, YY') }
            </span>

            <div className='hidden'>
              <Link
                href='https://facebook.com'
              >
                <Image
                  src={ FacebookIcon }
                  width={ 64 }
                  height={ 64 }
                />
              </Link>
            </div>
          </div>

          <div className='w-full min-w-full max-w-[960px] flex justify-center'>
            <div
              className='w-full max-w-[960px] custom-post-page-styles'
              dangerouslySetInnerHTML={ {__html: post.content.html} }
            >
            </div>

          </div>
          <div className='min-w-full max-w-[960px] flex justify-center'>
            <span className='font-proximaNova300 text-2xl leading-[36px]'>
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
                  </span>
                ))
                :
                post.tags.map(tag => (
                  <span
                    key={ tag.name }
                    className='uppercase text-blue-500'
                  >
                    { tag.name }
                    {', '}
                  </span>
                ))
              }
            </span>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}