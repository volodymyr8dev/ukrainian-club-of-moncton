import { useRouter } from 'next/router'
import { getTexts } from './../../../services/getTexts.js'
import { BlueDonationGrid } from '../../utils/BlueDonationGrid'
import { GreenDonationGrid } from '../../utils/GreenDonationGrid'
import { YellowDonationGrid } from '../../utils/YellowDonationGrid'

export const DonationSupport = () => {
  const { locale } = useRouter()
  const { data, loading, error } = getTexts(locale)

  if (loading) return <span></span>
  if (error) return <span></span>

  return (
    <section className=' mb-[72px] md:mb-24 px-6 md:px-6 xl:px-0'>
        <h2 className='font-proximaNova400 text-[32px] md:text-[40px] leading-[100%]
        tracking-wider uppercase text-center mb-16 '>
          {data[69].textContent}
        </h2>
      <div className=" flex flex-wrap justify-center gap-x-9 gap-y-10 w-[70%] mx-auto ">
      
      <BlueDonationGrid />

        <YellowDonationGrid />

        <GreenDonationGrid />
      </div>
     </section>
  )
}