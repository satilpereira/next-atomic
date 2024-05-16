'use client'

import { useSession } from 'next-auth/react'

import { Button } from '@components/ui/button'

import { signIn, signOut } from '@app/auth/helpers'

import { FaGithub } from 'react-icons/fa6'

import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from '@components/ui/dropdown-menu'
import { LogOut, LogIn } from 'lucide-react'

const AuthButton = () => {
  const { data: session } = useSession()

  return (
    <div>
      {session ? (
        <DropdownMenuItem
          onClick={async () => {
            await signOut()
          }}
        >
          <LogOut className='mr-2 h-4 w-4' />
          <span>Log out</span>
        </DropdownMenuItem>
      ) : (
        <DropdownMenuItem
          onClick={async () => {
            await signIn()
          }}
        >
          <FaGithub className='mr-2 h-4 w-4' />
          <span>Sign in with GitHub</span>
        </DropdownMenuItem>
      )}
    </div>
  )
}

export default AuthButton
