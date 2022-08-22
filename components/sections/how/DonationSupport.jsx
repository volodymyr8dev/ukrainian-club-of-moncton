import { useRouter } from 'next/router'
import { getTexts } from './../../../services/getTexts.js'
import { BlueDonationGrid } from '../../utils/BlueDonationGrid'
import { GreenDonationGrid } from '../../utils/GreenDonationGrid'
import { YellowDonationGrid } from '../../utils/YellowDonationGrid'

export const DonationSupport = () => {
  const { data, loading, error } = getTexts()
  const { locale } = useRouter()

  if (loading) return <span></span>
  if (error) return <span></span>

  return (
    <section className='flex justify-center mb-[72px] md:mb-24 px-6 md:px-6 xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova400 text-[32px] md:text-[40px] leading-[100%]
        tracking-wider uppercase text-center'>
          {       
            locale === 'en'
            ? data.englishTexts[69].textContent
            : data.ukrainianTexts[69].textContent
          }
        </h2>
        <BlueDonationGrid />

        <h2 className='font-proximaNova400 text-[32px] md:text-[40px] leading-[100%]
        tracking-wider uppercase text-center pt-24'>
          {       
            locale === 'en'
            ? data.englishTexts[70].textContent
            : data.ukrainianTexts[70].textContent
          }
        </h2>
        <YellowDonationGrid />

        <h2 className='font-proximaNova400 text-[32px] md:text-[40px] leading-[100%]
        tracking-wider uppercase text-center pt-24'>
          {       
            locale === 'en'
            ? data.englishTexts[71].textContent
            : data.ukrainianTexts[71].textContent
          }
        </h2>
        <GreenDonationGrid />
      </div>
    </section>
  )
}