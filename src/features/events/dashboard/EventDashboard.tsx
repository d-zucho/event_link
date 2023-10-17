import { Grid } from 'semantic-ui-react'
import EventsList from './EventsList'
import EventForm from '../form/EventForm'
import { sampleData } from '../../../app/api/sampleData'
import { AppEvent } from '../../../app/types/event'
import { useState, useEffect } from 'react'

type Props = {
  formOpen: boolean
  setFormOpen: (value: boolean) => void
  selectedEvent: AppEvent | null
  selectEvent: (event: AppEvent | null) => void
}

//* Dashboard Component *//
const EventDashboard = ({
  formOpen,
  setFormOpen,
  selectedEvent,
  selectEvent,
}: Props) => {
  const [events, setEvents] = useState<AppEvent[]>([])

  useEffect(() => {
    setEvents(sampleData)
  }, [])

  //* Add Event Function *//
  function addEvent(event: AppEvent) {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
  }
  //* Update Event Function *//
  function updateEvent(updatedEvent: AppEvent) {
    // if the event id matches the updated event id, return the updated event
    // else return the event unchanged
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    )
    selectEvent(null) // reset the selected event
    setFormOpen(false)
  }

  //* Delete Event Function *//
  function deleteEvent(eventId: string) {
    setEvents(events.filter((evt) => evt.id !== eventId))
  }

  return (
    <div className='event-dashboard'>
      <Grid>
        <Grid.Column width={10}>
          <EventsList
            events={events}
            selectEvent={selectEvent}
            deleteEvent={deleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          {formOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : 'create'}
              setFormOpen={setFormOpen}
              addEvent={addEvent}
              selectedEvent={selectedEvent}
              updateEvent={updateEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default EventDashboard
