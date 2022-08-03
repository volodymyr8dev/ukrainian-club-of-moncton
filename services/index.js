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
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges
}

export const getPostDetails = async (slug) => {
  const query = gql`
    query getPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        createdAt
        slug
        title
        excerpt
        tags {
          name
          slug
        }
        featuredImage {
          url
        }
        category {
          name
          slug
        }
        content {
          raw
          html
          markdown
          text
        }
        minutesRead
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug })

  return result.post
}