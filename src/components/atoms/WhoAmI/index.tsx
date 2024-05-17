import React from 'react'
import server_onGetUser from '@actions/auth/server_onGetUser'

const WhoAmI = async () => {
  const user = await server_onGetUser()

  return <div>{user ? <pre>Hello, {user.name}</pre> : null}</div>
}

export default WhoAmI
