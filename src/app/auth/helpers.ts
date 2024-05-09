'use server'

import { signIn as naSignIn, signOut as naSignOut } from '@app/auth'

export const signIn = async () => {
  await naSignIn()
}

export const signOut = async () => {
  await naSignOut()
}
