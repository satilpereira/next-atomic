import { SessionProvider as NaSessionProvider } from 'next-auth/react'
import { BASE_PATH, auth } from '@app/auth'

const SessionProvider = async ({ children }: { children: React.ReactNode }) => {
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
      {children}
    </NaSessionProvider>
  )
}

export default SessionProvider
