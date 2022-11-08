import Head from 'next/head'
import { HomeFront } from '../components/sections/home/HomeFront'
import { BottomCTA } from '../components/sections/home/BottomCTA'
import { ClubAbout } from '../components/sections/home/ClubAbout'
import { ClubQuestions } from '../components/sections/home/ClubQuestions'
import { Quote } from '../components/sections/home/Quote'
import { UpcomingEvents } from '../components/sections/home/UpcomingEvents'
import { ThankYouModal } from '../components/utils/ThankYouModal'

import { useRouter } from 'next/router'
import { getTexts } from './../services/getTexts.js'

export default function Home() {
  const router = useRouter()
  const { data, loading, error } = getTexts()

  if (loading) return <span></span>
  if (error) return <span></span>

  return (
    <>
    <Head>
    <title>Home - Ukrainian Club of Moncton</title>
      <meta
        name="description"
        content={
          router.locale === 'en'
          ? data.englishTexts[80].textContent
          : data.ukrainianTexts[80].textContent
        }
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
    
      
    <main id='main' className='relativee'>
      <HomeFront />
      <UpcomingEvents />
      <ClubAbout />
      <Quote />
      <BottomCTA />
    </main>
    <ThankYouModal />
    </>
  )
}
