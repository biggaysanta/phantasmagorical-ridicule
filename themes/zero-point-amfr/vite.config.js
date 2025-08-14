import { defineConfig } from "vite";

export default defineConfig({
  // The 'publicDir' option ensures Vite knows where to find our static assets.
  publicDir: "../../static",
  build: {
    // We want the final assets to be output to the theme's static directory.
    outDir: "static",
    rollupOptions: {
      // Define the entry points for your assets.
      input: ["assets/css/main.css", "assets/js/main.js"],
      // This is crucial. It ensures the assets are not bundled into a single JS file.
      output: {
        entryFileNames: "js/[name].js",
        chunkFileNames: "js/[name]-[hash].js",
        assetFileNames: "css/[name].[ext]",
      },
    },
  },
});