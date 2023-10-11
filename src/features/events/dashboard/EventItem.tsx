import { SegmentGroup, Item, ItemGroup, Segment } from 'semantic-ui-react'

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
    </SegmentGroup>
  )
}

export default EventItem
