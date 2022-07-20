import React from 'react'
import { Layout } from './../components/layout/Layout'
import 'tailwindcss/tailwind.css'
import './../styles/globals.css'
import './../styles/custom-swiper.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <Component { ...pageProps } />
    </Layout>
    </>
  )
}

export default MyApp