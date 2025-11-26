import { VariantProps, tv } from 'tailwind-variants'

export const menu = tv({
  slots: {
    base: [
      'relative overflow-hidden transition-all',
      'flex flex-col',
      'font-medium tracking-wide',
      'font-[Caveat,_cursive,_system-ui,_sans-serif]',
      'border-[2px] border-black dark:border-white',
      'border-solid',
      'rounded-md',
      '[box-shadow:3px_3px_0px_0px_rgba(0,0,0,0.8)] dark:[box-shadow:3px_3px_0px_0px_rgba(255,255,255,0.5)]',
      '[transform:rotate(-0.3deg)]',
      "after:content-[''] after:absolute after:-inset-0.5 after:border after:border-black/10 after:dark:border-white/10 after:rounded-[inherit] after:z-[-1]",
      'bg-neutral-50/90 dark:bg-neutral-900/90',
      "before:content-[''] before:absolute before:inset-0 before:border-[1px] before:border-black/20 before:dark:border-white/20",
      'before:rounded-[inherit]'
    ],
    list: ['relative z-10 py-1'],
    item: [
      'relative overflow-hidden transition-all',
      'flex items-center gap-2',
      'px-3 py-2',
      'cursor-pointer',
      'text-neutral-900 dark:text-neutral-100',
      'hover:bg-black/5 dark:hover:bg-white/5',
      'active:bg-black/10 dark:active:bg-white/10',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black/30 dark:focus-visible:ring-white/30',
      'border-b border-dashed border-black/10 dark:border-white/10 last:border-b-0',
      '[transform:rotate(0.1deg)]',
      'even:[transform:rotate(-0.1deg)]'
    ],
    itemIcon: ['flex-shrink-0 w-5 h-5'],
    itemContent: ['flex-1'],
    itemDescription: ['text-sm opacity-70'],
    section: ['relative py-1'],
    sectionTitle: [
      'px-3 py-1 text-xs uppercase tracking-wider',
      'text-neutral-600 dark:text-neutral-400',
      'font-bold',
      'border-b border-dashed border-black/20 dark:border-white/20'
    ],
    divider: ['my-1 border-t-[1.5px] border-dashed border-black/20 dark:border-white/20']
  },
  variants: {
    variant: {
      solid: {
        base: 'bg-neutral-50/90 dark:bg-neutral-900/90'
      },
      bordered: {
        base: 'bg-transparent border-[2px]'
      },
      light: {
        base: 'bg-neutral-50/40 dark:bg-neutral-900/40 border-[1px] [box-shadow:2px_2px_0px_0px_rgba(0,0,0,0.6)]'
      },
      flat: {
        base: '[box-shadow:none] border-[1px] border-dashed before:border-dashed'
      }
    },
    color: {
      default: {},
      primary: {
        base: 'border-blue-600 dark:border-blue-500',
        item: 'hover:bg-blue-100/50 dark:hover:bg-blue-900/20 active:bg-blue-100/80 dark:active:bg-blue-900/30'
      },
      secondary: {
        base: 'border-purple-600 dark:border-purple-500',
        item: 'hover:bg-purple-100/50 dark:hover:bg-purple-900/20 active:bg-purple-100/80 dark:active:bg-purple-900/30'
      },
      success: {
        base: 'border-green-600 dark:border-green-500',
        item: 'hover:bg-green-100/50 dark:hover:bg-green-900/20 active:bg-green-100/80 dark:active:bg-green-900/30'
      },
      warning: {
        base: 'border-amber-600 dark:border-amber-500',
        item: 'hover:bg-amber-100/50 dark:hover:bg-amber-900/20 active:bg-amber-100/80 dark:active:bg-amber-900/30'
      },
      danger: {
        base: 'border-red-600 dark:border-red-500',
        item: 'hover:bg-red-100/50 dark:hover:bg-red-900/20 active:bg-red-100/80 dark:active:bg-red-900/30'
      }
    },
    size: {
      sm: {
        base: 'text-sm min-w-[160px]',
        item: 'px-2 py-1.5 text-sm',
        itemIcon: 'w-4 h-4'
      },
      md: {
        base: 'text-base min-w-[200px]',
        item: 'px-3 py-2 text-base',
        itemIcon: 'w-5 h-5'
      },
      lg: {
        base: 'text-lg min-w-[240px]',
        item: 'px-4 py-2.5 text-lg',
        itemIcon: 'w-6 h-6'
      }
    },
    isDisabled: {
      true: {
        item: 'opacity-50 cursor-not-allowed pointer-events-none'
      }
    },
    isSelected: {
      true: {
        item: 'bg-black/10 dark:bg-white/10 font-bold'
      }
    }
  },
  defaultVariants: {
    variant: 'solid',
    color: 'default',
    size: 'md'
  }
})

export type MenuVariantProps = VariantProps<typeof menu>
export type MenuSlots = keyof ReturnType<typeof menu>
