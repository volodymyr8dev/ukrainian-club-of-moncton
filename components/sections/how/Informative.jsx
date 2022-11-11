import { useRouter } from 'next/router'
import { getTexts } from './../../../services/getTexts.js'

export const Informative = () => {
  const { locale } = useRouter()
  const { data, loading, error } = getTexts(locale)

  if (loading) return <span></span>
  if (error) return <span></span>

  return (
    <section className='flex justify-center mb-[72px] md:mb-24 px-6 md:px-6 xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova500 text-4xl md:text-[56px] leading-[100%]
        tracking-wider uppercase text-left md:text-center'>
          {data[65].textContent}
          {' '}
          <span className='text-blue-500'>
            { data[66].textContent}
          </span>
          {' '}
            {data[67].textContent}
        </h2>
        <div className='pt-8 md:pt-11'>
          <p className='w-full md:w-[98%] text-left md:text-center font-proximaNova300
          text-xl md:text-2xl leading-9'>
            {data[68].textContent}
          </p>
        </div>
      </div>
    </section>
  )
}