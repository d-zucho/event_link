import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/events/dashboard/EventDashboard'
import NavBar from './nav/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Container className='main'>
        <h1>two</h1>
        <EventDashboard />
      </Container>
    </>
  )
}

export default App
