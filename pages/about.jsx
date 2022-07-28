import Head from 'next/head'
import { Contacts } from '../components/sections/about/Contacts'
import { Informative } from '../components/sections/about/Informative'
import { AboutFront } from './../components/sections/about/AboutFront'

export default function About() {
  return (
    <>
    <Head>
      <title>About - Ukrainian Club of Moncton</title>
      <meta
        name="description"
        content="To be written"
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
    
    <AboutFront />
    <main id='main'>
      <div className='about-section'>
        <div className='about-section-bg'>
          <Informative />
          <Contacts />
        </div>
      </div>
    </main>
    </>
  )
}
