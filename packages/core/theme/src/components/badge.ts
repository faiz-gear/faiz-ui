import { VariantProps, tv } from 'tailwind-variants'

export const badge = tv({
  base: [
    'relative inline-flex items-center justify-center',
    'font-medium tracking-tight select-none',
    'font-sans text-xs leading-none',
    'transition-all duration-150',
    'whitespace-nowrap',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1',
  ],
  variants: {
    color: {
      default: 'text-gray-700 dark:text-gray-300',
      primary: 'text-blue-700 dark:text-blue-300',
      secondary: 'text-purple-700 dark:text-purple-300',
      success: 'text-green-700 dark:text-green-300',
      warning: 'text-amber-700 dark:text-amber-300',
      error: 'text-red-700 dark:text-red-300',
      info: 'text-sky-700 dark:text-sky-300'
    },
    size: {
      xs: 'px-1.5 py-0.5 text-[10px] min-h-[14px] min-w-[14px]',
      sm: 'px-2 py-0.5 text-[11px] min-h-[16px] min-w-[16px]',
      md: 'px-2.5 py-1 text-xs min-h-[18px] min-w-[18px]',
      lg: 'px-3 py-1 text-sm min-h-[20px] min-w-[20px]',
      xl: 'px-3.5 py-1.5 text-base min-h-[24px] min-w-[24px]'
    },
    shape: {
      rounded: 'rounded-lg',
      pill: 'rounded-full',
      square: 'rounded-sm',
      full: 'rounded-full'
    },
    variant: {
      solid: 'border-0',
      outline: 'bg-transparent border border-current',
      ghost: 'bg-transparent',
      light: 'border-0',
      flat: 'border-0 shadow-none',
      sketchy: 'border border-dashed border-current bg-transparent'
    },
    isDot: {
      true: 'w-2 h-2 p-0 min-h-0 min-w-0 rounded-full border-0',
      false: ''
    },
    position: {
      'top-right': 'absolute -top-1 -right-1 z-10',
      'top-left': 'absolute -top-1 -left-1 z-10',
      'bottom-right': 'absolute -bottom-1 -right-1 z-10',
      'bottom-left': 'absolute -bottom-1 -left-1 z-10',
      center: 'relative',
      static: 'relative'
    },
    isDisabled: {
      true: 'opacity-40 cursor-not-allowed',
      false: ''
    }
  },
  compoundVariants: [
    // Solid variant colors - subtle backgrounds with good contrast
    {
      variant: 'solid',
      color: 'default',
      class: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
    },
    {
      variant: 'solid',
      color: 'primary',
      class: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100'
    },
    {
      variant: 'solid',
      color: 'success',
      class: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
    },
    {
      variant: 'solid',
      color: 'warning',
      class: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100'
    },
    {
      variant: 'solid',
      color: 'error',
      class: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
    },
    {
      variant: 'solid',
      color: 'info',
      class: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-100'
    },
    // Light variant colors - very subtle backgrounds
    {
      variant: 'light',
      color: 'default',
      class: 'bg-gray-50 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300'
    },
    {
      variant: 'light',
      color: 'primary',
      class: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
    },
    {
      variant: 'light',
      color: 'secondary',
      class: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
    },
    {
      variant: 'light',
      color: 'success',
      class: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300'
    },
    {
      variant: 'light',
      color: 'warning',
      class: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
    },
    {
      variant: 'light',
      color: 'error',
      class: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300'
    },
    {
      variant: 'light',
      color: 'info',
      class: 'bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300'
    },
    // Dot variant colors
    {
      isDot: true,
      color: 'default',
      class: 'bg-gray-500 dark:bg-gray-400'
    },
    {
      isDot: true,
      color: 'primary',
      class: 'bg-blue-500 dark:bg-blue-400'
    },
    {
      isDot: true,
      color: 'secondary',
      class: 'bg-purple-500 dark:bg-purple-400'
    },
    {
      isDot: true,
      color: 'success',
      class: 'bg-green-500 dark:bg-green-400'
    },
    {
      isDot: true,
      color: 'warning',
      class: 'bg-amber-500 dark:bg-amber-400'
    },
    {
      isDot: true,
      color: 'error',
      class: 'bg-red-500 dark:bg-red-400'
    },
    {
      isDot: true,
      color: 'info',
      class: 'bg-sky-500 dark:bg-sky-400'
    },
    // Sketchy variant colors - simplified sketchy style for badges
    {
      variant: 'sketchy',
      color: 'default',
      class: 'bg-gray-50/60 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
    },
    {
      variant: 'sketchy',
      color: 'primary',
      class: 'bg-blue-50/60 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
    },
    {
      variant: 'sketchy',
      color: 'secondary',
      class: 'bg-purple-50/60 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
    },
    {
      variant: 'sketchy',
      color: 'success',
      class: 'bg-green-50/60 text-green-700 dark:bg-green-900/30 dark:text-green-300'
    },
    {
      variant: 'sketchy',
      color: 'warning',
      class: 'bg-amber-50/60 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
    },
    {
      variant: 'sketchy',
      color: 'error',
      class: 'bg-red-50/60 text-red-700 dark:bg-red-900/30 dark:text-red-300'
    },
    {
      variant: 'sketchy',
      color: 'info',
      class: 'bg-sky-50/60 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300'
    }
  ],
  defaultVariants: {
    color: 'primary',
    size: 'sm',
    shape: 'pill',
    variant: 'solid',
    isDot: false,
    position: 'static',
    isDisabled: false
  }
})

export type BadgeVariantProps = VariantProps<typeof badge>
