import { Grid } from 'semantic-ui-react'
import EventsList from './EventsList'
import EventForm from '../form/EventForm'
import { sampleData } from '../../../app/api/sampleData'
import { AppEvent } from '../../../app/types/event'
import { useState, useEffect } from 'react'

type Props = {
  formOpen: boolean
  setFormOpen: (value: boolean) => void
}

const EventDashboard = ({ formOpen, setFormOpen }: Props) => {
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
          {formOpen && <EventForm setFormOpen={setFormOpen} />}
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default EventDashboard
