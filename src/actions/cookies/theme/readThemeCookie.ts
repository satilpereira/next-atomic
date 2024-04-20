'use server'

import { cookies } from 'next/headers'

/**
 * The readThemeCookie function reads the theme cookie from the browser.
 * If the theme cookie is not found, it returns the default theme.
 * @returns The theme value from the cookie.
 * @throws dark if the theme cookie is not found.
 * @example const theme = await readThemeCookie()
 */
const readThemeCookie = async () => {
  const cookieStore = cookies()
  const themeCookie = cookieStore.get('theme')
  if (!themeCookie) {
    return 'dark'
  }
  const theme = themeCookie.value as 'light' | 'dark'

  return theme
}

export default readThemeCookie
