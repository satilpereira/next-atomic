import ThemeButton from '@components/atoms/ThemeButton'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between border-b border-zinc-300 p-4 dark:border-zinc-800'>
      <Link href={'/'}>
        <Image
          src={'/assets/images/NEXT-ATOMIC-ICON.png'}
          alt='NextAtomic Icon'
          width={36}
          height={36}
          quality={100}
        />
      </Link>
      <ThemeButton variant={'default'}>Toggle Theme</ThemeButton>
    </nav>
  )
}

export default Navbar
