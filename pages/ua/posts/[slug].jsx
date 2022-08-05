import React from 'react'
import Head from 'next/head'

import { getPosts, getPostDetailsUA } from '../../../services/index'

import { PostDetailUA } from '../../../components/utils/PostDetailUA'

export default function PostDetailsUA({ post }) {
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
      <PostDetailUA post={ post } />
    </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getPostDetailsUA(params.slug)

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