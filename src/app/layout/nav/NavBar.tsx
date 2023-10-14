import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <MenuItem header>
          <img src='/icons/logo.png' alt='logo' />
          <span style={{ marginLeft: '0.5rem' }}>Re-vents</span>
        </MenuItem>
        <MenuItem name='Events' />
        <MenuItem>
          <Button positive inverted floared='right' content='Create Event' />
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
