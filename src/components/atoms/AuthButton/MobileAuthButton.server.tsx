import { SessionProvider as NaSessionProvider } from 'next-auth/react'
import { BASE_PATH, auth } from '@app/auth'
import MobileAuthButtonClient from './MobileAuthButton.client'

const MobileAuthButton = async () => {
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
      <MobileAuthButtonClient />
    </NaSessionProvider>
  )
}

export default MobileAuthButton
