import ThemeButton from '@components/atoms/ThemeButton'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-end border-b border-zinc-300 p-4 dark:border-zinc-800'>
      <ThemeButton>Toggle Theme</ThemeButton>
    </nav>
  )
}

export default Navbar
