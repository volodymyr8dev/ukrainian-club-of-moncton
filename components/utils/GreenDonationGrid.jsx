import Image from 'next/image'

import useTranslation from 'next-translate/useTranslation'

import GreenVolunteerIcon from './../../assets/images/donation-sup-green/green-volunteer.svg'
import GreenFollowIcon from './../../assets/images/donation-sup-green/green-follow.svg'
import GreenFundraiseIcon from './../../assets/images/donation-sup-green/green-fundraise.svg'
import GreenJobsIcon from './../../assets/images/donation-sup-green/green-jobs.svg'
import GreenPeaceIcon from './../../assets/images/donation-sup-green/green-peace.svg'

export const GreenDonationGrid = () => {
  let { t } = useTranslation()

  return (
    <>
    <div className='flex w-full gap-8 md:gap-5 tablets:gap-10 justify-between
    flex-col tablets:flex-row pt-16'>
      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-between items-center flex-col px-8 xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full tablets:max-w-[376px]
      min-h-[376px] max-h-full tablets:max-h-[376px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ GreenVolunteerIcon }
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Volunteer with Us
        </span>
        <a
          className='w-full max-w-[224px] py-4 px-16 bg-green-500 rounded-[64px]
          font-proximaNova400 text-lg leading-[18px] text-gray-100'
          href='#'
        >
          Learn More
        </a>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-between items-center flex-col px-8 xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full tablets:max-w-[376px]
      min-h-[376px] max-h-full tablets:max-h-[376px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ GreenFollowIcon }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Fundraise for Ukrainesupport our page, follow, like and share our posts!
        </span>
        <a
          className='w-full max-w-[224px] py-4 px-16 bg-green-500 rounded-[64px]
          font-proximaNova400 text-lg leading-[18px] text-gray-100'
          href='#'
        >
          Learn More
        </a>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-between items-center flex-col px-8 xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full tablets:max-w-[376px]
      min-h-[376px] max-h-full tablets:max-h-[376px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ GreenFundraiseIcon }
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Fundraise for Ukraine
        </span>
        <span className='text-center -mt-4 font-proximaNova200 text-lg leading-[18px]'>
          #CAwithUAroots
        </span>
        <a
          className='w-full max-w-[224px] py-4 px-16 bg-green-500 rounded-[64px]
          font-proximaNova400 text-lg leading-[18px] text-gray-100'
          href='#'
        >
          Learn More
        </a>
      </div>
    </div>
    </>
  )
}