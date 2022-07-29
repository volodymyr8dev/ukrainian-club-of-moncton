import useTranslation from 'next-translate/useTranslation'
import { BlueDonationGrid } from '../../utils/BlueDonationGrid'
import { GreenDonationGrid } from '../../utils/GreenDonationGrid'
import { YellowDonationGrid } from '../../utils/YellowDonationGrid'

export const DonationSupport = () => {
  let { t } = useTranslation()

  return (
    <section className='flex justify-center mb-[72px] md:mb-24 px-6 md:px-6 xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova400 text-4xl md:text-[40px] leading-[100%]
        tracking-wider uppercase text-left md:text-center'>
          Donation support
        </h2>
        <BlueDonationGrid />

        <h2 className='font-proximaNova400 text-4xl md:text-[40px] leading-[100%]
        tracking-wider uppercase text-left md:text-center pt-24'>
          Donation support
        </h2>
        <YellowDonationGrid />

        <h2 className='font-proximaNova400 text-4xl md:text-[40px] leading-[100%]
        tracking-wider uppercase text-left md:text-center pt-24'>
          Donation support
        </h2>
        <GreenDonationGrid />
      </div>
    </section>
  )
}