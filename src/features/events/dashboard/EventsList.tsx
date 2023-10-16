import { AppEvent } from '../../../app/types/event'
import EventItem from './EventItem'

type Props = {
  events: AppEvent[]
}

const EventsList = ({ events }: Props) => {
  return (
    <div>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  )
}

export default EventsList
