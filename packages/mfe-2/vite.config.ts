import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
// import { writeFileSync } from "fs";

const runtimeModules = [
  "@module-federation/runtime-core/dist",
  "@module-federation/runtime/dist",
  "@module-federation/sdk/dist",
  "@module-federation/error-codes/dist",
];

export default defineConfig({
  base: "./",
  esbuild: {
    // Disable all optimizations except tree-shaking for easier diagnostics and testing.
    treeShaking: true,
    minifyIdentifiers: false,
    minifySyntax: false,
    minifyWhitespace: false,
  },
  build: {
    // HACK: Vite (Or @rollup/plugin-commonjs) is determining that @module-federation/runtime is CommonJS.
    // This results in it wrapping it with a CJS to MJS shim, breaking tree-shaking entirely.
    // commonjsOptions: {
    //   ignore(id) {
    //     if (id.includes("@module-federation/runtime")) {
    //       return true;
    //     }
    //     return false;
    //   },
    // },
    target: "chrome89",
    rollupOptions: {
      input: ["./src/index.ts"],
      output: {
        format: "es",
        // For ease of testing, put all the @module-federation/runtime modules into a single runtime chunk.
        // This isn't required for the fix, but it makes it easier to see what's going on.
        // manualChunks(id) {
        //   if (runtimeModules.some((x) => id.includes(x))) {
        //     console.log("Using runtime chunk for", id);
        //     return "runtime";
        //   }
        // },
      },
    },
    sourcemap: true,
    outDir: "dist",
  },
  plugins: [
    // {
    //   name: "is-a-browser",
    //   enforce: "pre",
    //   transform(code, id) {
    //     // HACK: Rewrite the runtime so that isBrowserEnv() becomes `true`
    //     // This allows esbuild to tree-shake away the non-browser (NodeJS) code paths.
    //     if (id.includes("@module-federation/runtime")) {
    //       // If the ESM build is used, it won't be prefixed with sdk.
    //       // If the CJS build is used, it will be prefixed with sdk.
    //       const newCode = code.replace(/(sdk\.)?isBrowserEnv\(\)/g, "true");
    //       return Promise.resolve(newCode);
    //     }
    //     return Promise.resolve();
    //   },
    // },
    react(),
    federation({
      name: "federated_module",
      filename: "remoteEntry.js",
      // Hack: We are getting the CJS build of @module-federation/vite, and the MJS build is broken.
      // Work around this by explicitly using 'our' locally installed runtime, which due to using import.meta.resolve,
      // will resolve to the MJS version.
      implementation: import.meta.resolve("@module-federation/runtime"),
      exposes: {
        "./microfrontend": "./src/microfrontend.tsx",
      },
      shared: ["react", "react/", "react-dom", "react-dom/"],
    }),
    // Enable for detailed diagnostics on what vite/rollup is doing.
    // {
    //   name: "diagnostics",
    //   enforce: "post",
    //   generateBundle(options, bundle) {
    //     writeFileSync("bundle.json", JSON.stringify(bundle, null, 2));
    //   },
    // },
  ],
  server: {
    port: 8082,
  },
  preview: {
    port: 8082,
  },
});
