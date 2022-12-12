import Head from 'next/head'
import { Contacts } from '../components/sections/about/Contacts'
import { Informative } from '../components/sections/about/Informative'
import { AboutFront } from './../components/sections/about/AboutFront'

import { useRouter } from 'next/router'
import { getTexts } from './../services/getTexts.js'

export default function About() {
  const router = useRouter()
  
  const { data, loading, error } = getTexts(router.locale)
  const { data:dataFrom100, loading:loadingFrom100, error:errorFrom100 } = getTexts(router.locale,100)

  if (loading || loadingFrom100) return <span></span>
  if (error || errorFrom100) return <span></span>

  return (
    <>
    <Head>
      <title>About - {dataFrom100['assosiation-of-moncton']}</title>
      <meta
        name="description"
        content={data["about-description-seo"]}
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
