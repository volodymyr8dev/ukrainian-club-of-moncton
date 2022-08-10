import Link from 'next/link'
import { gql } from 'graphql-request'

import { hygraph } from '../../services/index'

const limit = 1

function PostPage({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  posts,
}) {
  return (
    <>
      <pre>{JSON.stringify(posts, 2, null)}</pre>
      {hasPreviousPage ? (
        <Link href={`${currentPageNumber - 1}`}>
          <a>Previous page</a>
        </Link>
      ) : null}
      {hasNextPage ? (
        <Link href={`${currentPageNumber + 1}`}>
          <a>Next page</a>
        </Link>
      ) : null}
    </>
  )
}

export async function getStaticPaths() {
  const query = gql`
    {
      postsConnection {
        aggregate {
          count
        }
      }
    }
  `
  const { postsConnection } = await hygraph.request(query);

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
    query postsPageQuery($limit: Int!, $offset: Int!) {
      postsConnection(first: $limit, skip: $offset) {
        posts: edges {
          node {
            id
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
  };
}

export default PostPage
