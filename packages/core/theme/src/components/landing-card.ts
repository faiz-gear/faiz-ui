import { VariantProps, tv } from "tailwind-variants";

export const landingCardContainer = tv({
  base: "relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow",
  variants: {
    color: {
      primary: "before:from-[#60a5fa]",
      secondary: "before:from-[#8b5cf6]",
      success: "before:from-[#34d399]",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export const landingCardWrapper = tv({
  base: "flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]",
});

export type LandingCardContainerVariantProps = VariantProps<
  typeof landingCardContainer
>;
