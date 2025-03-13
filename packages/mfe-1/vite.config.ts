import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

const runtime = import.meta.resolve("module-federation-runtime-vite");

export default defineConfig({
  base: "./",
  build: {
    target: "chrome89",
    rollupOptions: {
      input: ["./src/index.ts"],
      output: {
        format: "es",
        manualChunks(id) {
          // For testing, so we can see if the whitespace is minified
          if (id.includes("module-federation-runtime-vite")) {
            return "module-federation-runtime-vite";
          }
        },
      },
    },
    sourcemap: true,
  },
  plugins: [
    react(),
    federation({
      name: "federated_module",
      filename: "remoteEntry.js",
      // Use our minified runtime.
      implementation: runtime,
      exposes: {
        "./microfrontend": "./src/microfrontend.tsx",
      },
      shared: ["react", "react/", "react-dom", "react-dom/"],
    }),
  ],
  server: {
    port: 8081,
  },
  preview: {
    port: 8081,
  },
});
