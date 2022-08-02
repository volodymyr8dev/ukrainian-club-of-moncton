import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from './../services/apollo'

import { Layout } from './../components/layout/Layout'
import 'tailwindcss/tailwind.css'
import './../styles/globals.css'
import './../styles/custom-swiper.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ApolloProvider client={ client }>
      <Layout>
        <Component { ...pageProps } />
      </Layout>
    </ApolloProvider>
    </>
  )
}

export default MyApp