import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import AccountProvider from './providers/AccountProvider.js'

ReactDOM.render(
  <AccountProvider>
    <Router>
        <App />
    </Router>
  </AccountProvider>,
  document.getElementById('root')
);