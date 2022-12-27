import Image from 'next/image'

import yellowHeart from './../../assets/images/yellow-heart.webp'

import { useRouter } from 'next/router'
import { getTexts } from './../../services/getTexts.js'

export const DonateButton = ({link,img,text}) => {
  const { locale } = useRouter()
  const { data, loading, error } = getTexts(locale)

  if (loading) return <span></span>
  if (error) return <span></span>

  const paypalURL = process.env.NEXT_PUBLIC_PAYPAL_URL

  return (
    <>
    <a
      href={ link? link: paypalURL }
      target='_blank'
      rel='noreferrer'
    >
      <div
        className='cursor-pointer font-proximaNova400 text-base md:text-xl
        bg-[#006DB6] py-3 md:py-[14px] px-3 smaller-phones:px-6 flex items-center
        small-phones:px-[32px] rounded-[50px] uppercase flex gap-2 justify-between'>
        <span className='text-gray-100'>
          {text ? text: data["donate-now"]}
        </span>
        <div className="flex items-center pr-[4px]">
        <Image
          src={ img? img: yellowHeart }
          alt='heart'
          width={20}
          height={21}
        />
        </div>

      </div>
    </a>
    </>
  )
}