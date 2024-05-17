import cn from '@utils/cn'
import WhoAmI from '@components/atoms/WhoAmI'
import { Suspense } from 'react'

const page = () => {
  return (
    <div className='mx-auto flex w-full max-w-7xl flex-col justify-between gap-2 p-4 md:gap-4'>
      <div>
        Get started by editing <code className='italic'>app/page.tsx</code> or{' '}
        <code className='italic'>app/layout.tsx</code>
      </div>
      <Suspense
        fallback={
          <div className={cn('text-center', 'text-2xl', 'font-bold')}>
            Loading...
          </div>
        }
      >
        <WhoAmI />
      </Suspense>
    </div>
  )
}

export default page
