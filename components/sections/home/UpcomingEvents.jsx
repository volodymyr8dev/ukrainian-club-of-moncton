import { EventCard } from '../../utils/EventCard'
import { HeadingToggler } from './../../utils/HeadingToggler'

export const UpcomingEvents = () => {
  return (
    <>
      <section className='flex justify-center mb-28 px-7 xl:px-0'>
        <div className='flex justify-center flex-col max-w-[1216px] w-full'>
          <HeadingToggler heading='Upcoming	&amp; latest events' />
          <div className='flex justify-between gap-2 xl:gap-0'>
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>

      </section>
    </>
  )
}