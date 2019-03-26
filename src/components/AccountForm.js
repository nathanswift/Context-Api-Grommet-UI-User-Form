import React from 'react'
import { AccountConsumer } from '../providers/AccountProvider'
import {
  Button,
  Form,
  FormField,
} from "grommet";

class AccountForm extends React.Component {
  state = { username: this.props.username, membershipLevel: this.props.membershipLevel}

  handleChange = (e, { name, value }) => { this.setState({ [name]: value })}

  handleSubmit = (e) => {
    e.preventDefault()
    const account = { ...this.state }
    this.props.updateAccount(account)
  }

  render () {
    const {username, membershipLevel} = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormField name="name" label="Name" required={true} />
        <FormField
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <FormField name="address" label="Address" />
        <FormField
          label="Membership Level"
          name="membershipLevel"
          value={membershipLevel}
          onChange={this.handleChange}
          options={membershipOptions}
        />
        <Button type="submit" label="Submit" primary={true} />
      </Form>
    )
  }
}

const ConnectedAccountForm = (props) => (
  <AccountConsumer>
    { value => (
        <AccountForm 
          { ...props }
          username={value.username}
          membershipLevel={value.membershipLevel}
          updateAccount={value.updateAccount}
        />
    )}
  </AccountConsumer>
)

const membershipOptions = [
  { key: 'b', text: 'Bronze', value: 'Bronze'},
  { key: 's', text: 'Silver', value: 'Silver'},
  { key: 'g', text: 'Gold', value: 'Gold'},
  { key: 'p', text: 'Platinum', value: 'Platinum'},
]

export default ConnectedAccountForm