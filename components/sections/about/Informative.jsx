import { getTexts } from './../../../services/getTexts.js'

export const Informative = () => {
  const { result, loading, error } = getTexts()

  if (loading) return <span></span>
  if (error) return <span></span>

  console.log(result)

  return (
    <section className='flex justify-center mb-[72px] md:mb-24 px-6 md:px-6 xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova500 text-4xl md:text-[56px] leading-[100%]
        tracking-wider uppercase text-left md:text-center'>
          title
        </h2>
        <div className='pt-8 md:pt-11'>
          <p className='w-full md:w-[98%] text-left md:text-center font-proximaNova300
          text-xl md:text-2xl leading-9'>
            texts
          </p>
        </div>
      </div>
    </section>
  )
}