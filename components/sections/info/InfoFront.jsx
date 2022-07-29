import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import InfoBg from '../../../assets/images/info-bg.svg'

export const InfoFront = () => {
  let { t } = useTranslation()

  return (
    <>
    <section
      className='flex justify-center items-center mb-[60px]'
    >
      <div className='flex justify-between gap-6 flex-col'>
        <div className='flex justify-between w-screen info-front-farm'>
          <div className='w-full overflow-hidden'>
            <Image
              src={ InfoBg }
              layout='responsive'
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}