import React from "react";
import { createRoot } from "react-dom/client";

function FederatedModule() {
  return <div>Federated Module Number 2</div>;
}

export default function mount(container: Element) {
  createRoot(container).render(<FederatedModule />);
}
