import Link from 'next/link'

import { Home, Lock, Shield } from 'lucide-react'

export type NavItemsProps = {
  label: string
  href: string
  icon?: React.ReactNode
}

export const navItems: NavItemsProps[] = [
  { label: 'Home', href: '/', icon: <Home className='mr-2 h-4 w-4' /> },
  {
    label: 'Protected',
    href: '/protected',
    icon: <Lock className='mr-2 h-4 w-4' />,
  },
  {
    label: 'Secure',
    href: '/secure',
    icon: <Shield className='mr-2 h-4 w-4' />,
  },
]

const NavItems: React.FC<{ navItems: NavItemsProps[] }> = ({ navItems }) => {
  return (
    <ul className='flex flex-row gap-4'>
      {navItems.map(navItem => (
        <li key={navItem.label}>
          <Link href={navItem.href}>{navItem.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NavItems
