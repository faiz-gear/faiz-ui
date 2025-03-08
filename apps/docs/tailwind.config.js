// @ts-check
import { createPreset } from 'fumadocs-ui/tailwind-plugin'

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
    './node_modules/@faiz-ui/theme/dist/**/*.{js,mjs}'
  ],
  presets: [createPreset()]
}
