import React from 'react'
import Head from 'next/head'

import {getPostDetails, getPosts} from '../../services/index'

import {PostDetail} from '../../components/utils/PostDetail'
import {LOCALE_UA, REVALIDATION_TIME_POST} from "../../services/constants";
import FourOhFour from "../404";
import {useRouter} from "next/router";

export default function PostDetails({ post }) {
  if (useIsPostInvalid(post)) {
    return <FourOhFour/>
  }

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

function useIsPostInvalid(post) {
  const { locale } = useRouter()
  return !post || locale === LOCALE_UA && post.localizations.length === 0;
}

export async function getStaticProps({ params }) {
  const postData = await getPostDetails(params.slug)

  return {
    props: { post: postData },
    revalidate: REVALIDATION_TIME_POST
  }
}

export async function getStaticPaths() {
  const receivedPosts = await getPosts()

  const posts = receivedPosts.filter(post => post.category)

  return {
    paths: posts.map(({ node: { slug }}) => ({ params: { slug }})),
    fallback: 'blocking'
  }
}