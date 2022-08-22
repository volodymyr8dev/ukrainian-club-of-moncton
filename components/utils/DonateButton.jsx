import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import yellowHeart from './../../assets/images/yellow-heart.svg'

import { useRouter } from 'next/router'
import { getTexts } from './../../services/getTexts.js'

export const DonateButton = () => {
  const { t } = useTranslation('common')
  const { data, loading, error } = getTexts()
  const { locale } = useRouter()

  if (loading) return <span></span>
  if (error) return <span></span>

  const hostedButtonId = process.env.NEXT_PUBLIC_HOSTED_BUTTON_ID

  return (
    <>
    <a
      href={`https://www.sandbox.paypal.com/donate/?hosted_button_id=${hostedButtonId}`}
      target='_blank'
      rel='noreferrer'
    >
      <div
        className='cursor-pointer font-proximaNova400 text-base md:text-xl
        bg-blue-500 py-3 md:py-[14px] px-3 smaller-phones:px-6
        small-phones:px-[32px] rounded-[50px] uppercase flex gap-2'>
        <span className='text-gray-100'>
          {          
            locale === 'en'
            ? data.englishTexts[62].textContent
            : data.ukrainianTexts[62].textContent
          }
        </span>
        <Image
          src={ yellowHeart }
          alt='heart'
        />
      </div>
    </a>
    </>
  )
}