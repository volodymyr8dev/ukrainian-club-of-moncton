import Image from 'next/image'

import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import { FilledButton } from '../../utils/FilledButton'
import birdImage from './../../../assets/images/bird.svg'

export const HomeFront = () => {
  const router = useRouter()

  return (
    <>
    <section
      className='home-front-section min-h-[calc(110vh-5rem)] flex justify-center items-center mb-[153px]
      2xl:px-8 px-8 pb-8 tablets:pb-0'
    >
      <div className='flex justify-between gap-6 flex-col tablets:flex-row
      w-full tablets:w-auto'>
        <div className='lg:max-w-[340px] max-w-full 2xl:max-w-[540px] flex
        flex-col gap-6 md:gap-8 lg:-mt-8 mt-12 tablets:-mt-[1.9rem]'>
          <h2 className='font-proximaNova300 text-[34px] md:text-[50px]
          leading-[40px] md:leading-[65px] first-letter:tracking-wide'>
            {
              router.locale == 'ua'
              ? 'ДОБРОГО ВЕЧОРА'
              : 'GOOD EVENING'
            }
            <br />
            <span className='font-proximaNova500 text-blue-500 text-[43px] 
            md:text-[62.81px]'>
              {
                router.locale == 'ua'
                ? 'МИ З'
                : 'WE ARE FROM'
              }
            </span>
            {' '}
            <span className='font-proximaNova500 text-yellow-300 text-[43px] 
            md:text-[62.81px]'>
              {
                router.locale == 'ua'
                ? 'УКРАЇНИ'
                : 'UKRAINE'
              }
            </span>
          </h2>

          <p className='font-proximaNova300 text-xl md:text-2xl'>
            {
              router.locale == 'ua'
              ? 'Допомога для українців які вже в Канаді, або для тих, хто тільки планує приїхати.'
              : 'Help for Ukrainians who are already in Canada, or for those who have new plans to come'
            }
          </p>
          
          <div className='flex justify-end items-center gap-6 md:gap-8'>
            <div>
              <hr
                className='border border-solid border-gray-900 max-w-[92px]
                w-[92px]'
              />
            </div>
            <FilledButton
              text={ router.locale == 'ua' ? 'Що далі?' : "What's next?" }
              textColor='gray-100'
              bgColor='bg-blue-500'
            />
          </div>
        </div>

        <div className='2xl:translate-y-0 md:translate-y-[90px] translate-y-0
        flex justify-center
        '>
          <Image
            src={ birdImage }
            width={ 454 }
            height={ 398.34 }
          />
        </div>

        <div className='lg:max-w-[340px] max-w-full 2xl:max-w-[540px] w-full
        hidden md:flex flex-col gap-8 mt-0 md:mt-[14.4rem]'>
          <div className='flex justify-start items-center gap-6 md:gap-8'>
            <FilledButton
              text={ router.locale == 'ua' ? 'Що далі?' : "What's next?" }
              textColor='gray-100'
              bgColor='bg-yellow-300'
            />
            <div>
              <hr
                className='border border-solid border-gray-900 max-w-[92px]
                w-[92px]'
              />
            </div>
          </div>
          <p className='font-proximaNova300 text-2xl'>
            {
              router.locale == 'ua'
              ? 'Ваша підтримка допоможе тисячам українців пережити ці важкі часи.'
              : 'Your support will help thousands of Ukrainians to survive these difficult times.'
            }
          </p>

          <h2 className='font-proximaNova300 uppercase text-[41px] leading-[65px]
          tracking-wide'
          >
            {
              router.locale == 'ua'
              ? 'В Україні війна'
              : 'There is war in Ukraine'
            }
            <br />
            <span className='font-proximaNova500 text-blue-500 text-[62.81px]
            uppercase'>
              {
                router.locale == 'ua'
                ? 'Чимк'
                : 'HOW'
              }
            </span>
            {' '}
            <span className='font-proximaNova500 text-gray-900 text-[62.81px]
            uppercase'>
              {
                router.locale == 'ua'
                ? 'я можу'
                : 'CAN I'
              }
            </span>
            {' '}
            <span className='font-proximaNova500 text-yellow-300 text-[62.81px]
            uppercase'>
              {
                router.locale == 'ua'
                ? 'допомогти'
                : 'HELP?'
              }
            </span>
          </h2>
        </div>

        <div className='max-w-full flex md:hidden flex-col gap-6 mt-2
        tablets:mt-20'>
          <h2 className='font-proximaNova300 text-[23px] uppercase
          leading-[26px] tracking-wider'>
            {
              router.locale == 'ua'
              ? 'В Україні війна'
              : 'There is war in Ukraine'
            }
            <br />
            <span className='font-proximaNova500 text-blue-500 text-[62.81px]
            uppercase'>
              {
                router.locale == 'ua'
                ? 'Чимк'
                : 'HOW'
              }
            </span>
            {' '}
            <span className='font-proximaNova500 text-gray-900 text-[62.81px]
            uppercase'>
              {
                router.locale == 'ua'
                ? 'я можу'
                : 'CAN I'
              }
            </span>
            {' '}
            <span className='font-proximaNova500 text-yellow-300 text-[62.81px]
            uppercase'>
              {
                router.locale == 'ua'
                ? 'допомогти'
                : 'HELP?'
              }
            </span>
          </h2>

          <p className='font-proximaNova300 text-[19px] leading-[30px] tracking-wider'>
            {
              router.locale == 'ua'
              ? 'Ваша підтримка допоможе тисячам українців пережити ці важкі часи.'
              : 'Your support will help thousands of Ukrainians to survive these difficult times.'
            }
          </p>
          
          <div className='flex justify-end items-center gap-6 md:gap-8'>
            <div>
              <hr
                className='border border-solid border-gray-900 max-w-[92px]
                w-[92px]'
              />
            </div>
            <FilledButton
              text={ router.locale == 'ua' ? 'Що далі?' : "What's next?" }
              textColor='gray-100'
              bgColor='bg-yellow-300'
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}