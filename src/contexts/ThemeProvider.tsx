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
type Theme = 'light' | 'dark'

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
   */
  const toggleTheme = () => {
    const toggleAsync = async () => {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      setTheme(newTheme)
      createThemeCookie(newTheme)

      const root = window.document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(newTheme)
    }

    toggleAsync()
  }

  useEffect(() => {
    const getTheme = async () => {
      const theme = await readThemeCookie()
      setTheme(theme)
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
