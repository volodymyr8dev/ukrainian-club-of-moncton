import { DonateButton } from './../../utils/DonateButton'

export const BottomCTA = () => {
  return (
    <section className='flex justify-center mb-24'>
    <div className='flex justify-center flex-col max-w-[1216px] w-full'>
      <div className='flex flex-col justify-center px-9 overflow-visible'>
        <div className='flex justify-center -translate-y-12 z-50'>
          <DonateButton />
        </div>
      </div>
    </div>
    </section>
  )
}