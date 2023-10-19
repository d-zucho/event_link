import { NavLink } from 'react-router-dom'
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <Menu inverted={true} fixed='top'>
      <Container>
        <MenuItem header as={NavLink} to='/' active={false}>
          <img src='/icons/logo.png' alt='logo' />
          <span style={{ marginLeft: '0.5rem' }}>Re-vents</span>
        </MenuItem>
        <MenuItem name='Events' as={NavLink} to='/events' />
        <MenuItem>
          <Button
            as={NavLink}
            to='/createEvent'
            positive={true}
            inverted={true}
            floared='right'
            content='Create Event'
          />
        </MenuItem>
        <MenuItem position='right'>
          <Button basic inverted content='Login' />
          <Button
            basic
            inverted
            content='Register'
            style={{ marginLeft: '0.5rem' }}
          />
        </MenuItem>
      </Container>
    </Menu>
  )
}

export default NavBar
