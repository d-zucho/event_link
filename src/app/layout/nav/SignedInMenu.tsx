import { Link } from 'react-router-dom'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

const SignedInMenu = () => {
  return (
    <div>
      <Menu.Item position='right' />
      <Image avatar spaced='right' src='/assets/user.png' />
      <Dropdown pointing='top left' text='Bob'>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='My Profile'
            icon='user'
          />
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Sign Out'
            icon='power'
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default SignedInMenu
