import { VariantProps, tv } from 'tailwind-variants'

export const avatar = tv({
  base: [
    'relative inline-flex items-center justify-center',
    'font-medium tracking-wide select-none',
    'font-[Caveat,_cursive,_system-ui,_sans-serif] dark:text-white',

    'border-[2px] border-black dark:border-white',
    'border-solid',

    '[box-shadow:3px_3px_0px_0px_rgba(0,0,0,0.8)] dark:[box-shadow:3px_3px_0px_0px_rgba(255,255,255,0.5)]',
    '[transform:rotate(-0.3deg)]',
    "after:content-[''] after:absolute after:-inset-0.5 after:border after:border-black/10 after:dark:border-white/10 after:rounded-[inherit] after:z-[-2]",
    'bg-neutral-50/90',

    'even:[transform:rotate(0.2deg)]',
    'nth-[3n]:[transform:rotate(-0.2deg)]',

    "before:content-[''] before:absolute before:inset-0 before:border-[1px] before:border-black/20 before:dark:border-white/20",
    'before:rounded-[inherit] before:z-[-1]',

    'after:opacity-30 after:bg-[length:5px_5px]',

    // Add a content wrapper that has overflow hidden to prevent content from spilling out
    // while allowing status indicators to be positioned outside
    '[&>*:not(:last-child)]:overflow-hidden [&>*:not(:last-child)]:rounded-[inherit]'
  ],
  variants: {
    color: {
      primary: 'text-blue-800 border-blue-600 dark:text-blue-200 dark:border-blue-500 bg-blue-100/90 dark:bg-blue-950/80',
      secondary: 'text-purple-800 border-purple-600 dark:text-purple-200 dark:border-purple-500 bg-purple-100/90 dark:bg-purple-950/80',
      success: 'text-green-800 border-green-600 dark:text-green-200 dark:border-green-500 bg-green-100/90 dark:bg-green-950/80',
      warning: 'text-amber-800 border-amber-600 dark:text-amber-200 dark:border-amber-500 bg-amber-100/90 dark:bg-amber-950/80',
      danger: 'text-red-800 border-red-600 dark:text-red-200 dark:border-red-500 bg-red-100/90 dark:bg-red-950/80',
      info: 'text-sky-800 border-sky-600 dark:text-sky-200 dark:border-sky-500 bg-sky-100/90 dark:bg-sky-950/80'
    },
    size: {
      xs: 'w-6 h-6 text-xs',
      sm: 'w-8 h-8 text-sm',
      md: 'w-10 h-10 text-base',
      lg: 'w-12 h-12 text-lg',
      xl: 'w-16 h-16 text-xl'
    },
    radius: {
      none: 'rounded-none before:rounded-none after:rounded-none',
      sm: 'rounded-sm before:rounded-sm after:rounded-sm',
      md: 'rounded-md before:rounded-md after:rounded-md',
      lg: 'rounded-lg before:rounded-lg after:rounded-lg',
      xl: 'rounded-xl before:rounded-xl after:rounded-xl',
      full: 'rounded-full before:rounded-full after:rounded-full'
    },
    isBordered: {
      true: '',
      false: 'border-none [box-shadow:none] before:border-none'
    },
    isDisabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none border-gray-400 text-gray-500 dark:border-gray-600 dark:text-gray-400 [box-shadow:none]'
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    radius: 'full',
    isBordered: true,
    isDisabled: false
  }
})

export const avatarGroup = tv({
  base: 'flex items-center -space-x-2',
  variants: {
    size: {
      xs: '-space-x-1',
      sm: '-space-x-1.5',
      md: '-space-x-2',
      lg: '-space-x-2.5',
      xl: '-space-x-3'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export const avatarStatus = tv({
  base: [
    'absolute z-20',
    'border-2 border-white dark:border-gray-900',
    'rounded-full',
    'ring-1 ring-black/10 dark:ring-white/10',
    // Add shadow for better visibility
    'shadow-sm'
  ],
  variants: {
    size: {
      xs: 'w-2 h-2 -bottom-0.5 -right-0.5 border-[1px]',
      sm: 'w-2.5 h-2.5 -bottom-0.5 -right-0.5 border-[1.5px]',
      md: 'w-3 h-3 -bottom-0.5 -right-0.5',
      lg: 'w-3.5 h-3.5 -bottom-1 -right-1',
      xl: 'w-4 h-4 -bottom-1 -right-1'
    },
    status: {
      online: 'bg-green-500',
      offline: 'bg-gray-400 dark:bg-gray-500',
      away: 'bg-yellow-500',
      busy: 'bg-red-500'
    }
  },
  defaultVariants: {
    size: 'md',
    status: 'online'
  }
})

export type AvatarVariantProps = VariantProps<typeof avatar>
export type AvatarGroupVariantProps = VariantProps<typeof avatarGroup>
export type AvatarStatusVariantProps = VariantProps<typeof avatarStatus>
