import prevArrow from './../../assets/images/prev-arrow.svg'
import nextArrow from './../../assets/images/next-arrow.svg'
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
        <div className='hidden md:flex gap-8'>
          <Image
            className={`${ props.togglerPrevClass } cursor-pointer`}
            src={ prevArrow }
            width={ 64 }
            height={ 64 }
          />
          <Image
            className={`${ props.togglerNextClass } cursor-pointer`}
            src={ nextArrow }
            width={ 64 }
            height={ 64 }
          />
        </div>
      </div>
    </>
  )
}