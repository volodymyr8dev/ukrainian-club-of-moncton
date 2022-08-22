import { Gallery } from '../../utils/Gallery'
import { HeadingToggler } from './../../utils/HeadingToggler'

import { useRouter } from 'next/router'
import { getTexts } from './../../../services/getTexts.js'

export const ClubAbout = () => {
  const { data, loading, error } = getTexts()
  const { locale } = useRouter()
  
  if (loading) return <span></span>
  if (error) return <span></span>

  return (
    <section className='flex justify-center mb-24 md:mb-28 pl-6 xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <HeadingToggler
          heading={
            locale === 'en'
            ? data.englishTexts[57].textContent
            : data.ukrainianTexts[57].textContent
          }
          togglerPrevClass='gallery-prev'
          togglerNextClass='gallery-next'
        />
        <div className='flex justify-between'>
          <Gallery />
        </div>
      </div>
    </section>
  )
}