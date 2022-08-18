import React from 'react'
import Head from 'next/head'

import { getPosts, getPostDetails } from '../../services/index'

import { Header } from '../../components/layout/Header'
import { PostDetail } from '../../components/utils/PostDetail'

export default function PostDetails({ post }) {
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
    
      
    <div>
      <PostDetail post={ post } />
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
    fallback: 'blocking'
  }
}