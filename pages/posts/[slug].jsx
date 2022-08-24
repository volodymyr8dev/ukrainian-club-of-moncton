import React from 'react'
import Head from 'next/head'

import {getPostDetails, getPosts} from '../../services/index'

import {PostDetail} from '../../components/utils/PostDetail'
import {REVALIDATION_TIME_POST} from "../../services/constants";

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
    props: { post: postData },
    revalidate: REVALIDATION_TIME_POST
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug }}) => ({ params: { slug }})),
    fallback: 'blocking'
  }
}