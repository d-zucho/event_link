import { SegmentGroup, Item, ItemGroup, Segment, Icon } from 'semantic-ui-react'

const EventItem = () => {
  return (
    <SegmentGroup>
      <Segment>
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
      <Segment></Segment>
    </SegmentGroup>
  )
}

export default EventItem
