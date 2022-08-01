import { useState } from 'react'

import { InfoPagination } from './InfoPagination'
import useTranslation from 'next-translate/useTranslation'

export const PostsDisplay = () => {
  let { t } = useTranslation()

  const [activeTab, setActiveTab] = useState(true)

  const handleTabSwitch = () => {
    setActiveTab(!activeTab)
  }

  return (
    <>
    <section className='flex flex-col items-center justify-center mb-[72px] md:mb-24 px-6 md:px-6
    xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <div className='flex justify-between w-full bg-gray-100'>
          <div className={`border border-blue-500 w-full py-7
          flex justify-center rounded-l-3xl
          ${ activeTab ? 'bg-blue-500' : '' }`}>
            <button
              className={`${ activeTab ? 'text-gray-100' : 'text-blue-500' }
              font-proximaNova500 text-2xl`}
              onClick={ handleTabSwitch }
              type='button'
            >
              Для тих, хто вже в Канаді
            </button>
          </div>

          <div className={`border border-blue-500 w-full py-7
          flex justify-center rounded-r-3xl
          ${ !activeTab ? 'bg-blue-500' : '' }`}>
            <button
              className={`${ !activeTab ? 'text-gray-100' : 'text-blue-500' }
              font-proximaNova500 text-2xl`}
              onClick={ handleTabSwitch }
              type='button'
            >
              Для тих, хто збирається
            </button>
          </div>
        </div>
      </div>

      <div>
        <InfoPagination />
      </div>
    </section>
    </>
  )
}