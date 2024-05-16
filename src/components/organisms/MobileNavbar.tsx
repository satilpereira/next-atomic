import { Button } from '@/components/ui/button'
import { Cloud, Github, LifeBuoy, LogOut, Moon, Sun, User } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { NavItemsProps } from '@components/atoms/NavItems'
import Link from 'next/link'
import { MobileAuthButton } from '@components/atoms/AuthButton'
import MobileThemeButton from '@components/atoms/MobileThemeButton'

const MobileNavbar: React.FC<{ navItems: NavItemsProps[] }> = ({
  navItems,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navItems.map(navItem => (
            <DropdownMenuItem key={navItem.label}>
              {navItem.icon}
              <Link href={navItem.href}>{navItem.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <MobileThemeButton />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <MobileAuthButton />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileNavbar
