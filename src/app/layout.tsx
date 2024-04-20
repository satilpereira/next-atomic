import '@styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import cn from '@utils/cn'
import ThemeProvider from '@contexts/ThemeProvider'
import Navbar from '@components/organisms/Navbar'
import { cookies } from 'next/headers'

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
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')
  return (
    <html
      lang='pt-BR'
      className={cn(GeistSans.className, {
        dark: theme?.value === 'dark',
      })}
    >
      <ThemeProvider>
        <body
          className={cn(
            'min-h-[100svh] bg-zinc-200 text-zinc-950 dark:bg-zinc-900 dark:text-zinc-300',
          )}
        >
          <Navbar />
          <main className='flex items-center justify-center'>{children}</main>
        </body>
      </ThemeProvider>
    </html>
  )
}

export default Layout
