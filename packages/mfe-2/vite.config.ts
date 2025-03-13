import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  base: "./",
  build: {
    target: "chrome89",
    sourcemap: true,
    rollupOptions: {
      input: [],
    },
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
    port: 8082,
  },
  preview: {
    port: 8082,
  },
});
