import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { gql, useQuery } from '@apollo/client'
import { getMostRecentPosts } from '../../services'

import sampleImage from './../../assets/images/sample-photo-3.svg'
import locationImage from './../../assets/images/card-location.svg'

const GET_MOST_RECENT_POSTS_QUERY = gql`
  query getRecentPosts {
    posts(
      orderBy: createdAt_ASC,
      last: 6
    ) {
    title
      tags {
        name
        slug
      }
      excerpt
      featuredImage {
        url
      }
      slug
      createdAt
    }
  }
`

export const EventCard = () => {
  const { loading, error, data } = useQuery(GET_MOST_RECENT_POSTS_QUERY)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
    { data.posts.map(post => (
      <div
        key={ post.title }
        className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] max-w-full
        w-full max-h-full h-full overflow-hidden
        rounded-3xl'
      >
        <div className='w-full'>
          <Image
            className='w-full max-h-52'
            src={ sampleImage }
            alt={ post.title }
            title={ post.title }
            layout='responsive'
          />
        </div>
        <div className='px-4 lg:px-6 pt-6'>
          <span className='font-proximaNova200 bg-yellow-100 text-yellow-900
          px-6 py-2 rounded-[20px]'>
            { post.tags.name }
          </span>

          <div className='pt-8'>
            <h6 className='font-proximaNova500 uppercase text-xl md:text-2xl'>
              { post.title }
            </h6>
            <p className='pr-4 md:pr-0 font-proximaNova200 text-base md:text-lg
            pt-2 leading-[18px]'>
              { post.excerpt }
            </p>

            <div className='flex gap-[18px] items-center pt-6'>
              <Image
                src={ locationImage }
                width={ 18.8 }
                height={ 24 }
              />

              <span className='font-proximaNova200 text-gray-500 text-base
              md:text-lg leading-[18px]'>
                { post.address }
              </span>
            </div>

            <div className='w-full md:w-auto flex justify-between items-center 
            pt-10 pb-6'>
              <span className='font-proximaNova200 text-gray-500 text-base
              md:text-lg leading-[18px]'>
                April 24, 2022
              </span>

              <Link href='/placeholder'>
                <span className='bg-yellow-500 text-gray-100 py-3 px-8 lg:px-10
                rounded-[64px] font-proximaNova400 text-base md:text-lg text-center
                cursor-pointer'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}