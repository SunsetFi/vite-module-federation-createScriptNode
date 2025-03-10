import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { federation } from "@module-federation/vite";
export default defineConfig({
  base: "./",
  build: {
    target: "chrome89",
    rollupOptions: {
      input: ["./src/index.ts"],
      preserveEntrySignatures: "strict",
    },
    sourcemap: true,
    outDir: "dist",
  },
  plugins: [
    react(),
    // federation({
    //   name: "federated_module",
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     "./federated-module": "./src/federated-module.tsx",
    //   },
    //   shared: {
    //     react: { strictVersion: true },
    //     "react/": { strictVersion: true },
    //     "react-dom": { strictVersion: true },
    //   },
    // }),
  ],
});
