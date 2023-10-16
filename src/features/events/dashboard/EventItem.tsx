import {
  SegmentGroup,
  Item,
  ItemGroup,
  Segment,
  Icon,
  List,
  Button,
} from 'semantic-ui-react'
import EventAttendee from './EventAttendee'
import { AppEvent } from '../../../app/types/event'

type Props = {
  event: AppEvent
}

const EventItem = ({ event }: Props) => {
  return (
    <SegmentGroup>
      {/* A SegmentGroup is a group of Segments. It's a semantic-ui-react component that we can use to group Segments together. */}
      <Segment>
        {/* A Segment is a semantic-ui-react component that we can use to display content. It's a container that can be used to divide up or segment content on a page. */}
        <ItemGroup>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header>{event.title}</Item.Header>
              <Item.Description>Hosted by {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {event.date}
          <Icon name='marker' /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button color='teal' floated='right' content='View' />
      </Segment>
    </SegmentGroup>
  )
}

export default EventItem
