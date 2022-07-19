import Image from 'next/image'

import { FilledButton } from '../../utils/FilledButton'
import birdImage from './../../../assets/images/bird.svg'

export const HomeFront = () => {
  return (
    <>
    <section
      className='aaaa min-h-[calc(110vh-5rem)] flex justify-center items-center mb-28'
    >
      <div className='flex justify-between gap-6'>
        <div className='max-w-[470px] w-full flex flex-col gap-8 -mt-8'>
          <h2 className='font-proximaNova300 text-[50px] leading-[65px] tracking-wide'>
            ДОБРОГО ВЕЧОРА
            <br />
            <span className='font-proximaNova500 text-blue-500 text-[62.81px]'>
              МИ З
            </span>
            {' '}
            <span className='font-proximaNova500 text-yellow-300 text-[62.81px]'>
              УКРАЇНИ
            </span>
          </h2>

          <p className='font-proximaNova300 text-2xl'>
            Допомога для українців які вже в Канаді, або для тих, хто тільки 
            планує приїхати.
          </p>
          
          <div className='flex justify-end items-center gap-8'>
            <div>
              <hr
                className='border border-solid border-gray-900 max-w-[92px]
                w-[92px]'
              />
            </div>
            <FilledButton text='Що далі?' textColor='gray-100' bgColor='bg-blue-500' />
          </div>
        </div>

        <div>
          <Image
            src={ birdImage }
            width={ 454 }
            height={ 398.34 }
          />
        </div>

        <div className='max-w-[540px] w-full flex flex-col gap-8 mt-[14.4rem]'>
          <div className='flex justify-start items-center gap-8'>
            <FilledButton text='Що далі?' textColor='gray-100' bgColor='bg-yellow-300' />
            <div>
              <hr
                className='border border-solid border-gray-900 max-w-[92px]
                w-[92px]'
              />
            </div>
          </div>
          <h2 className='font-proximaNova300 uppercase text-[41px] leading-[65px]
          tracking-wide'
          >
            There is war in Ukraine
            <br />
            <span className='font-proximaNova500 text-blue-500 text-[62.81px]'>
              HOW
            </span>
            {' '}
            <span className='font-proximaNova500 text-gray-900 text-[62.81px]'>
              CAN I
            </span>
            {' '}
            <span className='font-proximaNova500 text-yellow-300 text-[62.81px]'>
              HELP?
            </span>
          </h2>

          <p className='font-proximaNova300 text-2xl'>
            Допомога для українців які вже в Канаді, або для тих, хто тільки 
            планує приїхати.
          </p>
          
        </div>
      </div>
    </section>
    </>
  )
}