import Image from 'next/image'

import yellowHeart from './../../assets/images/yellow-heart.svg'

export const DonateButton = () => {
  return (
    <>
    <a href='#'>
      <div
        className='cursor-pointer font-proximaNova400 text-xl bg-blue-500
        py-3 md:py-[14px] px-3 smaller-phones:px-6 small-phones:px-[32px] rounded-[50px]
        uppercase flex gap-4'>
        <span className='text-gray-100'>
          Donate now
        </span>
        <Image
          src={ yellowHeart }
        />
      </div>
    </a>
    </>
  )
}