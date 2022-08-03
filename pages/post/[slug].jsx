import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'

import { getPosts, getPostDetails } from '../../services'

import { PostDetail } from '../../components/utils/PostDetail'

const GET_POSTS_QUERY = gql`
  query getPosts {
    postsConnection (orderBy: createdAt_DESC) {
      edges {
        node {
          title
          slug
          category {
            name
            slug
          }
          tags {
            name
            slug
          }
          excerpt
          minutesRead
          address
          featuredImage {
            url
          }
          createdAt
        }
      }
    }
  }
`

const GET_POST_DETAILS_QUERY = gql`
  query getPostDetails($slug: String!) {
    post(where: { slug: $slug }) {
      title
      slug
      category {
        name
        slug
      }
      tags {
        name
        slug
      }
      excerpt
      minutesRead
      address
      featuredImage {
        url
      }
      createdAt
      content {
        raw
      }
    }
  }
`

export default function PostDetails({ post }) {
  const router = useRouter()

  if(router.isFallback) return <Loader />

  const {
    loading: loadingPosts,
    error: errorPosts,
    data: dataPosts
  } = useQuery(GET_POSTS_QUERY)

  const {
    loading: loadingDetails,
    error: errorDetails,
    data: dataDetails
  } = useQuery(GET_POST_DETAILS_QUERY, {
    variables: { slug }
  })

  if (loadingPosts) return <p>Loading...</p>
  if (errorPosts) return <p>Error</p>

  if (loadingDetails) return <p>Loading...</p>
  if (errorDetails) return <p>Error</p>

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