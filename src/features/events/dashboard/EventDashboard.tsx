import { Grid } from 'semantic-ui-react'
import EventsList from './EventsList'
import EventForm from '../form/EventForm'
import { sampleData } from '../../../app/api/sampleData'

const EventDashboard = () => {
  return (
    <div className='event-dashboard'>
      <Grid>
        <Grid.Column width={10}>
          <EventsList events={sampleData} />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventForm />
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default EventDashboard
