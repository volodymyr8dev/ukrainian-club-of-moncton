import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from './../services/apollo'

import NextNProgress from 'nextjs-progressbar'

import { Layout } from './../components/layout/Layout'
import 'tailwindcss/tailwind.css'
import './../styles/globals.css'
import './../styles/custom-swiper.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NextNProgress
      color='#5271F2'
    />
    <ApolloProvider client={ client }>
      <Layout>
        <Component { ...pageProps } />
      </Layout>
    </ApolloProvider>
    </>
  )
}

export default MyApp