import Head from 'next/head'
import { Header } from '../components/layout/Header'
import { HomeFront } from '../components/sections/home/HomeFront'
import { BottomCTA } from '../components/sections/home/BottomCTA'
import { ClubAbout } from '../components/sections/home/ClubAbout'
import { ClubQuestions } from '../components/sections/home/ClubQuestions'
import { Quote } from '../components/sections/home/Quote'
import { UpcomingEvents } from '../components/sections/home/UpcomingEvents'
import { ThankYouModal } from '../components/utils/ThankYouModal'

export default function Home() {
  return (
    <>
    <Head>
    <title>Home - Ukrainian Club of Moncton</title>
      <meta
        name="description"
        content="To be written"
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
    
      
    <main id='main' className='relativee'>
      <HomeFront />
      <ClubQuestions />
      <UpcomingEvents />
      <ClubAbout />
      <Quote />
      <BottomCTA />
    </main>
    <ThankYouModal />
    </>
  )
}
