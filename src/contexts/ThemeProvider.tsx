'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

import createThemeCookie from '@actions/cookies/theme/createThemeCookie'
import readThemeCookie from '@actions/cookies/theme/readThemeCookie'

/**
 * The available themes for the application.
 */
type Theme = 'light' | 'dark' | 'system'

/**
 * The type definition for the ThemeContext.
 */
type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

/**
 * The context used to provide the theme to the application.
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/**
 * The props for the ThemeProvider component.
 */
type ThemeProviderProps = {
  children: ReactNode
}

/**
 * The provider component that wraps the application and provides the theme context.
 */
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark')

  /**
   * Toggles the theme between light and dark.
   * TODO: Add system theme support.
   * @example
   * const { toggleTheme } = useTheme()
   * toggleTheme()
   */
  const toggleTheme = () => {
    const toggleAsync = async () => {
      if (theme === 'system') {
        const userPrefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)',
        ).matches

        if (userPrefersDark) {
          setTheme('light')
          await createThemeCookie('light')
        } else {
          setTheme('dark')
          await createThemeCookie('dark')
        }
        return
      }

      const newTheme = theme === 'light' ? 'dark' : 'light'
      setTheme(newTheme)
      createThemeCookie(newTheme)

      const root = window.document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(newTheme)
    }

    toggleAsync()
  }

  // Set the theme based on the user's preference or the stored theme.
  useEffect(() => {
    const getTheme = async () => {
      const userPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches

      if (theme === 'system') {
        if (userPrefersDark) {
          setTheme('dark')
        } else {
          setTheme('light')
        }
        return
      }

      const storedTheme = await readThemeCookie()

      if (!storedTheme) {
        if (userPrefersDark) {
          setTheme('dark')
          await createThemeCookie('dark')
        } else {
          setTheme('light')
          await createThemeCookie('light')
        }
        return
      }

      setTheme(storedTheme)
    }

    getTheme()
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * A custom hook to access the theme context.
 * @returns The theme context.
 * @throws An error if used outside of a ThemeProvider.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default ThemeProvider
