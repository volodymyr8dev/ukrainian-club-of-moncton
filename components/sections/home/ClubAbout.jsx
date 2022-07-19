import { Gallery } from '../../utils/Gallery'
import { HeadingToggler } from './../../utils/HeadingToggler'

export const ClubAbout = () => {
  return (
    <section className='flex justify-center mb-28'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <HeadingToggler heading='About Ukrainian Club in Moncton' />
        <div className='flex justify-between'>
          <Gallery />
        </div>
      </div>
    </section>
  )
}