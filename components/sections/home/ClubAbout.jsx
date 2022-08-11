import useTranslation from 'next-translate/useTranslation'
import { Gallery } from '../../utils/Gallery'
import { HeadingToggler } from './../../utils/HeadingToggler'

export const ClubAbout = () => {
  const { t } = useTranslation('home')

  return (
    <section className='flex justify-center mb-24 md:mb-28 pl-6 xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <HeadingToggler
          heading={ t('about-ukr-club') }
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