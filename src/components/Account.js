import React from 'react'
import { AccountConsumer } from '../providers/AccountProvider'
const Account = () => (
    <AccountConsumer>
      {value => (
        <div>
          <div>
            <div>
              {value.username}
            </div>
            <div>
              Date Joined: {value.datejoined}
            </div>
          </div>
          <div>
              <p>Membership Level: {value.membershipLevel}</p>
          </div>
        </div>
      )}
    </AccountConsumer>
)
export default Account