import Image from 'next/image'

import doubtIdeaImage from './../../../assets/images/doubt-idea.svg'
import ladderImage from './../../../assets/images/ladder.svg'

export const ClubQuestions = () => {
  return (
    <>
    <section className='flex justify-center mb-28 px-6 xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova500 text-[56px] uppercase w-full 
        leading-[54px] xl:leading-10 tracking-wider pb-11 xl:pb-36 text-left
        xl:text-center'
        >
          Ukrainian Club of Moncton
        </h2>

        <div className='flex items-center justify-between xl:justify-start gap-0
        xl:gap-[70px]'>
          <div>
            <strong className='font-proximaNova400 text-4xl uppercase'>
              Are you <span className='text-blue-500'>going to</span> Canada?
            </strong>
            <ul className='pl-4 pt-10'>
              <li className='list-disc list-inside font-proximaNova300 text-2xl
              leading-9'>
                Do you have questions about immigration program CUAET?
              </li>
              <li className='list-disc list-inside font-proximaNova300 text-2xl
              leading-9'>
                Do you need information how to fill in visa application?
              </li>
              <li className='list-disc list-inside font-proximaNova300 text-2xl
              leading-9'>
                Do you need a transfer from Moncton airport?
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

        <div className='flex items-center justify-between xl:justify-end gap-0
        xl:gap-28 pt-20'>
          <div>
            <Image
              src={ ladderImage }
              width={400}
              height={400}
            />
          </div>
          <div>
            <strong className='font-proximaNova400 text-4xl uppercase'>
              <span className='text-yellow-300'>Already</span> in Canada?
            </strong>
            <ul className='pl-4 pt-10'>
              <li className='list-disc list-inside font-proximaNova300 text-2xl
              leading-9'>
                Do you have questions about your first step here?
              </li>
              <li className='list-disc list-inside font-proximaNova300 text-2xl
              leading-9'>
                Do you need information about SIN,
              </li>
              <li className='list-disc list-inside font-proximaNova300 text-2xl
              leading-9'>
                Medicare, bank account, physical examination?
              </li>
              <li className='list-disc list-inside font-proximaNova300 text-2xl
              leading-9'>
                Do you need ancillary resources?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}