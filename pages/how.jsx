import Head from 'next/head'
import { DonationSupport } from '../components/sections/how/DonationSupport'
import { HowFront } from '../components/sections/how/HowFront'
import { Informative } from '../components/sections/how/Informative'

export default function How() {
  return (
    <>
    <Head>
      <title>How can I help? - Ukrainian Club of Moncton</title>
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
      <HowFront />
      <div className='how-section'>
        <div className='how-section-bg'>
          <Informative />
          <DonationSupport />
        </div>
      </div>
    </main>
    </>
  )
}
