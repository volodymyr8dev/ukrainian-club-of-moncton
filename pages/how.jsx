import Head from 'next/head'
import { DonationSupport } from '../components/sections/how/DonationSupport'
import { HowFront } from '../components/sections/how/HowFront'
import { Informative } from '../components/sections/how/Informative'

import { useRouter } from 'next/router'
import { getTexts } from './../services/getTexts.js'

export default function How() {
  const router = useRouter()
  const { data, loading, error } = getTexts(router.locale)

  if (loading) return <span></span>
  if (error) return <span></span>

  return (
    <>
    <Head>
      <title>How can I help? - Ukrainian Assosiation of Moncton</title>
      <meta
        name="description"
        content={data["how-tag-seo"]}
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
