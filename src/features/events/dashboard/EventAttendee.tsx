import { Image, List } from 'semantic-ui-react'
import { Attendee } from '../../../app/types/events'

type Props = {
  attendee: Attendee
}

const EventAttendee = ({ attendee }: Props) => {
  return (
    <List.Item>
      <Image size='mini' circular src={attendee.photoURL} />
    </List.Item>
  )
}

export default EventAttendee
