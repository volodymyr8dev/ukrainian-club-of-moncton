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
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 xl:min-w-[376px] pb-8 tablets:pb-0 max-w-full tablets:max-w-[376px]
      min-h-0 tablets:min-h-[260px] max-h-full tablets:max-h-[296px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ GreenVolunteerIcon }
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Volunteer with Us
        </span>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 xl:min-w-[376px] pb-8 tablets:pb-0 max-w-full tablets:max-w-[376px]
      min-h-0 tablets:min-h-[260px] max-h-full tablets:max-h-[296px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ GreenFollowIcon }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Fundraise for Ukrainesupport our page, follow, like and share our posts!
        </span>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 xl:min-w-[376px] pb-8 tablets:pb-0 max-w-full tablets:max-w-[376px]
      min-h-0 tablets:min-h-[260px] max-h-full tablets:max-h-[296px] h-full w-full
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
      </div>
    </div>

    <div className='flex w-full gap-8 md:gap-5 tablets:gap-10 justify-between
    flex-col tablets:flex-row pt-8 tablets:pt-16'>
      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 xl:min-w-[584px] pb-8 tablets:pb-0 max-w-full tablets:max-w-[584px]
      min-h-0 tablets:min-h-[296px] max-h-full tablets:max-h-[296px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ GreenJobsIcon }
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Offer jobs for Ukrainians choosing to come live in Greater Moncton Area
        </span>
        <span className='text-center -mt-4 font-proximaNova200 text-lg leading-[18px]'>
          <a
            href='https://tinyurl.com/3y97vx79'
            target='_blank'
            rel='noreferrer'
          >
            https://tinyurl.com/3y97vx79
          </a>
        </span>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 xl:min-w-[584px] pb-8 tablets:pb-0 max-w-full tablets:max-w-[584px]
      min-h-0 tablets:min-h-[296px] max-h-full tablets:max-h-[296px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ GreenPeaceIcon }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Support Ukraine, buy Peace bonds
        </span>
        <span className='text-center -mt-4 font-proximaNova200 text-lg leading-[18px]'>
          <a
            href='https://tinyurl.com/yxbtz7ay'
            target='_blank'
            rel='noreferrer'
          >
            https://tinyurl.com/yxbtz7ay
          </a>
        </span>
      </div>
    </div>
    </>
  )
}