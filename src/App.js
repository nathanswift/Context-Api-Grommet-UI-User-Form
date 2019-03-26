import React from 'react';
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom'
import AccountProfile from './components/AccountProfile'
import { Grommet } from 'grommet'

const App = () => (
  <Grommet>
    <Navbar />
      <Switch>
        <Route 
          exact 
          path="/" 
          render={() => <div>Home</div>} 
        />
        <Route 
          exact 
          path="/account/profile" 
          render={() => <AccountProfile />} />
      </Switch>
  </Grommet>
)

export default App;