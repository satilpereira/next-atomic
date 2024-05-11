'use client'

import { useSession } from 'next-auth/react'

import { Button } from '@components/ui/button'

import { signIn, signOut } from '@app/auth/helpers'

import { FaGithub } from 'react-icons/fa6'
import { FaArrowRightFromBracket } from 'react-icons/fa6'

const AuthButton = () => {
  const { data: session } = useSession()

  return (
    <div>
      {session ? (
        <Button
          onClick={async () => {
            await signOut()
          }}
          className='flex flex-row gap-2'
        >
          <FaArrowRightFromBracket />
          Sign out
        </Button>
      ) : (
        <Button
          onClick={async () => {
            await signIn()
          }}
          className='flex flex-row gap-2'
        >
          <FaGithub />
          Sign in
        </Button>
      )}
    </div>
  )
}

export default AuthButton
