import '@styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import cn from '@utils/cn'
import Image from 'next/image'

// The metadata object contains the information about the website
// and helps to set the title, description, and favicon of the website.
// Change the values of the metadata object to update the website information.
// It helps improve the SEO of the website
export const metadata = {
  // Title of the website, visible in the browser tab
  // You can also set them dynamically in the page and layout components
  title: process.env.NEXT_PUBLIC_APP_NAME,
  // Favicon ico file path
  // You can also set them dynamically in the page and layout components
  icons: [
    {
      rel: 'icon',
      type: 'image/ico',
      url: 'favicon.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/ico',
      url: 'favicon-dm.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
  // Description of the website, visible in the meta tags
  description:
    "This is a Next.js starter with atomic design. It's a great way to start a new project with a solid foundation. It's also a great way to learn how to use atomic design with Next.js using TypeScript and Tailwind CSS.",
}

// The Layout component is a wrapper component that wraps the entire website.
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
