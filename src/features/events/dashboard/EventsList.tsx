import { AppEvent } from '../../../app/types/event'
import EventItem from './EventItem'

type Props = {
  events: AppEvent[]
  selectEvent: (event: AppEvent) => void
  deleteEvent: (eventId: string) => void
}

const EventsList = ({ events, selectEvent, deleteEvent }: Props) => {
  return (
    <div>
      {events.map((event) => (
        <EventItem
          key={event.id}
          event={event}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </div>
  )
}

export default EventsList
