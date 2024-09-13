import { VariantProps, tv } from "tailwind-variants";

export const button = tv({
  base: "relative font-semibold text-white py-1 px-3 rounded-full active:opacity-80 overflow-hidden",
  variants: {
    color: {
      primary: "bg-blue-500",
      secondary: "bg-purple-500",
      success: "bg-green-500",
    },
    size: {
      sm: "py-1 px-3 text-xs",
      md: "py-1.5 px-4 text-sm",
      lg: "py-2 px-6 text-md",
      xl: "py-3 px-8 text-lg",
    },
    radius: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    radius: "md",
  },
});

export type ButtonVariantProps = VariantProps<typeof button>;
