import Link from 'next/link'

import { DonateButton } from './../../utils/DonateButton'

export const BottomCTA = () => {
  return (
    <section className='flex justify-center mt-24 mb-24 px-6 xl:px-0'>
    <div className='flex justify-center flex-col max-w-[1216px] w-full'>
      <div className='flex flex-col justify-center px-0 xl:px-9 overflow-visible'>
        <div className='flex justify-center gap-4 flex-col md:flex-row'>
          <div className='flex w-full md:w-fit justify-center'>
            <DonateButton />
          </div>
          <div className='flex w-full md:w-fit justify-center text-center'>
            <div
              className='cursor-pointer font-proximaNova400 border-solid
              border-blue-500 border-2 text-base md:text-xl py-[12px]
              px-2 md:px-[32px] rounded-[50px] uppercase'>
              <Link
                href='/how'
              >
                <span className='text-blue-500'>
                  Do you want to volunteer with us?
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}