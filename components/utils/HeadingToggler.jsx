import prevArrow from './../../assets/images/prev-arrow.svg'
import nextArrow from './../../assets/images/next-arrow.svg'
import Image from 'next/image'

export const HeadingToggler = (props) => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='font-proximaNova400 text-[40px]'>
            { props.heading }
          </h2>
        </div>
        <div className='flex gap-8'>
          <Image
            src={ prevArrow }
            width={ 64 }
            height={ 64 }
          />
          <Image
            src={ nextArrow }
            width={ 64 }
            height={ 64 }
          />
        </div>
      </div>
    </>
  )
}