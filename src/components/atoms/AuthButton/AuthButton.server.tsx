import { SessionProvider as NaSessionProvider } from 'next-auth/react'
import { BASE_PATH, auth } from '@app/auth'
import AuthButtonClient from './AuthButton.client'

const AuthButton = async () => {
  const session = await auth()
  if (session && session.user) {
    session.user = {
      email: session.user.email,
      name: session.user.name,
      image: session.user.image,
    }
  }
  return (
    <NaSessionProvider basePath={BASE_PATH} session={session}>
      <AuthButtonClient />
    </NaSessionProvider>
  )
}

export default AuthButton
