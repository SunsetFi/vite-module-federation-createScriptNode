import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  base: "./",
  build: {
    target: "chrome89",
    rollupOptions: {
      input: [],
      output: {
        manualChunks(id) {
          // For testing, so we can check to see if its minified
          if (id.includes("module-federation-runtime-vite")) {
            return "module-federation-runtime-vite";
          }
        },
      },
    },
    sourcemap: true,
  },
  esbuild: {
    // Disable all minification except tree-shaking so
    // we can see what's going on and prove its working.
    treeShaking: true,
    minifyIdentifiers: false,
    minifySyntax: false,
    minifyWhitespace: false,
  },
  plugins: [
    react(),
    federation({
      name: "federated_module",
      filename: "remoteEntry.js",
      // Use our minified runtime.
      implementation: "module-federation-runtime-vite",
      exposes: {
        "./microfrontend": "./src/microfrontend.tsx",
      },
      shared: ["react", "react/", "react-dom", "react-dom/"],
    }),
  ],
  server: {
    port: 8081,
    strictPort: true,
  },
  preview: {
    port: 8081,
    strictPort: true,
  },
});
