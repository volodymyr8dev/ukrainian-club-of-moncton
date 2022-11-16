import { Gallery } from '../../utils/Gallery'
import { HeadingToggler } from './../../utils/HeadingToggler'

import { useRouter } from 'next/router'
import { getTexts } from './../../../services/getTexts.js'

export const ClubAbout = () => {
  const { locale } = useRouter()
  const { data, loading, error } = getTexts(locale)
  
  if (loading) return <span></span>
  if (error) return <span></span>

  return (
    <section className='flex justify-center mb-24 md:mb-28 pl-6 xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <div className='md:pr-6'>
          <HeadingToggler
            heading={data["home-about-club"]}
            togglerPrevClass='gallery-prev'
            togglerNextClass='gallery-next'
          />
        </div>
        <div className='flex justify-between'>
          <Gallery />
        </div>
      </div>
    </section>
  )
}