import { useRouter } from 'next/router'
import { getTexts } from './../../../services/getTexts.js'

export const Informative = () => {
  const { data, loading, error } = getTexts()
  const { locale } = useRouter()

  if (loading) return <span></span>
  if (error) return <span></span>

  return (
    <section className='flex justify-center mb-[72px] md:mb-24 px-6 md:px-6 xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova500 text-4xl md:text-[56px] leading-[100%]
        tracking-wider uppercase text-left md:text-center'>
          {
            locale === 'en'
            ? data.englishTexts[65].textContent
            : data.ukrainianTexts[65].textContent
          }
          {' '}
          <span className='text-blue-500'>
            {
              locale === 'en'
              ? data.englishTexts[66].textContent
              : data.ukrainianTexts[66].textContent
            }
          </span>
          {' '}
            {          
              locale === 'en'
              ? data.englishTexts[67].textContent
              : data.ukrainianTexts[67].textContent
            }
        </h2>
        <div className='pt-8 md:pt-11'>
          <p className='w-full md:w-[98%] text-left md:text-center font-proximaNova300
          text-xl md:text-2xl leading-9'>
            {       
              locale === 'en'
              ? data.englishTexts[68].textContent
              : data.ukrainianTexts[68].textContent
            }
          </p>
        </div>
      </div>
    </section>
  )
}