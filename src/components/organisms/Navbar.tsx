import ThemeButton from '@components/atoms/ThemeButton'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AuthButton from '@components/atoms/AuthButton'
import NavItems, { navItems } from '@components/atoms/NavItems'

const Navbar: React.FC<{}> = () => {
  return (
    <nav className='flex items-center justify-between border-b border-zinc-300 p-4 dark:border-zinc-800'>
      <div className='flex flex-row items-center gap-4 max-md:hidden'>
        <Link
          aria-label='Home Button'
          aria-current='page'
          className='rounded-md transition-all hover:bg-zinc-300 dark:brightness-0 dark:invert dark:hover:brightness-50'
          href={'/'}
        >
          <Image
            src={'/assets/images/NEXT-ATOMIC-ICON.png'}
            alt='NextAtomic Icon'
            width={36}
            height={36}
            unoptimized
            priority
          />
        </Link>
        <NavItems navItems={navItems} />
      </div>
      <div className='flex flex-row gap-4 max-md:hidden'>
        <AuthButton />
        <ThemeButton variant={'default'}>Toggle Theme</ThemeButton>
      </div>
    </nav>
  )
}

export default Navbar
