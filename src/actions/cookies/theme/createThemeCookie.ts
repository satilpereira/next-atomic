'use server'

import { cookies } from 'next/headers'

const createThemeCookie = async (theme: 'light' | 'dark') => {
  const cookieStore = cookies()
  cookieStore.set('theme', theme)
}

export default createThemeCookie
