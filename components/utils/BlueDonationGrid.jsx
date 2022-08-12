import Image from 'next/image'
import { gql, useQuery } from '@apollo/client'
import useTranslation from 'next-translate/useTranslation'

import BlueHeartIcon from './../../assets/images/donation-sup-blue/blue-heart.svg'
import BlueHousesIcon from './../../assets/images/donation-sup-blue/blue-houses.svg'
import BlueCalendarIcon from './../../assets/images/donation-sup-blue/blue-calendar.svg'
import BlueBearIcon from './../../assets/images/donation-sup-blue/blue-bear.svg'
import BlueEquipmentIcon from './../../assets/images/donation-sup-blue/blue-equipment.svg'
import BlueColletteIcon from './../../assets/images/donation-sup-blue/blue-collette.svg'

const GET_URLS_QUERY = gql`
  query GetURLs {
    howCanIHelpUrls(orderBy: createdAt_ASC) {
      url
    }
  }
`

export const BlueDonationGrid = () => {
  const { data } = useQuery(GET_URLS_QUERY)
  let { t } = useTranslation('how')

  return (
    <>
    <div className='flex w-full gap-8 md:gap-5 tablets:gap-10 justify-between
    flex-col tablets:flex-row pt-16'>
      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-between items-center flex-col px-8
      xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full tablets:max-w-[376px]
      min-h-[376px] max-h-full tablets:max-h-[376px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ BlueHeartIcon }
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          { t('send-monetary') }
        </span>
        <a
          className='w-full max-w-[224px] py-4 px-16 bg-blue-500 rounded-[64px]
          font-proximaNova400 text-lg leading-[18px] text-gray-100 text-center'
          href={ data.howCanIHelpUrls[0].url }
          target='_blank'
        >
          { t('learn-more') }
        </a>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-between items-center flex-col px-8
      xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full tablets:max-w-[376px]
      min-h-[376px] max-h-full tablets:max-h-[376px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ BlueHousesIcon }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
        { t('offer-housing') }
        </span>
        <a
          className='w-full max-w-[224px] py-4 px-16 bg-blue-500 rounded-[64px]
          font-proximaNova400 text-lg leading-[18px] text-gray-100 text-center'
          href={ data.howCanIHelpUrls[1].url }
          target='_blank'
        >
          { t('learn-more') }
        </a>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-between items-center flex-col px-8
      xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full tablets:max-w-[376px]
      min-h-[376px] max-h-full tablets:max-h-[376px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ BlueCalendarIcon }
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
        { t('join-rallies') }
        </span>
        <a
          className='w-full max-w-[224px] py-4 px-16 bg-blue-500 rounded-[64px]
          font-proximaNova400 text-lg leading-[18px] text-gray-100 text-center'
          href={ data.howCanIHelpUrls[2].url }
          target='_blank'
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
      min-h-[376px] max-h-full tablets:max-h-[376px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ BlueBearIcon }
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          { t('bring-humanitarian') }
        </span>
        <a
          className='w-full max-w-[224px] py-4 px-16 bg-blue-500 rounded-[64px]
          font-proximaNova400 text-lg leading-[18px] text-gray-100 text-center'
          href={ data.howCanIHelpUrls[3].url }
          target='_blank'
        >
          { t('learn-more') }
        </a>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-between items-center flex-col px-8
      xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full tablets:max-w-[376px]
      min-h-[376px] max-h-full tablets:max-h-[376px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ BlueEquipmentIcon }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          { t('amazon-wishlist') }
        </span>
        <a
          className='w-full max-w-[224px] py-4 px-16 bg-blue-500 rounded-[64px]
          font-proximaNova400 text-lg leading-[18px] text-gray-100 text-center'
          href={ data.howCanIHelpUrls[4].url }
          target='_blank'
        >
          { t('learn-more') }
        </a>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-between items-center flex-col px-8
      xl:min-w-[376px] pb-8 tablets:pb-0a max-w-full tablets:max-w-[376px]
      min-h-[376px] max-h-full tablets:max-h-[376px] h-full w-full
      flex-1 shrink-0'>
        <Image
          src={ BlueColletteIcon }
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          { t('randy-collette') }
        </span>
        <a
          className='w-full max-w-[224px] py-4 px-16 bg-blue-500 rounded-[64px]
          font-proximaNova400 text-lg leading-[18px] text-gray-100 text-center'
          href={ data.howCanIHelpUrls[5].url }
          target='_blank'
        >
          { t('learn-more') }
        </a>
      </div>
    </div> 
    </>
  )
}