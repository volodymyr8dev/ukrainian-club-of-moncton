import Head from 'next/head'
import { InfoFront } from '../components/sections/info/InfoFront'
import { Informative } from '../components/sections/info/Informative'
import { PostsDisplay } from '../components/sections/info/PostsDisplay'

export default function Info() {
  return (
    <>
    <Head>
      <title>Info - Ukrainian Club of Moncton</title>
      <meta
        name="description"
        content="To be written"
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
    
    <main id='main'>
      <InfoFront />
      <div className='info-section'>
        <div className='info-section-bg'>
          <Informative />
          <PostsDisplay />
        </div>
      </div>
    </main>
    </>
  )
}
