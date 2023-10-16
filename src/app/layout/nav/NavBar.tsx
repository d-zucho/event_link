import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'

type Props = {
  setFormOpen: (value: boolean) => void
}

const NavBar = ({ setFormOpen }: Props) => {
  return (
    <Menu inverted={true} fixed='top'>
      <Container>
        <MenuItem header>
          <img src='/icons/logo.png' alt='logo' />
          <span style={{ marginLeft: '0.5rem' }}>Re-vents</span>
        </MenuItem>
        <MenuItem name='Events' />
        <MenuItem>
          <Button
            positive={true}
            inverted={true}
            floared='right'
            onClick={() => setFormOpen(true)}
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
