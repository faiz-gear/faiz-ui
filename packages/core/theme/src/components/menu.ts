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
    title: [
      'px-3 py-2 text-lg font-bold',
      'text-neutral-900 dark:text-neutral-100',
      'border-b-[2px] border-dashed border-black/20 dark:border-white/20',
      '[transform:rotate(0.1deg)]'
    ],
    item: [
      'relative overflow-hidden transition-all',
      'flex items-center gap-2',
      'px-3 py-2',
      'cursor-pointer',
      'text-neutral-900 dark:text-neutral-100',
      'no-underline',
      'hover:bg-black/5 dark:hover:bg-white/5',
      'active:bg-black/10 dark:active:bg-white/10',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black/30 dark:focus-visible:ring-white/30',
      'border-b border-dashed border-black/10 dark:border-white/10 last:border-b-0',
      '[transform:rotate(0.1deg)]',
      'even:[transform:rotate(-0.1deg)]'
    ],
    itemIcon: ['flex-shrink-0 w-5 h-5'],
    itemContent: ['flex-1'],
    itemDescription: ['text-sm opacity-70 mt-0.5'],
    itemBadge: [
      'flex-shrink-0',
      'inline-flex items-center justify-center',
      'px-2 py-0.5',
      'text-xs font-bold',
      'rounded-full',
      'border-[1.5px] border-black dark:border-white',
      '[transform:rotate(-1deg)]',
      'bg-neutral-200 dark:bg-neutral-700',
      'text-neutral-900 dark:text-neutral-100'
    ],
    submenu: ['relative pl-4'],
    submenuTrigger: ['justify-between'],
    submenuIcon: ['flex-shrink-0 w-4 h-4 transition-transform duration-200'],
    submenuContent: [
      'overflow-hidden transition-all duration-200',
      'border-l-[2px] border-dashed border-black/20 dark:border-white/20 ml-4'
    ],
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
      xs: {
        base: 'text-xs min-w-[140px]',
        item: 'px-2 py-1 text-xs',
        itemIcon: 'w-3 h-3',
        title: 'px-2 py-1 text-sm'
      },
      sm: {
        base: 'text-sm min-w-[160px]',
        item: 'px-2 py-1.5 text-sm',
        itemIcon: 'w-4 h-4',
        title: 'px-2 py-1.5 text-base'
      },
      md: {
        base: 'text-base min-w-[200px]',
        item: 'px-3 py-2 text-base',
        itemIcon: 'w-5 h-5',
        title: 'px-3 py-2 text-lg'
      },
      lg: {
        base: 'text-lg min-w-[240px]',
        item: 'px-4 py-2.5 text-lg',
        itemIcon: 'w-6 h-6',
        title: 'px-4 py-2.5 text-xl'
      }
    },
    orientation: {
      vertical: {},
      horizontal: {
        base: 'flex-row min-w-fit',
        list: 'flex flex-row items-center py-0',
        item: 'border-b-0 border-r border-dashed border-black/10 dark:border-white/10 last:border-r-0',
        divider: 'my-0 mx-1 border-t-0 border-r-[1.5px] h-auto self-stretch'
      }
    },
    isCompact: {
      true: {
        base: 'min-w-fit',
        item: 'px-2 py-1',
        list: 'py-0.5'
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
    },
    isOpen: {
      true: {
        submenuIcon: 'rotate-90'
      }
    },
    badgeColor: {
      default: {
        itemBadge: 'bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100'
      },
      primary: {
        itemBadge: 'bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-100 border-blue-600 dark:border-blue-500'
      },
      secondary: {
        itemBadge: 'bg-purple-100 dark:bg-purple-900/50 text-purple-900 dark:text-purple-100 border-purple-600 dark:border-purple-500'
      },
      success: {
        itemBadge: 'bg-green-100 dark:bg-green-900/50 text-green-900 dark:text-green-100 border-green-600 dark:border-green-500'
      },
      warning: {
        itemBadge: 'bg-amber-100 dark:bg-amber-900/50 text-amber-900 dark:text-amber-100 border-amber-600 dark:border-amber-500'
      },
      danger: {
        itemBadge: 'bg-red-100 dark:bg-red-900/50 text-red-900 dark:text-red-100 border-red-600 dark:border-red-500'
      }
    }
  },
  defaultVariants: {
    variant: 'solid',
    color: 'default',
    size: 'md',
    orientation: 'vertical',
    badgeColor: 'default'
  }
})

export type MenuVariantProps = VariantProps<typeof menu>
export type MenuSlots = keyof ReturnType<typeof menu>
