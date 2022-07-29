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
    <div className='flex gap-10 justify-between pt-16'>
      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 min-w-[376px] max-w-[376px] min-h-[260px] max-h-[260px] h-full'>
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
      gap-8 min-w-[376px] max-w-[376px] min-h-[260px] max-h-[260px] h-full'>
        <Image
          src={ GreenFollowIcon }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Fundraise for Ukrainesupport our page, follow, like and share our posts!
        </span>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 min-w-[376px] max-w-[376px] min-h-[260px] max-h-[260px] h-full'>
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

    <div className='flex gap-10 justify-between pt-10'>
      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 min-w-[584px] max-w-[584px] min-h-[296px] max-h-[296px] h-full'>
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
      gap-8 min-w-[584px] max-w-[584px] min-h-[296px] max-h-[296px] h-full'>
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