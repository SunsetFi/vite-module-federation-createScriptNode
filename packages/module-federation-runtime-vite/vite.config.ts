import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "chrome89",
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index.js",
    },
    sourcemap: true,
    // rollupOptions: {
    //   input: ["./src/index.ts"],
    //   // Don't tree-shake our index, as those exports are our library contract.
    //   // This is one of the crucial pieces that lib mode sets automatically.
    //   preserveEntrySignatures: "strict",
    //   output: {
    //     manualChunks(id) {
    //       // Just put everything in one chunk.
    //       return "module-federation-runtime-vite";
    //     },
    //     assetFileNames: "module-federation-runtime-vite.[ext]",
    //     chunkFileNames: "module-federation-runtime-vite.[name].js",
    //     entryFileNames: "module-federation-runtime-vite.js",
    //     format: "es",
    //   },
    // },
  },
  plugins: [
    {
      name: "is-a-browser",
      enforce: "pre",
      transform(code, id) {
        // Rewrite the runtime so that isBrowserEnv() becomes `true`
        // This allows esbuild to tree-shake away the non-browser (NodeJS) code paths.
        if (id.includes("@module-federation/runtime")) {
          // If the ESM build is used, it won't be prefixed with sdk.
          // If the CJS build is used, it will be prefixed with sdk.
          const newCode = code.replace(/(sdk\.)?isBrowserEnv\(\)/g, "true");
          return newCode;
        }
      },
    },
  ],
});
