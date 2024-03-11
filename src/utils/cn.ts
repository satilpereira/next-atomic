import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * cn is a utility function to merge tailwind classes with clsx
 * It uses tailwind-merge to merge the classes and clsx to handle the conditional classes
 * Its a simple utility function to make it easier to use tailwind classes with conditional classes
 *
 * @param inputs
 * @returns tailwind classes
 * @example
 * import cn from '@utils/cn'
 *
 * const Component = () => {
 *  return (
 *   <div className={cn('text-center', {
 *    'text-red-500': true,
 *  })}>
 *    Hello World
 *  </div>
 * )
 */
const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export default cn
