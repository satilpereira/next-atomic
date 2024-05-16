'use client'

import React, { ReactNode } from 'react'
import { Button, ButtonProps } from '@components/ui/button'
import { useTheme } from '@contexts/ThemeProvider.client'
import { DropdownMenuItem } from '@components/ui/dropdown-menu'
import { Moon, Sun } from 'lucide-react'

type MobileThemeButtonProps = {} & ButtonProps

/**
 * The MobileThemeButton component is a button that toggles the theme between light and dark.
 */
const MobileThemeButton: React.FC<MobileThemeButtonProps> = ({ ...props }) => {
  const { toggleTheme, theme } = useTheme()
  return (
    <DropdownMenuItem onClick={toggleTheme}>
      {theme !== 'dark' ? (
        <Moon className='mr-2 h-4 w-4' />
      ) : (
        <Sun className='mr-2 h-4 w-4' />
      )}
      <span>Theme</span>
    </DropdownMenuItem>
  )
}

export default MobileThemeButton
