import React from 'react'
import { NavLink } from 'react-router-dom'
import { AccountConsumer } from '../providers/AccountProvider'
import { Box, Button as GrommetButton } from 'grommet';
import Typography from '@material-ui/core/Typography';

const Navbar = () => ( 
  <AccountConsumer>
    { value => (
      <AppsBar>
        <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
          <Box direction='row'>
              <NavLink to='/'>
              <GrommetButton 
                color='primary'
                type='submit'
                label='Home'
                >
              </GrommetButton>
              </NavLink>
              <NavLink to='/account/profile'>
              <GrommetButton 
                color='primary'
                type='submit'
                label={value.username}
                >
              </GrommetButton>
              </NavLink>
          </Box>
      </AppsBar>
    )}
  </AccountConsumer>
)

const AppsBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='light-2'
    pad={{ vertical: 'small', horizontal: 'medium' }}
    elevation='medium'
    {...props}
  />
);

export default Navbar