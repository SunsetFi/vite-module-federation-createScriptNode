function bootstrapModuleFederation() {
  if (window.__webpack_share_scopes__ !== undefined) {
    return;
  }

  window.__webpack_share_scopes__ = {};
  window.__webpack_init_sharing__ = async function (shareScope) {
    if (!window.__webpack_share_scopes__[shareScope]) {
      window.__webpack_share_scopes__[shareScope] = {};
    }
  };
}

export async function loadFederatedModule(src, module, shareScope = "default") {
  bootstrapModuleFederation();

  console.log("[loadFederatedModule]: Initializing shareScope", shareScope);
  await __webpack_init_sharing__(shareScope);

  console.log("[loadFederatedModule]: Loading module", src);
  const container = await import(src);

  if (!container) {
    throw new Error(`Cannot load remote module in ${src}`);
  }

  if (!container.init || !container.get) {
    throw new Error(
      `Module at ${src} does not appear to be a federated module.`
    );
  }

  console.log("[loadFederatedModule]: Initializing container");
  await container.init(__webpack_share_scopes__[shareScope]);

  console.log("[loadFederatedModule]: Getting factory", module);
  const factory = await container.get(module);

  console.log("[loadFederatedModule]: Executing factory");
  const result = await factory();
  console.log("[loadFederatedModule]: Factory received", result);
  return result;
}
