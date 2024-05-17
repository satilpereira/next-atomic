'use server'
import { auth } from '@app/auth'

const server_onGetUser = async () => {
  const session = await auth()
  return session?.user
}

export default server_onGetUser
