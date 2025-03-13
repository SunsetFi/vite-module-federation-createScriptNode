import { defineConfig, PreviewOptions, ServerOptions } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

const server = {
  port: 8083,
  strictPort: true,
  cors: {
    origin: ["http://localhost:8080", "http://127.0.0.1:8080"],
  },
} satisfies ServerOptions & PreviewOptions;

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
  server,
  preview: server,
});
