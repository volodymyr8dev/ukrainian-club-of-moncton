import Head from 'next/head'
import { DonationSupport } from '../components/sections/how/DonationSupport'
import { HowFront } from '../components/sections/how/HowFront'
import { Informative } from '../components/sections/how/Informative'

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
          <DonationSupport />
        </div>
      </div>
    </main>
    </>
  )
}
