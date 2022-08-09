import Head from 'next/head'
import { EventsFront } from '../components/sections/events/EventsFront'
import { Informative } from '../components/sections/events/Informative'
import { PostsDisplay } from '../components/sections/events/PostsDisplay'

export default function Events() {
  return (
    <>
    <Head>
      <title>Events - Ukrainian Club of Moncton</title>
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
      <EventsFront />
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
