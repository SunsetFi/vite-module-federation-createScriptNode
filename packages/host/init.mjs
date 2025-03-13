import { loadFederatedModule } from "./federated-module.mjs";

console.log("Hello World");
const [mfe1Exports, mfe2Exports, mfe3Exports] = await Promise.all([
  loadFederatedModule(
    "http://localhost:8081/remoteEntry.js",
    "./microfrontend"
  ),
  loadFederatedModule(
    "http://localhost:8082/remoteEntry.js",
    "./microfrontend"
  ),
  loadFederatedModule(
    "http://localhost:8083/remoteEntry.js",
    "./microfrontend"
  ),
]);

const mfe1Container = document.getElementById("mfe-1");
const mfe2Container = document.getElementById("mfe-2");
const mfe3Container = document.getElementById("mfe-3");

mfe1Exports.default(mfe1Container);
mfe2Exports.default(mfe2Container);
mfe3Exports.default(mfe3Container);
