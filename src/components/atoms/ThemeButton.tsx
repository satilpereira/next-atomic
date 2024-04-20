'use client'

import React, { ReactNode } from 'react'
import { Button } from '@components/ui/button'
import { useTheme } from '@contexts/ThemeProvider'

type ThemeButtonProps = {
  children: ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

/**
 * The ThemeButton component is a button that toggles the theme between light and dark.
 */
const ThemeButton: React.FC<ThemeButtonProps> = ({ children, ...props }) => {
  const { toggleTheme } = useTheme()
  return (
    <Button onClick={toggleTheme} {...props}>
      {children}
    </Button>
  )
}

export default ThemeButton
