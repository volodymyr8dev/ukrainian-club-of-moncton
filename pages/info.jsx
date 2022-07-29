import Head from 'next/head'
import { DonationSupport } from '../components/sections/info/DonationSupport'
import { InfoFront } from '../components/sections/info/InfoFront'
import { Informative } from '../components/sections/info/Informative'

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
