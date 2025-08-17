// themes/zero-point-amfr/tailwind.config.js

import { defineConfig } from 'vite'

/** @type {import('tailwindcss').Config} */
export default {
  // Specify which files Tailwind should scan for class names.
  content: [
    "./content/**/*.md",
    "./theme/zero-point-amfr/**/*.js",
    "./theme/zero-point-amfr/**/*.html",
    "./themes/zero-point-amfr/**/*.jsx",
    "./themes/zero-point-amfr/**/*.css"
  ],
  // Define and extend Tailwind's default theme.
  theme: {
    // We use "extend" to add new values without overwriting the defaults.
    extend: {
      // Define your custom font families here.
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Abril Fatface', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        mono: ['ui-monospace', 'Copperplate', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        abril: ['Abril Fatface', 'serif'],
      },
      
      // Define your custom color palette using the oklch format.
      colors: {
        // Main theme colors, now grouped under a single key.
        'theme-green': {
          DEFAULT: 'oklch(0.24 0.15 125.79)', // #0a4009
          'light-5': 'oklch(0.97 0.02 125.79)', // #e8fce8
          'light-4': 'oklch(0.85 0.14 125.79)', // #b3f4b2
          'light-3': 'oklch(0.7 0.23 125.79)', // #68e965
          'light-2': 'oklch(0.6 0.28 125.79)', // #22d81f
          'light-1': 'oklch(0.42 0.24 125.79)', // #168b14
          'dark-1': 'oklch(0.22 0.14 125.79)', // #093808
          'dark-2': 'oklch(0.2 0.13 125.79)', // #083207
          'dark-3': 'oklch(0.18 0.12 125.79)', // #072c06
          'dark-4': 'oklch(0.16 0.11 125.79)', // #062505
          'dark-5': 'oklch(0.14 0.1 125.79)', // #051f04
        },
        
        // Define your custom gradient colors clearly.
        'gradient': {
          start: 'oklch(0.85 0.08 120)', // hsla(120,38%,79%,1)
          'stop-17': 'oklch(0.75 0.12 120)', // hsla(120,38%,65%,1)
          'stop-33': 'oklch(0.65 0.16 120)', // hsla(120,38%,51%,1)
          'stop-67': 'oklch(0.48 0.24 120)', // hsla(120,100%,27%,1)
          'stop-83': 'oklch(0.35 0.24 120)', // hsla(120,100%,17%,1)
          'stop-100': 'oklch(0.21 0.24 120)', // hsla(120,100%,7%,1)
        },

        // Direct aliases for specific colors.
        'theme-light': 'oklch(0.97 0.02 125.79)',
        'theme-dark': 'oklch(0.14 0.1 125.79)',
        'theme-action': 'oklch(0.14 0.1 125.79)',
      },
    },
  },

  // Add your plugins here.s
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}

