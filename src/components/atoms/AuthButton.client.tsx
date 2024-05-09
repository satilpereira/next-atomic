'use client'

import { useSession } from 'next-auth/react'

import { Button } from '@components/ui/button'

import { signIn, signOut } from '@app/auth/helpers'

const AuthButton = () => {
  const { data: session } = useSession()

  return (
    <div>
      {session ? (
        <Button
          onClick={async () => {
            await signOut()
          }}
        >
          Sign out
        </Button>
      ) : (
        <Button
          onClick={async () => {
            await signIn()
          }}
        >
          Sign in
        </Button>
      )}
    </div>
  )
}

export default AuthButton
