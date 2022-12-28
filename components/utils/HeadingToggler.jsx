import prevArrow from './../../assets/images/prev-arrow.webp'
import nextArrow from './../../assets/images/next-arrow.webp'
import Image from 'next/image'

export const HeadingToggler = (props) => {
  return (
    <>
      <div className='flex justify-between items-center pb-12 md:pb-16'>
        <div>
          <h2 className='font-proximaNova400 text-[32px] md:text-[40px] uppercase
          tracking-wider'>
            { props.heading }
          </h2>
        </div>
        {props.relatedPosts > 6 && 
        <div className='hidden md:flex gap-8'>
          <Image
            className={`${ props.togglerPrevClass } cursor-pointer`}
            src={ prevArrow }
            alt='previous'
            width={ 64 }
            height={ 64 }
          />
          <Image
            className={`${ props.togglerNextClass } cursor-pointer`}
            src={ nextArrow }
            alt='next'
            width={ 64 }
            height={ 64 }
          />
        </div>
        }
      </div>
    </>
  )
}