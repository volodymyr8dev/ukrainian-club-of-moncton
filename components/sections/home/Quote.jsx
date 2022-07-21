import Image from "next/image"

import quoteImage from './../../../assets/images/quote.svg'

export const Quote = () => {
  return (
    <section className='flex justify-center mb-12 mt-0 md:mt-36 px-6 xl:px-0'>
    <div className='flex justify-center flex-col max-w-[1216px] w-full'>
      <div className='flex flex-col justify-center rounded-3xl overflow-visible
      shadow-[0px_2px_32px_rgba(0,32,73,0.13)] px-4 md:px-9'>
        <div className='flex justify-center -translate-y-12 z-50'>
          <Image
            src={ quoteImage }
          />
        </div>

        <div className='-mt-5 pb-10'>
          <p className='text-left md:text-center font-proximaNova300 text-base md:text-lg
          leading-4'>
            <span className='max-w-2xl w-full inline-block'>
              We are an independent, non-profit, self-sufficient club founded and 
              chartered in 1975.
              <br/>
              Our membership consists of people of all ages and 
              walks of life. 
            </span>
            <br />
            <br />
            Our focus from 1975 on has always been to preserve and promote 
            Ukrainian culture by educating ourselves and the public. We have done
            this in many ways - presentations, Pysanky workshops, book donations
            to libraries and inviting the media to cover our feasts, as well as 
            our exhibitions in the Moncton City Library and the Moncton Museum. 
            We have been delighted in recent years to welcome as members emigrés
            from Ukraine with their eagerness to participate in our activities, 
            and their indomitable enthusiasm.
            <br />
            <br />
            <span className='max-w-2xl w-full inline-block'>
              Finally, we welcome new members who are willing to promote Ukrainian
              culture.
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}