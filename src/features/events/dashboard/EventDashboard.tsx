import { Grid } from 'semantic-ui-react'
import EventsList from './EventsList'
import EventForm from '../form/EventForm'
import { sampleData } from '../../../app/api/sampleData'
import { AppEvent } from '../../../app/types/event'
import { useState, useEffect } from 'react'

//* Dashboard Component *//
const EventDashboard = () => {
  const [events, setEvents] = useState<AppEvent[]>([])

  useEffect(() => {
    setEvents(sampleData)
  }, [])

  return (
    <div className='event-dashboard'>
      <Grid>
        <Grid.Column width={10}>
          <EventsList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Filters</h2>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default EventDashboard
