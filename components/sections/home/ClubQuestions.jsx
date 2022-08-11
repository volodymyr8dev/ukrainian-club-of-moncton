import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import doubtIdeaImage from './../../../assets/images/doubt-idea.svg'
import ladderImage from './../../../assets/images/ladder.svg'

export const ClubQuestions = () => {
  const { t } = useTranslation('home')

  return (
    <>
    <section className='flex justify-center mb-[72px] md:mb-28 px-6 xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova500 text-4xl md:text-[56px] uppercase w-full 
        leading-[54px] xl:leading-10 tracking-wider pb-0 md:pb-11 xl:pb-36 text-left
        xl:text-center'
        >
          { t('ukrainian-club') }
        </h2>

        <div className='flex flex-col-reverse md:flex-row items-center
        justify-between xl:justify-start gap-0 xl:gap-[70px]'>
          <div>
            <strong className='font-proximaNova400 text-[26px] md:text-4xl
            uppercase'>
              { t('are-you') }
              <span className='text-blue-500'>
                { t('going-to') }
              </span>
              { t('canada') }
            </strong>
            <ul className='pl-2 md:pl-4 pt-6 md:pt-10'>
              <li className='list-disc list-inside font-proximaNova300 text-xl
              md:text-2xl leading-9'>
                { t('cuaet') }
              </li>
              <li className='list-disc list-inside font-proximaNova300 text-xl
              md:text-2xl leading-9'>
                { t('fill-visa') }
              </li>
              <li className='list-disc list-inside font-proximaNova300 text-xl
              md:text-2xl leading-9'>
                { t('transfer-airport') }
              </li>
            </ul>
          </div>
          <div>
            <Image
              src={ doubtIdeaImage }
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className='flex items-center justify-between flex-col
        md:flex-row xl:justify-end gap-0 xl:gap-28 pt-20'>
          <div className='pb-12 md:pb-0'>
            <Image
              src={ ladderImage }
              width={400}
              height={400}
            />
          </div>
          <div>
            <strong className='font-proximaNova400 text-[26px] md:text-4xl
            uppercase'>
              <span className='text-yellow-300'>{ t('already') }</span> { t('in-canada') }
            </strong>
            <ul className='pl-2 md:pl-4 pt-6 md:pt-10'>
              <li className='list-disc list-inside font-proximaNova300 text-xl
              md:text-2xl leading-9'>
                { t('first-step') }
              </li>
              <li className='list-disc list-inside font-proximaNova300 text-xl
              md:text-2xl leading-9'>
                { t('sin') }
              </li>
              <li className='list-disc list-inside font-proximaNova300 text-xl
              md:text-2xl leading-9'>
                { t('medicare') }
              </li>
              <li className='list-disc list-inside font-proximaNova300 text-xl
              md:text-2xl leading-9'>
                { t('ancillary') }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}