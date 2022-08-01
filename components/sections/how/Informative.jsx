import useTranslation from 'next-translate/useTranslation'

export const Informative = () => {
  let { t } = useTranslation()

  return (
    <section className='flex justify-center mb-[72px] md:mb-24 px-6 md:px-6 xl:px-0'>
      <div className='flex justify-center flex-col max-w-[1216px] w-full'>
        <h2 className='font-proximaNova500 text-4xl md:text-[56px] leading-[100%]
        tracking-wider uppercase text-left md:text-center'>
          All the ways
          {' '}
          <span className='text-blue-500'>
            you can
          </span>
          {' '}
          help us
        </h2>
        <div className='pt-8 md:pt-11'>
          <p className='w-full md:w-[98%] text-left md:text-center font-proximaNova300
          text-xl md:text-2xl leading-9'>
            We created this website for our Canadian friends, who are willing to
            contribute to our common fight against russian terrorist forces, war
            criminals, evil - you name it. As well as for those Ukrainians who
            are running away from the war to Canada.
          </p>
        </div>
      </div>
    </section>
  )
}