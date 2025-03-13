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
  },
  plugins: [
    {
      name: "is-a-browser",
      enforce: "pre",
      transform(code, id) {
        // Rewrite the runtime so that isBrowserEnv() becomes `true`
        // This allows esbuild to tree-shake away the non-browser (NodeJS) code paths.
        // Not including the extension because we can do this for both the ESM and CJS builds.
        // For the purposes of this library, this will (should) always be the ESM build.
        if (id.includes("@module-federation/runtime-core/dist/index")) {
          // If the ESM build is used, it won't be prefixed with sdk.
          // If the CJS build is used, it will be prefixed with sdk.
          return code.replace(/(sdk\.)?isBrowserEnv\(\)/g, "true");
        }
      },
    },
  ],
});
