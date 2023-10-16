import { Grid } from 'semantic-ui-react'
import EventsList from './EventsList'
import EventForm from '../form/EventForm'
import { sampleData } from '../../../app/api/sampleData'
import { AppEvent } from '../../../app/types/event'
import { useState, useEffect } from 'react'

type Props = {
  formOpen: boolean
  setFormOpen: (value: boolean) => void
  // addEvent: (event: AppEvent) => void
}

const EventDashboard = ({ formOpen, setFormOpen }: Props) => {
  const [events, setEvents] = useState<AppEvent[]>([])

  useEffect(() => {
    setEvents(sampleData)
  }, [])

  function addEvent(event: AppEvent) {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
  }

  return (
    <div className='event-dashboard'>
      <Grid>
        <Grid.Column width={10}>
          <EventsList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          {formOpen && (
            <EventForm setFormOpen={setFormOpen} addEvent={addEvent} />
          )}
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default EventDashboard
