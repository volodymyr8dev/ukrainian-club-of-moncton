import { ApolloClient, InMemoryCache } from '@apollo/client'

const api = {
  contentApiURI: process.env.NEXT_PUBLIC_GRAPHCMS_CONTENT_API,
  contentApiAuthToken: process.env.NEXT_PUBLIC_GRAPHCMS_PERMANENT_AUTH_TOKEN
}

export const client = new ApolloClient({
  uri: api.contentApiURI,
  headers: {
    'Authorization': `Bearer ${ api.contentApiAuthToken }`
  },
  cache: new InMemoryCache()
})