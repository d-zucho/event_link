import { Button, Menu } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <Menu inverted fixed='top'>
      <Menu.Item header>
        <img src='/icons/logo.png' alt='logo' />
      </Menu.Item>
      <Menu.Item name='Events' />
      <Menu.Item>
        <Button
          // floated='right'
          positive={true}
          inverted={true}
          content='Create Event'
        />
      </Menu.Item>
      <Menu.Item position='right'>
        <Button basic inverted content='Login' />
        <Button
          basic
          inverted
          content='Register'
          style={{ marginLeft: '0.5em' }}
        />
      </Menu.Item>
    </Menu>
  )
}

export default NavBar
