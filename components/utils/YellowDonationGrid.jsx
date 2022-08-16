import Image from 'next/image'
import { gql, useQuery } from '@apollo/client'
import useTranslation from 'next-translate/useTranslation'

import YellowCameraIcon from './../../assets/images/donation-sup-yellow/yellow-camera.svg'
import YellowSmileIcon from './../../assets/images/donation-sup-yellow/yellow-smile.svg'
import YellowVideoIcon from './../../assets/images/donation-sup-yellow/yellow-video.svg'
import YellowArtisanIcon from './../../assets/images/donation-sup-yellow/yellow-artisan.svg'
import YellowBusinessIcon from './../../assets/images/donation-sup-yellow/yellow-business.svg'
import YellowPlaneIcon from './../../assets/images/donation-sup-yellow/yellow-plane.svg'

const GET_URLS_QUERY = gql`
  query GetURLs {
    howCanIHelpUrls(orderBy: createdAt_ASC, skip: 6, first: 6) {
      url
    }
  }
`

export const YellowDonationGrid = () => {
  const { data, loading, error } = useQuery(GET_URLS_QUERY)
  let { t } = useTranslation('how')

  if(loading) return <span></span>
  if(error) return <span></span>

  return (
    <>
    <div className='flex w-full gap-8 md:gap-5 tablets:gap-10 justify-between
    flex-col tablets:flex-row pt-16'>
      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-between items-center flex-col px-8 xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full tablets:max-w-[376px]
      min-h-[376px] max-h-full tablets:max-h-[376px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ YellowCameraIcon }
          alt='camera'
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          { t('photo-project') }
        </span>
        <span className='text-center -mt-4 font-proximaNova200 text-lg leading-[18px]'>
          { t('kids-art') }
        </span>
        <a
          className='w-full max-w-[224px] py-4 px-16 bg-yellow-500 rounded-[64px]
          font-proximaNova400 text-lg leading-[18px] text-gray-100 text-center'
          href={ data.howCanIHelpUrls[0].url }
          target='_blank'
          rel='noreferrer'
        >
          { t('learn-more') }
        </a>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-between items-center flex-col px-8 xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full tablets:max-w-[376px]
      min-h-[376px] max-h-full tablets:max-h-[376px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ YellowSmileIcon }
          alt='smile'
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          { t('sell-stickers') }
        </span>
        <a
          className='w-full max-w-[224px] py-4 px-16 bg-yellow-500 rounded-[64px]
          font-proximaNova400 text-lg leading-[18px] text-gray-100 text-center'
          href={ data.howCanIHelpUrls[1].url }
          target='_blank'
          rel='noreferrer'
        >
          { t('learn-more') }
        </a>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-between items-center flex-col px-8 xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full tablets:max-w-[376px]
      min-h-[376px] max-h-full tablets:max-h-[376px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ YellowVideoIcon }
          alt='video'
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          { t('video-project') }
        </span>
        <span className='text-center -mt-4 font-proximaNova200 text-lg leading-[18px]'>
          { t('ca-with') }
        </span>
        <a
          className='w-full max-w-[224px] py-4 px-16 bg-yellow-500 rounded-[64px]
          font-proximaNova400 text-lg leading-[18px] text-gray-100 text-center'
          href={ data.howCanIHelpUrls[2].url }
          target='_blank'
          rel='noreferrer'
        >
          { t('learn-more') }
        </a>
      </div>
    </div>

    <div className='flex w-full gap-8 md:gap-5 tablets:gap-10 justify-between
    flex-col tablets:flex-row pt-8 tablets:pt-10'>
      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-between items-center flex-col px-8
      xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full tablets:max-w-[376px]
      min-h-[400px] max-h-full tablets:max-h-[400px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ YellowArtisanIcon }
          alt='artisan'
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          { t('artist') }
        </span>
        <a
          className='w-full max-w-[224px] py-4 px-16 bg-yellow-500 rounded-[64px]
          font-proximaNova400 text-lg leading-[18px] text-gray-100 text-center'
          href={ data.howCanIHelpUrls[3].url }
          target='_blank'
          rel='noreferrer'
        >
          { t('learn-more') }
        </a>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-between items-center flex-col px-8
      xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full tablets:max-w-[376px]
      min-h-[400px] max-h-full tablets:max-h-[400px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ YellowBusinessIcon }
          alt='business'
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          { t('offer-business') }
        </span>
        <a
          className='w-full max-w-[224px] py-4 px-16 bg-yellow-500 rounded-[64px]
          font-proximaNova400 text-lg leading-[18px] text-gray-100 text-center'
          href={ data.howCanIHelpUrls[4].url }
          target='_blank'
          rel='noreferrer'
        >
          { t('learn-more') }
        </a>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-between items-center flex-col px-8
      xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full tablets:max-w-[376px]
      min-h-[400px] max-h-full tablets:max-h-[400px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ YellowPlaneIcon }
          alt='plane'
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          { t('buy-tickets') }
        </span>
        <a
          className='w-full max-w-[224px] py-4 px-16 bg-yellow-500 rounded-[64px]
          font-proximaNova400 text-lg leading-[18px] text-gray-100 text-center'
          href={ data.howCanIHelpUrls[5].url }
          target='_blank'
          rel='noreferrer'
        >
          { t('learn-more') }
        </a>
      </div>
    </div>
    </>
  )
}