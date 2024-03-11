import cn from '@utils/cn'

const page = () => {
  return (
    <div className='mx-auto flex max-w-7xl flex-col justify-between gap-2 p-4  md:h-screen md:max-h-[764px] md:gap-4'>
      <div
        className={cn(
          'w-fit rounded-md border border-zinc-100/30 bg-zinc-900/40  bg-clip-padding p-4 backdrop-blur-[8px] backdrop-filter max-md:w-full',
        )}
      >
        Get started by editing <code className='font-bold'>app/page.tsx</code>
      </div>

      <div className='flex h-fit w-full flex-col justify-between gap-2 md:flex-row md:gap-4 md:text-sm lg:text-base [&>a>h2]:text-xl lg:[&>a>h2]:text-2xl'>
        <a
          className={cn(
            'flex w-full flex-col gap-2 rounded-md border border-zinc-100/30 bg-zinc-900/40 bg-clip-padding p-4 backdrop-blur-[8px] backdrop-filter transition-all duration-500 hover:bg-zinc-900/70',
          )}
          href='https://nextjs.org/docs/getting-started/installation'
          target='_blank'
        >
          <h2 className='font-bold'>Docs</h2>
          <p>To get startet, read the next official documentation</p>
        </a>
        <a
          className={cn(
            'flex w-full flex-col gap-2 rounded-md border border-zinc-100/30  bg-zinc-900/40 bg-clip-padding p-4 backdrop-blur-[8px] backdrop-filter transition-all duration-500 hover:bg-zinc-900/70',
          )}
          href='https://nextjs.org/learn'
          target='_blank'
        >
          <h2 className='font-bold'>Learn</h2>
          <p>
            Learn about Next.js in an interactive course with quizzes and
            examples
          </p>
        </a>
        <a
          className={cn(
            'flex w-full flex-col gap-2 rounded-md border border-zinc-100/30  bg-zinc-900/40 bg-clip-padding p-4 backdrop-blur-[8px] backdrop-filter transition-all duration-500 hover:bg-zinc-900/70',
          )}
          href='https://vercel.com/templates/next.js'
          target='_blank'
        >
          <h2 className='font-bold'>Templates</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>
        <a
          className={cn(
            'flex w-full flex-col gap-2 rounded-md border border-zinc-100/30  bg-zinc-900/40 bg-clip-padding p-4 backdrop-blur-[8px] backdrop-filter transition-all duration-500 hover:bg-zinc-900/70',
          )}
          href='https://vercel.com/new'
          target='_blank'
        >
          <h2 className='font-bold'>Deploy</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </div>
  )
}

export default page
