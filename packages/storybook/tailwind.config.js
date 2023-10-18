/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './.storybook/welcome.stories.mdx',
    '../ui/*/src/**/*.{js,jsx,ts,tsx}',
    '../ui/*/stories/**/*.{js,jsx,ts,tsx}',
    '../core/theme/src/components/**/*.{js,jsx,ts,tsx}',
    '../core/theme/src/utils/**/*.{js,jsx,ts,tsx}',
    '../core/theme/stories/**/*.{js,jsx,ts,tsx}'
  ]
}
