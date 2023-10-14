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

const EventItem = () => {
  return (
    <SegmentGroup>
      {/* A SegmentGroup is a group of Segments. It's a semantic-ui-react component that we can use to group Segments together. */}
      <Segment>
        {/* A Segment is a semantic-ui-react component that we can use to display content. It's a container that can be used to divide up or segment content on a page. */}
        <ItemGroup>
          <Item>
            <Item.Image size='tiny' circular src='/icons/user.png' />
            <Item.Content>
              <Item.Header content='Event Title' />
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> Date
          <Icon name='marker' /> Venue
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          <EventAttendee />
          <EventAttendee />
          <EventAttendee />
        </List>
      </Segment>
      <Segment clearing>
        <span>Description of the event</span>
        <Button color='teal' floated='right' content='View' />
      </Segment>
    </SegmentGroup>
  )
}

export default EventItem
