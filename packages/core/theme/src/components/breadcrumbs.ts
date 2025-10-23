import { VariantProps, tv } from 'tailwind-variants'

export const breadcrumbs = tv({
  slots: {
    base: [
      'flex',
      'flex-wrap',
      'items-center',
      'list-none',
      'p-0',
      'm-0'
    ],
    item: [
      'inline-flex',
      'items-center',
      'gap-1',
      'font-[Caveat,_cursive,_system-ui,_sans-serif]'
    ],
    link: [
      'relative',
      'inline-flex',
      'items-center',
      'px-2',
      'py-0.5',
      'transition-all',
      'font-medium',
      'tracking-wide',
      'border-[2px]',
      'border-solid',
      'rounded',
      '[transform:rotate(-0.3deg)]',
      'hover:[transform:rotate(0deg)]',
      'hover:translate-x-[1px]',
      'hover:translate-y-[1px]',
      'focus:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-offset-1',
      "before:content-['']",
      'before:absolute',
      'before:inset-0',
      'before:border-[1px]',
      'before:rounded-[inherit]',
      'before:border-black/10',
      'before:dark:border-white/10',
      'cursor-pointer'
    ],
    separator: [
      'mx-1',
      'select-none',
      'font-[Caveat,_cursive,_system-ui,_sans-serif]',
      'font-medium'
    ],
    current: [
      'px-2',
      'py-0.5',
      'font-medium',
      'border-[2px]',
      'border-solid',
      'rounded',
      '[transform:rotate(0.2deg)]',
      '[box-shadow:2px_2px_0px_0px_rgba(0,0,0,0.6)]',
      'dark:[box-shadow:2px_2px_0px_0px_rgba(255,255,255,0.4)]',
      "after:content-['']",
      'after:absolute',
      'after:inset-0',
      'after:border',
      'after:border-black/5',
      'after:dark:border-white/5',
      'after:rounded-[inherit]'
    ]
  },
  variants: {
    size: {
      sm: {
        link: 'text-sm px-1.5 py-0.5',
        current: 'text-sm px-1.5 py-0.5',
        separator: 'text-sm'
      },
      md: {
        link: 'text-base px-2 py-0.5',
        current: 'text-base px-2 py-0.5',
        separator: 'text-base'
      },
      lg: {
        link: 'text-lg px-2.5 py-1',
        current: 'text-lg px-2.5 py-1',
        separator: 'text-lg'
      }
    },
    color: {
      primary: {
        link: [
          'text-blue-800',
          'border-blue-600',
          'bg-blue-50/80',
          'hover:bg-blue-100/90',
          'dark:text-blue-200',
          'dark:border-blue-500',
          'dark:bg-blue-950/60',
          'dark:hover:bg-blue-950/80',
          'focus-visible:ring-blue-500/30'
        ],
        current: [
          'text-blue-900',
          'border-blue-700',
          'bg-blue-100/90',
          'dark:text-blue-100',
          'dark:border-blue-600',
          'dark:bg-blue-950/80'
        ],
        separator: 'text-blue-600/50 dark:text-blue-400/50'
      },
      secondary: {
        link: [
          'text-purple-800',
          'border-purple-600',
          'bg-purple-50/80',
          'hover:bg-purple-100/90',
          'dark:text-purple-200',
          'dark:border-purple-500',
          'dark:bg-purple-950/60',
          'dark:hover:bg-purple-950/80',
          'focus-visible:ring-purple-500/30'
        ],
        current: [
          'text-purple-900',
          'border-purple-700',
          'bg-purple-100/90',
          'dark:text-purple-100',
          'dark:border-purple-600',
          'dark:bg-purple-950/80'
        ],
        separator: 'text-purple-600/50 dark:text-purple-400/50'
      },
      success: {
        link: [
          'text-green-800',
          'border-green-600',
          'bg-green-50/80',
          'hover:bg-green-100/90',
          'dark:text-green-200',
          'dark:border-green-500',
          'dark:bg-green-950/60',
          'dark:hover:bg-green-950/80',
          'focus-visible:ring-green-500/30'
        ],
        current: [
          'text-green-900',
          'border-green-700',
          'bg-green-100/90',
          'dark:text-green-100',
          'dark:border-green-600',
          'dark:bg-green-950/80'
        ],
        separator: 'text-green-600/50 dark:text-green-400/50'
      },
      warning: {
        link: [
          'text-amber-800',
          'border-amber-600',
          'bg-amber-50/80',
          'hover:bg-amber-100/90',
          'dark:text-amber-200',
          'dark:border-amber-500',
          'dark:bg-amber-950/60',
          'dark:hover:bg-amber-950/80',
          'focus-visible:ring-amber-500/30'
        ],
        current: [
          'text-amber-900',
          'border-amber-700',
          'bg-amber-100/90',
          'dark:text-amber-100',
          'dark:border-amber-600',
          'dark:bg-amber-950/80'
        ],
        separator: 'text-amber-600/50 dark:text-amber-400/50'
      },
      danger: {
        link: [
          'text-red-800',
          'border-red-600',
          'bg-red-50/80',
          'hover:bg-red-100/90',
          'dark:text-red-200',
          'dark:border-red-500',
          'dark:bg-red-950/60',
          'dark:hover:bg-red-950/80',
          'focus-visible:ring-red-500/30'
        ],
        current: [
          'text-red-900',
          'border-red-700',
          'bg-red-100/90',
          'dark:text-red-100',
          'dark:border-red-600',
          'dark:bg-red-950/80'
        ],
        separator: 'text-red-600/50 dark:text-red-400/50'
      },
      info: {
        link: [
          'text-sky-800',
          'border-sky-600',
          'bg-sky-50/80',
          'hover:bg-sky-100/90',
          'dark:text-sky-200',
          'dark:border-sky-500',
          'dark:bg-sky-950/60',
          'dark:hover:bg-sky-950/80',
          'focus-visible:ring-sky-500/30'
        ],
        current: [
          'text-sky-900',
          'border-sky-700',
          'bg-sky-100/90',
          'dark:text-sky-100',
          'dark:border-sky-600',
          'dark:bg-sky-950/80'
        ],
        separator: 'text-sky-600/50 dark:text-sky-400/50'
      }
    },
    variant: {
      solid: {},
      light: {
        link: 'bg-opacity-40 hover:bg-opacity-50',
        current: 'bg-opacity-50'
      },
      bordered: {
        link: 'bg-transparent border-[1.5px]',
        current: 'bg-transparent border-[1.5px] [box-shadow:none]'
      }
    },
    isDisabled: {
      true: {
        link: [
          'opacity-50',
          'cursor-not-allowed',
          'pointer-events-none',
          'border-gray-400',
          'text-gray-500',
          'dark:border-gray-600',
          'dark:text-gray-400'
        ]
      }
    },
    underline: {
      none: {},
      hover: {
        link: 'hover:underline'
      },
      always: {
        link: 'underline'
      },
      active: {
        current: 'underline'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
    variant: 'solid',
    underline: 'none'
  }
})

export type BreadcrumbsVariantProps = VariantProps<typeof breadcrumbs>
export type BreadcrumbsSlots = keyof ReturnType<typeof breadcrumbs>
