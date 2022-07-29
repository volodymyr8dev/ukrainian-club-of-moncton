import Image from 'next/image'

import useTranslation from 'next-translate/useTranslation'

import BlueHeartIcon from './../../assets/images/donation-sup-blue/blue-heart.svg'
import BlueHousesIcon from './../../assets/images/donation-sup-blue/blue-houses.svg'
import BlueCalendarIcon from './../../assets/images/donation-sup-blue/blue-calendar.svg'
import BlueBearIcon from './../../assets/images/donation-sup-blue/blue-bear.svg'
import BlueEquipmentIcon from './../../assets/images/donation-sup-blue/blue-equipment.svg'
import BlueColletteIcon from './../../assets/images/donation-sup-blue/blue-collette.svg'

export const BlueDonationGrid = () => {
  let { t } = useTranslation()

  return (
    <>
    <div className='flex gap-10 justify-between pt-16'>
      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 min-w-[376px] max-w-[376px] min-h-[314px] max-h-[314px] h-full'>
        <Image
          src={ BlueHeartIcon }
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Send monetary donations to our bank account E-transfer
        </span>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 min-w-[376px] max-w-[376px] min-h-[314px] max-h-[314px] h-full'>
        <Image
          src={ BlueHousesIcon }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Offer housing to the people fleeing war in Ukraine, please fill out this form
        </span>
        <span className='text-center -mt-4 font-proximaNova200 text-lg leading-[18px]'>
          <a
            href='https://tinyurl.com/3xcpyvrm'
            target='_blank'
            rel='noreferrer'
          >
            https://tinyurl.com/3xcpyvrm
          </a>
        </span>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 min-w-[376px] max-w-[376px] min-h-[314px] max-h-[314px] h-full'>
        <Image
          src={ BlueCalendarIcon }
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Join our weekly rallies and our events
        </span>
      </div>
    </div>

    <div className='flex gap-10 justify-between pt-10'>
      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 min-w-[376px] max-w-[376px] min-h-[314px] max-h-[314px] h-full'>
        <Image
          src={ BlueBearIcon }
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Bring humanitarian aid in Greater Moncton Area
        </span>
        <span className='text-center -mt-4 font-proximaNova200 text-lg leading-[18px]'>
          <a
            href='https://tinyurl.com/bpajyehm'
            target='_blank'
            rel='noreferrer'
          >
            https://tinyurl.com/bpajyehm
          </a>
        </span>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 min-w-[376px] max-w-[376px] min-h-[314px] max-h-[314px] h-full'>
        <Image
          src={ BlueEquipmentIcon }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Buy stuff from our amazon wish list of defence military equipment we
          can send to the Ukrainian warriors
        </span>
        <span className='text-center -mt-4 font-proximaNova200 text-lg leading-[18px]'>
          <a
            href='https://tinyurl.com/yp4rejyu'
            target='_blank'
            rel='noreferrer'
          >
            https://tinyurl.com/yp4rejyu
          </a>
        </span>
      </div>

      <div className='shadow-[0px_2px_32px_rgba(0,32,73,0.13)] bg-gray-100
      pt-8 rounded-3xl flex justify-start items-center flex-col px-8
      gap-8 min-w-[376px] max-w-[376px] min-h-[314px] max-h-[314px] h-full'>
        <Image
          src={ BlueColletteIcon }
          width={ 128 }
          height={ 128 }
        />
        <span className='text-center font-proximaNova200 text-lg leading-[18px]'>
          Help our Randy Collette buy 5000 tactical tourniquets
        </span>
        <span className='text-center -mt-4 font-proximaNova200 text-lg leading-[18px]'>
          <a
            href='https://tinyurl.com/2s39wbt7'
            target='_blank'
            rel='noreferrer'
          >
            https://tinyurl.com/2s39wbt7
          </a>
        </span>
      </div>
    </div>
    
    </>
  )
}