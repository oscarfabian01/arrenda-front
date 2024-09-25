import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// @see: https://twitter.com/shadcn/status/1614692419039105024/photo/1
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
