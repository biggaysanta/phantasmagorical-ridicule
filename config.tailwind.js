        // tailwind.config.js
        module.exports = {
          content: [
            "./layouts/**/*.html",
            "./content/**/*.md",
            // Add other paths where you use Tailwind classes
          ],
          theme: {
            extend: {},
          },
          plugins: [
            require('@headlessui/tailwindcss')          ]
        }