import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'

import { getPosts, getPostDetails } from '../../services'

import { PostDetail } from '../../components/utils/PostDetail'



export default function PostDetails({ post }) {
  const router = useRouter()



  return (
    <>
    <Head>
      <title>{ post.title } - Ukrainian Club of Moncton</title>
      <meta
        name="description"
        content={ post.excerpt }
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>

    <div className=''>
      <div className=''>
        <PostDetail post={ post } />
      </div>
    </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getPostDetails(params.slug)

  return {
    props: { post: postData }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug }}) => ({ params: { slug }})),
    fallback: true
  }
}