import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
export default defineConfig({
  base: "./",
  build: {
    target: "chrome89",
    rollupOptions: {
      input: ["./src/index.ts", "./src/federated-module.tsx"],
      preserveEntrySignatures: "strict",
    },
    sourcemap: true,
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@module-federation/sdk": import.meta.resolve("@module-federation/sdk"),
    },
  },
  plugins: [
    react(),
    federation({
      name: "federated_module",
      filename: "remoteEntry.js",
      exposes: {
        "./federated-module": "./src/federated-module.tsx",
      },
      shared: {
        react: { strictVersion: true },
        "react/": { strictVersion: true },
        "react-dom": { strictVersion: true },
      },
    }),
  ],
});
