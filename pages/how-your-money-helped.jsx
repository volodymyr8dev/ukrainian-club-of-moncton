import Head from 'next/head'
import { MoneyHelpedFront } from '../components/sections/moneyhelped/MoneyHelpedFront'
import { Informative } from '../components/sections/moneyhelped/Informative'
import { PostsDisplay } from '../components/sections/moneyhelped/PostsDisplay'

export default function HowYourMoneyHelped() {
  return (
    <>
    <Head>
      <title>How your money helped - Ukrainian Club of Moncton</title>
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
      <MoneyHelpedFront />
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
