import {VariantProps, tv} from "tailwind-variants";

export const accordion = tv({
  slots: {
    base: ["relative w-full", "font-[Caveat,_cursive,_system-ui,_sans-serif]"],
    item: [
      "relative mb-2 isolate",
      "border-[2px] border-black dark:border-white",
      "border-solid rounded-md",
      "[box-shadow:3px_3px_0px_0px_rgba(0,0,0,0.8)] dark:[box-shadow:3px_3px_0px_0px_rgba(255,255,255,0.5)]",
      "[transform:rotate(-0.3deg)]",
      "after:content-[''] after:absolute after:-inset-0.5 after:border after:border-black/10 after:dark:border-white/10 after:rounded-[inherit] after:z-[-1]",
      "bg-neutral-50/90 dark:bg-neutral-900/90",

      // Hand-drawn variations for multiple items
      "even:[transform:rotate(0.2deg)]",
      "nth-[3n]:[transform:rotate(-0.2deg)]",
      "nth-[4n]:[transform:rotate(0.1deg)]",

      // Hover effects
      "hover:[transform:rotate(0deg)] hover:[box-shadow:2px_2px_0px_0px_rgba(0,0,0,0.6)] dark:hover:[box-shadow:2px_2px_0px_0px_rgba(255,255,255,0.3)]",
      "transition-[transform,box-shadow] duration-200 ease-out",
    ],
    header: [
      "relative w-full p-4 text-left",
      "font-medium tracking-wide text-black dark:text-white",
      "cursor-pointer select-none",
      "flex items-center justify-between gap-3",
      "transition-all duration-200 ease-out",

      // Remove default focus outline and implement custom hand-drawn focus styles
      "focus:outline-none focus-visible:outline-none",

      // Custom hand-drawn focus styles that match the aesthetic - only show on keyboard focus
      "focus-visible:[transform:rotate(0.1deg)] focus-visible:[box-shadow:0_0_0_2px_rgba(0,0,0,0.1),2px_2px_0px_0px_rgba(0,0,0,0.8)] dark:focus-visible:[box-shadow:0_0_0_2px_rgba(255,255,255,0.1),2px_2px_0px_0px_rgba(255,255,255,0.5)]",
      "focus-visible:bg-black/[0.02] dark:focus-visible:bg-white/[0.02]",

      // Hover styles
      "hover:bg-black/5 dark:hover:bg-white/5",
      "hover:[transform:rotate(-0.1deg)]",
    ],
    trigger: [
      "flex items-center justify-center",
      "w-6 h-6 rounded-full",
      "border border-current",
      "transition-transform duration-200 ease-out",
      "text-current",
    ],
    content: [
      "will-change-[height,opacity,transform]",
      "backface-visibility-hidden",
      "transform-gpu",
      "relative",
      "z-[1]",
    ],
    contentInner: [
      "p-4 pt-0",
      "text-gray-700 dark:text-gray-300",
      "font-normal tracking-normal",
      "transform-gpu",
      "will-change-transform",
    ],
  },
  variants: {
    color: {
      primary: {
        item: "text-blue-800 border-blue-600 dark:text-blue-200 dark:border-blue-500",
        header:
          "text-blue-800 dark:text-blue-200 focus-visible:bg-blue-50/50 dark:focus-visible:bg-blue-900/20 focus-visible:[box-shadow:0_0_0_2px_rgba(59,130,246,0.15),2px_2px_0px_0px_rgba(59,130,246,0.8)] dark:focus-visible:[box-shadow:0_0_0_2px_rgba(147,197,253,0.15),2px_2px_0px_0px_rgba(147,197,253,0.5)]",
        trigger: "text-blue-600 dark:text-blue-400",
      },
      secondary: {
        item: "text-purple-800 border-purple-600 dark:text-purple-200 dark:border-purple-500",
        header:
          "text-purple-800 dark:text-purple-200 focus-visible:bg-purple-50/50 dark:focus-visible:bg-purple-900/20 focus-visible:[box-shadow:0_0_0_2px_rgba(147,51,234,0.15),2px_2px_0px_0px_rgba(147,51,234,0.8)] dark:focus-visible:[box-shadow:0_0_0_2px_rgba(196,181,253,0.15),2px_2px_0px_0px_rgba(196,181,253,0.5)]",
        trigger: "text-purple-600 dark:text-purple-400",
      },
      success: {
        item: "text-green-800 border-green-600 dark:text-green-200 dark:border-green-500",
        header:
          "text-green-800 dark:text-green-200 focus-visible:bg-green-50/50 dark:focus-visible:bg-green-900/20 focus-visible:[box-shadow:0_0_0_2px_rgba(34,197,94,0.15),2px_2px_0px_0px_rgba(34,197,94,0.8)] dark:focus-visible:[box-shadow:0_0_0_2px_rgba(134,239,172,0.15),2px_2px_0px_0px_rgba(134,239,172,0.5)]",
        trigger: "text-green-600 dark:text-green-400",
      },
      warning: {
        item: "text-amber-800 border-amber-600 dark:text-amber-200 dark:border-amber-500",
        header:
          "text-amber-800 dark:text-amber-200 focus-visible:bg-amber-50/50 dark:focus-visible:bg-amber-900/20 focus-visible:[box-shadow:0_0_0_2px_rgba(245,158,11,0.15),2px_2px_0px_0px_rgba(245,158,11,0.8)] dark:focus-visible:[box-shadow:0_0_0_2px_rgba(252,211,77,0.15),2px_2px_0px_0px_rgba(252,211,77,0.5)]",
        trigger: "text-amber-600 dark:text-amber-400",
      },
      danger: {
        item: "text-red-800 border-red-600 dark:text-red-200 dark:border-red-500",
        header:
          "text-red-800 dark:text-red-200 focus-visible:bg-red-50/50 dark:focus-visible:bg-red-900/20 focus-visible:[box-shadow:0_0_0_2px_rgba(239,68,68,0.15),2px_2px_0px_0px_rgba(239,68,68,0.8)] dark:focus-visible:[box-shadow:0_0_0_2px_rgba(252,165,165,0.15),2px_2px_0px_0px_rgba(252,165,165,0.5)]",
        trigger: "text-red-600 dark:text-red-400",
      },
      info: {
        item: "text-sky-800 border-sky-600 dark:text-sky-200 dark:border-sky-500",
        header:
          "text-sky-800 dark:text-sky-200 focus-visible:bg-sky-50/50 dark:focus-visible:bg-sky-900/20 focus-visible:[box-shadow:0_0_0_2px_rgba(14,165,233,0.15),2px_2px_0px_0px_rgba(14,165,233,0.8)] dark:focus-visible:[box-shadow:0_0_0_2px_rgba(125,211,252,0.15),2px_2px_0px_0px_rgba(125,211,252,0.5)]",
        trigger: "text-sky-600 dark:text-sky-400",
      },
    },
    size: {
      sm: {
        header: "p-3 text-sm",
        contentInner: "p-3 pt-0 text-sm",
        trigger: "w-5 h-5",
      },
      md: {
        header: "p-4 text-base",
        contentInner: "p-4 pt-0 text-base",
        trigger: "w-6 h-6",
      },
      lg: {
        header: "p-5 text-lg",
        contentInner: "p-5 pt-0 text-lg",
        trigger: "w-7 h-7",
      },
    },
    variant: {
      solid: {
        header: "focus-visible:[transform:rotate(0.1deg)]",
      },
      outline: {
        item: "bg-transparent hover:bg-opacity-10",
        header: "focus-visible:[transform:rotate(-0.1deg)] focus-visible:bg-opacity-5",
      },
      ghost: {
        item: "bg-transparent border-dashed hover:bg-opacity-10 after:border-dashed",
        header:
          "focus-visible:[transform:rotate(0.2deg)] focus-visible:bg-opacity-5 focus-visible:border-dashed",
      },
      light: {
        item: "bg-opacity-40 hover:bg-opacity-50 border-[1px] [box-shadow:2px_2px_0px_0px_rgba(0,0,0,0.6)] dark:[box-shadow:2px_2px_0px_0px_rgba(255,255,255,0.3)]",
        header: "focus-visible:[transform:rotate(-0.2deg)] focus-visible:bg-opacity-60",
      },
      flat: {
        item: "[box-shadow:none] border-[1px] border-dashed after:border-dashed hover:bg-opacity-10",
        header:
          "focus-visible:[transform:rotate(0.1deg)] focus-visible:bg-opacity-5 focus-visible:[box-shadow:none]",
      },
      sketchy: {
        item: "border-[1.5px] [border-style:solid_dashed_solid_dotted] [box-shadow:3px_3px_0px_0px_rgba(0,0,0,0.2)] dark:[box-shadow:3px_3px_0px_0px_rgba(255,255,255,0.1)] bg-opacity-40",
        header:
          "focus-visible:[transform:rotate(-0.3deg)] focus-visible:bg-opacity-60 focus-visible:[border-style:dashed_solid_dotted_solid]",
      },
    },
    isExpanded: {
      true: {
        trigger: "rotate-180",
      },
      false: {
        trigger: "rotate-0",
      },
    },
    isDisabled: {
      true: {
        item: "opacity-50 cursor-not-allowed",
        header: "cursor-not-allowed pointer-events-none",
        trigger: "cursor-not-allowed",
      },
      false: {},
    },
  },
  compoundVariants: [
    // Solid variant color combinations
    {
      variant: "solid",
      color: "primary",
      class: {
        item: "bg-blue-100/90 dark:bg-blue-950/80",
      },
    },
    {
      variant: "solid",
      color: "secondary",
      class: {
        item: "bg-purple-100/90 dark:bg-purple-950/80",
      },
    },
    {
      variant: "solid",
      color: "success",
      class: {
        item: "bg-green-100/90 dark:bg-green-950/80",
      },
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        item: "bg-amber-100/90 dark:bg-amber-950/80",
      },
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        item: "bg-red-100/90 dark:bg-red-950/80",
      },
    },
    {
      variant: "solid",
      color: "info",
      class: {
        item: "bg-sky-100/90 dark:bg-sky-950/80",
      },
    },
    // Outline variant hover effects
    {
      variant: "outline",
      color: "primary",
      class: {
        header: "hover:bg-blue-100/50 dark:hover:bg-blue-900/20",
      },
    },
    {
      variant: "outline",
      color: "secondary",
      class: {
        header: "hover:bg-purple-100/50 dark:hover:bg-purple-900/20",
      },
    },
    {
      variant: "outline",
      color: "success",
      class: {
        header: "hover:bg-green-100/50 dark:hover:bg-green-900/20",
      },
    },
    {
      variant: "outline",
      color: "warning",
      class: {
        header: "hover:bg-amber-100/50 dark:hover:bg-amber-900/20",
      },
    },
    {
      variant: "outline",
      color: "danger",
      class: {
        header: "hover:bg-red-100/50 dark:hover:bg-red-900/20",
      },
    },
    {
      variant: "outline",
      color: "info",
      class: {
        header: "hover:bg-sky-100/50 dark:hover:bg-sky-900/20",
      },
    },
    // Sketchy variant color combinations
    {
      variant: "sketchy",
      color: "primary",
      class: {
        item: "bg-blue-50/80 [box-shadow:3px_3px_0px_0px_rgba(59,130,246,0.2)]",
      },
    },
    {
      variant: "sketchy",
      color: "secondary",
      class: {
        item: "bg-purple-50/80 [box-shadow:3px_3px_0px_0px_rgba(147,51,234,0.2)]",
      },
    },
    {
      variant: "sketchy",
      color: "success",
      class: {
        item: "bg-green-50/80 [box-shadow:3px_3px_0px_0px_rgba(34,197,94,0.2)]",
      },
    },
    {
      variant: "sketchy",
      color: "warning",
      class: {
        item: "bg-amber-50/80 [box-shadow:3px_3px_0px_0px_rgba(217,119,6,0.2)]",
      },
    },
    {
      variant: "sketchy",
      color: "danger",
      class: {
        item: "bg-red-50/80 [box-shadow:3px_3px_0px_0px_rgba(220,38,38,0.2)]",
      },
    },
    {
      variant: "sketchy",
      color: "info",
      class: {
        item: "bg-sky-50/80 [box-shadow:3px_3px_0px_0px_rgba(14,165,233,0.2)]",
      },
    },
  ],
  defaultVariants: {
    color: "primary",
    size: "md",
    variant: "solid",
    isExpanded: false,
    isDisabled: false,
  },
});

export type AccordionVariantProps = VariantProps<typeof accordion>;
export type AccordionSlots = keyof ReturnType<typeof accordion>;
export type AccordionReturn = ReturnType<typeof accordion>;
