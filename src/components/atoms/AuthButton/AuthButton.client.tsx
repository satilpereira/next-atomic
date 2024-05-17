'use client'

import { useSession } from 'next-auth/react'

import { Button } from '@components/ui/button'

import { signIn, signOut } from '@actions/auth/helpers'

import { FaGithub } from 'react-icons/fa6'
import { FaArrowRightFromBracket } from 'react-icons/fa6'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const AuthButton = () => {
  const session = useSession()
  const router = useRouter()

  return (
    <div>
      {session.status == 'authenticated' ? (
        <Button
          onClick={async () => {
            await signOut()
            window.location.reload()
            router.refresh()
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
