import { VariantProps, tv } from 'tailwind-variants'

export const alert = tv({
  slots:{
    base: [
      'relative py-3 px-4 overflow-hidden transition-all',
      'flex items-start gap-3',
  
      'font-medium tracking-wide',
      'font-[Caveat,_cursive,_system-ui,_sans-serif] dark:text-white',
  
      'border-[2px] border-black dark:border-white',
      'border-solid',
      'rounded-md',
  
      '[box-shadow:3px_3px_0px_0px_rgba(0,0,0,0.8)] dark:[box-shadow:3px_3px_0px_0px_rgba(255,255,255,0.5)]',
      '[transform:rotate(-0.3deg)]',
      "after:content-[''] after:absolute after:-inset-0.5 after:border after:border-black/10 after:dark:border-white/10 after:rounded-[inherit] after:z-[-1]",
      'bg-neutral-50/90',
  
      'even:[transform:rotate(0.2deg)]',
      'nth-[3n]:[transform:rotate(-0.2deg)]',
  
      "before:content-[''] before:absolute before:inset-0 before:border-[1px] before:border-black/20 before:dark:border-white/20 before:z-[-1]",
      'before:rounded-[inherit]',
  
      'after:opacity-30 after:bg-[length:5px_5px]'
    ],
    icon: 'flex-shrink-0 mt-0.5',
    content: 'flex-grow',
    action: 'flex-shrink-0 ml-auto',
    closeButton: 'flex-shrink-0 ml-2 -mr-1 p-1 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors',
  },
  variants: {
    color: {
      primary: 'text-blue-800 border-blue-600 dark:text-blue-200 dark:border-blue-500',
      secondary: 'text-purple-800 border-purple-600 dark:text-purple-200 dark:border-purple-500',
      success: 'text-green-800 border-green-600 dark:text-green-200 dark:border-green-500',
      warning: 'text-amber-800 border-amber-600 dark:text-amber-200 dark:border-amber-500',
      danger: 'text-red-800 border-red-600 dark:text-red-200 dark:border-red-500',
      info: 'text-sky-800 border-sky-600 dark:text-sky-200 dark:border-sky-500'
    },
    radius: {
      none: 'rounded-none before:rounded-none',
      sm: 'rounded-sm before:rounded-sm',
      md: 'rounded-md before:rounded-md',
      lg: 'rounded-lg before:rounded-lg',
      xl: 'rounded-xl before:rounded-xl',
      full: 'rounded-full before:rounded-full'
    },
    variant: {
      solid: '',
      outline: 'bg-transparent hover:bg-opacity-10',
      ghost: 'bg-transparent border-dashed hover:bg-opacity-10 before:border-dashed',
      light: 'bg-opacity-40 hover:bg-opacity-50 border-[1px] [box-shadow:2px_2px_0px_0px_rgba(0,0,0,0.6)]',
      flat: '[box-shadow:none] border-[1px] border-dashed before:border-dashed hover:bg-opacity-10',
      sketchy:
        'border-[1.5px] [border-style:solid_dashed_solid_dotted] [box-shadow:3px_3px_0px_0px_rgba(0,0,0,0.2)] bg-opacity-40'
    },
    hideIcon: {
      true: ''
    }
  },
  compoundVariants: [
    {
      variant: 'solid',
      color: 'primary',
      class: 'bg-blue-100/90 dark:bg-blue-950/80'
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: 'bg-purple-100/90 dark:bg-purple-950/80'
    },
    {
      variant: 'solid',
      color: 'success',
      class: 'bg-green-100/90 dark:bg-green-950/80'
    },
    {
      variant: 'solid',
      color: 'warning',
      class: 'bg-amber-100/90 dark:bg-amber-950/80'
    },
    {
      variant: 'solid',
      color: 'danger',
      class: 'bg-red-100/90 dark:bg-red-950/80'
    },
    {
      variant: 'solid',
      color: 'info',
      class: 'bg-sky-100/90 dark:bg-sky-950/80'
    },
    {
      variant: 'outline',
      color: 'primary',
      class: 'hover:bg-blue-100/50 dark:hover:bg-blue-900/20'
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: 'hover:bg-purple-100/50 dark:hover:bg-purple-900/20'
    },
    {
      variant: 'outline',
      color: 'success',
      class: 'hover:bg-green-100/50 dark:hover:bg-green-900/20'
    },
    {
      variant: 'outline',
      color: 'warning',
      class: 'hover:bg-amber-100/50 dark:hover:bg-amber-900/20'
    },
    {
      variant: 'outline',
      color: 'danger',
      class: 'hover:bg-red-100/50 dark:hover:bg-red-900/20'
    },
    {
      variant: 'outline',
      color: 'info',
      class: 'hover:bg-sky-100/50 dark:hover:bg-sky-900/20'
    },
    {
      variant: 'sketchy',
      color: 'primary',
      class: 'bg-blue-50/80 [box-shadow:3px_3px_0px_0px_rgba(37,99,235,0.2)]'
    },
    {
      variant: 'sketchy',
      color: 'secondary',
      class: 'bg-purple-50/80 [box-shadow:3px_3px_0px_0px_rgba(147,51,234,0.2)]'
    },
    {
      variant: 'sketchy',
      color: 'success',
      class: 'bg-green-50/80 [box-shadow:3px_3px_0px_0px_rgba(22,163,74,0.2)]'
    },
    {
      variant: 'sketchy',
      color: 'warning',
      class: 'bg-amber-50/80 [box-shadow:3px_3px_0px_0px_rgba(217,119,6,0.2)]'
    },
    {
      variant: 'sketchy',
      color: 'danger',
      class: 'bg-red-50/80 [box-shadow:3px_3px_0px_0px_rgba(220,38,38,0.2)]'
    },
    {
      variant: 'sketchy',
      color: 'info',
      class: 'bg-sky-50/80 [box-shadow:3px_3px_0px_0px_rgba(14,165,233,0.2)]'
    }
  ],
  defaultVariants: {
    color: 'primary',
    radius: 'md',
    variant: 'solid',
    hideIcon: false
  }
})

export type AlertVariantProps = VariantProps<typeof alert>;
export type AlertSlots = keyof ReturnType<typeof alert>;
export type AlertReturn = ReturnType<typeof alert>;
