import React from 'react'

// Set up the initial context
const AccountContext = React.createContext()

// create an exportable consumer that can be injected into components
export const AccountConsumer = AccountContext.Consumer

export default class AccountProvider extends React.Component {
  state = {
    username: 'Harryson Fjord',
    dateJoined: '03/03/18',
    membershipLevel: 'Platinum',
    updateAccount: (account) => this.updateAccount(account)
  }

  updateAccount = (account) => {
    this.setState({ ...account })
  }

  render() {
    return (
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}