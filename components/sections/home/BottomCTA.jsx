import { DonateButton } from './../../utils/DonateButton'

export const BottomCTA = () => {
  return (
    <section className='flex justify-center mt-24 mb-24 px-6 xl:px-0'>
    <div className='flex justify-center flex-col max-w-[1216px] w-full'>
      <div className='flex flex-col justify-center px-0 xl:px-9 overflow-visible'>
        <div className='flex justify-center gap-4'>
          <DonateButton />
          <a href='#'>
            <div
              className='cursor-pointer font-proximaNova400 border-solid
              border-blue-500 border-2 text-xl py-[12px]
              px-[32px] rounded-[50px] uppercase'>
              <span className='text-blue-500'>
                Do you want to volunteer with us?
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
    </section>
  )
}