        // tailwind.config.js
        /** @type {import('tailwindcss'.Config)} */
        module.exports = {
          content: [
            "./layouts/**/*.html",
            "./content/**/*.md"
            // Add other paths where you use Tailwind classes
          ],
          theme: {
            extend: {
              fonts: {
                --font-sans: ui-sans-serif, system-ui, sans-serif, Poppins, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                --font-serif: ui-serif, "Abril Fatface", Georgia, Cambria, "Times New Roman", Times, serif;
                --font-mono: ui-monospace, Copperplate, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                --font-Abril: 'Abril Fatface', serif;
                h1, h2, h3, h4, h5, h6 {
                font-family: 'Abril Fatface', serif;
}
  /* ... */
              }
              colors: {
                 'theme-green': {
                      DEFAULT: '#0a4009', // Your original .theme color
                      'light-5': '#e8fce8', // .theme-l5
                      'light-4': '#b3f4b2', // .theme-l4
                      'light-3': '#68e965', // .theme-l3
                      'light-2': '#22d81f', // .theme-l2
                      'light-1': '#168b14', // .theme-l1
                      'dark-1': '#093808',  // .theme-d1
                      'dark-2': '#083207',  // .theme-d2
                      'dark-3': '#072c06',  // .theme-d3
                      'dark-4': '#062505',  // .theme-d4
                      'dark-5': '#051f04',  // .theme-d5 (also .theme-dark and .theme-action)
                    },
                    // You can also define direct aliases if you prefer
                 'theme-light': '#e8fce8', // Your original .theme-light
                 'theme-dark': '#051f04',  // Your original .theme-dark
                 'theme-action': '#051f04',// Your original .theme-action
                          },
                    // ... existing theme-green scale ...
                  'gradient-start': 'hsla(120,38%,79%,1)', // #b4ddb4
                  'gradient-stop-17': 'hsla(120,38%,65%,1)', // #83c783
                  'gradient-stop-33': 'hsla(120,38%,51%,1)', // #52b152
                  'gradient-stop-67': 'hsla(120,100%,27%,1)', // #008a00
                  'gradient-stop-83': 'hsla(120,100%,17%,1)', // #005700
                  'gradient-stop-100': 'hsla(120,100%,7%,1)' // #002400
            },
          },
          plugins: [
            require('@headlessui/tailwindcss')          ]
        }
        // tailwind.config.js - Add these if they are distinct from your theme-green scale
// You can put them directly under 'colors' or 'theme-green' object
}