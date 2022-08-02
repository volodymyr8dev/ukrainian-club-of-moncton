import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_CONTENT_API

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection (orderBy: createdAt_DESC) {
        edges {
          node {
            title
            slug
            categories {
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
            content
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges
}

//Post page
export const getPostDetails = async (slug) => {
  const query = gql`
    query getPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        slug
        categories {
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
  const result = await request(graphqlAPI, query, { slug })

  return result.post
}

export const getMostRecentPosts = gql`
  query {
    posts (
      orderBy: createdAt_ASC
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
/*
export const getMostRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
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

  const result = await request(graphqlAPI, query)

  return result.posts
}
*/

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories }} }
        last: 6
      ) {
        title
        tags {
          name
          slug
        }
        excerpt
        createdAt
        slug
        featuredImage {
          url
        }
      }
    }
    `

  const result = await request(graphqlAPI, query, { categories, slug })

  return result.posts
}

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(
        where: {categories_some: {slug: $slug}},
        orderBy: createdAt_DESC) {
        edges {
          cursor
          node {
            title
            slug
            excerpt
            createdAt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            tags {
              name
              slug
            }
            minutesRead
            address
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug })

  return result.postsConnection.edges
}