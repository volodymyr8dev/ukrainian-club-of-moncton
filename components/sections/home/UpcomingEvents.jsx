import { EventCard } from '../../utils/EventCard'
import { HeadingToggler } from './../../utils/HeadingToggler'

export const UpcomingEvents = () => {
  return (
    <>
      <section className='flex justify-center mb-28'>
        <div className='flex justify-center flex-col max-w-[1216px] w-full'>
          <HeadingToggler heading='Upcoming & latest events' />
          <EventCard />
        </div>

      </section>
    </>
  )
}