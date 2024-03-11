import '@styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import cn from '@utils/cn'
import Image from 'next/image'

export const metadata = {
  title: 'Next Atomic App',
  icons: [
    {
      rel: 'icon',
      type: 'image/ico',
      url: '/assets/icons/favicon-light.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/ico',
      url: '/assets/icons/favicon-dark.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
  description:
    "This is a Next.js starter with atomic design. It's a great way to start a new project with a solid foundation. It's also a great way to learn how to use atomic design with Next.js using TypeScript and Tailwind CSS.",
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang='pt-BR'
      className={cn(GeistSans.className, {
        dark: true,
      })}
    >
      <body
        className={cn(
          'flex min-h-[100svh] w-full items-center justify-center bg-slate-200 text-slate-950 dark:bg-zinc-900 dark:text-slate-300',
        )}
      >
        <main className='flex items-center justify-center'>{children}</main>
      </body>
    </html>
  )
}

export default Layout
