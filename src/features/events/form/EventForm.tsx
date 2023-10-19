import { ChangeEvent, useState } from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'

// import { createId } from '@paralleldrive/cuid2'

//* Form Component *//
const EventForm = () => {
  const initialValues = {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  }

  const [values, setValues] = useState(initialValues) // to store the form values

  function onSubmit() {
    // if the selected event is not null, update the event
    // the values object contains the updated event details
    // selectedEvent
    //   ? updateEvent({ ...selectedEvent, ...values })
    //   : addEvent({
    //       ...values,
    //       id: createId(),
    //       hostedBy: 'Bob',
    //       attendees: [],
    //       hostPhotoURL: '',
    //     })

    // setFormOpen(false)
    console.log('from event form')
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <Segment clearing>
      <Header content={'Create Event'} />
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event title'
            name='title'
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Category'
            name='category'
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Description'
            name='description'
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Date'
            name='date'
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>

        <Button type='submit' floated='right' positive content='Submit' />
        <Button type='submit' floated='right' content='Cancel' />
      </Form>
    </Segment>
  )
}

export default EventForm
