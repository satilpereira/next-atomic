'use client'

import React, { ReactNode } from 'react'
import { Button, ButtonProps } from '@components/ui/button'
import { useTheme } from '@contexts/ThemeProvider'

type ThemeButtonProps = {
  children: ReactNode
} & ButtonProps

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
