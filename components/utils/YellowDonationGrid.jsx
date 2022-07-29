import Image from 'next/image'

import useTranslation from 'next-translate/useTranslation'

import YellowCameraIcon from './../../assets/images/donation-sup-yellow/yellow-camera.svg'
import YellowSmileIcon from './../../assets/images/donation-sup-yellow/yellow-smile.svg'
import YellowVideoIcon from './../../assets/images/donation-sup-yellow/yellow-video.svg'
import YellowArtisanIcon from './../../assets/images/donation-sup-yellow/yellow-artisan.svg'
import YellowBusinessIcon from './../../assets/images/donation-sup-yellow/yellow-business.svg'
import YellowPlaneIcon from './../../assets/images/donation-sup-yellow/yellow-plane.svg'

export const YellowDonationGrid = () => {
  let { t } = useTranslation()

  return (
    <>
    <div className='flex w-full gap-8 md:gap-5 tablets:gap-10 justify-between
    flex-col tablets:flex-row pt-16'>
      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 xl:min-w-[376px] pb-8 tablets:pb-0 max-w-full tablets:max-w-[376px]
      min-h-0 tablets:min-h-[278px] max-h-full tablets:max-h-[296px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ YellowCameraIcon }
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Participate in our photo project
        </span>
        <span className='text-center -mt-4 font-proximaNova200 text-lg leading-[18px]'>
          #kidsartforukraine
        </span>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 xl:min-w-[376px] pb-8 tablets:pb-0 max-w-full tablets:max-w-[376px]
      min-h-0 tablets:min-h-[278px] max-h-full tablets:max-h-[296px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ YellowSmileIcon }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
        Sell our awesome stickers at your place of work
        </span>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 xl:min-w-[376px] pb-8 tablets:pb-0 max-w-full tablets:max-w-[376px]
      min-h-0 tablets:min-h-[278px] max-h-full tablets:max-h-[296px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ YellowVideoIcon }
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
        Participate in our video project
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
      gap-8 xl:min-w-[376px] pb-8 tablets:pb-0 max-w-full tablets:max-w-[376px]
      min-h-0 tablets:min-h-[332px] max-h-full tablets:max-h-[296px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ YellowArtisanIcon }
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          If you're an artist or artisan donate items for sale (on your conditions)
          for our fundraisers
        </span>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 xl:min-w-[376px] pb-8 tablets:pb-0 max-w-full tablets:max-w-[376px]
      min-h-0 tablets:min-h-[332px] max-h-full tablets:max-h-[296px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ YellowBusinessIcon }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Offer your businesses to help with the fundraisers - commercial kitchens,
          restaurants, grocery stores, banking institutions, we can use your help
          even to only set up a box for donations and spread our flyers
        </span>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 xl:min-w-[376px] pb-8 tablets:pb-0 max-w-full tablets:max-w-[376px]
      min-h-0 tablets:min-h-[332px] max-h-full tablets:max-h-[296px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ YellowPlaneIcon }
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Buy plane tickets for our volunteers with your @Air Canada Airplan
          points
        </span>
        <span className='text-center -mt-4 font-proximaNova200 text-lg leading-[18px]'>
          <a
            href='https://tinyurl.com/bde3c8sy'
            target='_blank'
            rel='noreferrer'
          >
            https://tinyurl.com/bde3c8sy
          </a>
        </span>
      </div>
    </div>
    </>
  )
}