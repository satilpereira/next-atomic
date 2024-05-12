import Link from 'next/link'

export type NavItemsProps = {
  label: string
  href: string
}

export const navItems: NavItemsProps[] = [
  { label: 'Home', href: '/' },
  { label: 'Protected', href: '/protected' },
  { label: 'Sensible', href: '/sensible' },
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
