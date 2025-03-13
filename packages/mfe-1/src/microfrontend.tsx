import React from "react";
import { createRoot } from "react-dom/client";
import { increment, onIncrement } from "counter";

function FederatedModule() {
  const [currentCount, setCurrentCount] = React.useState(0);
  React.useEffect(() => {
    onIncrement((value) => {
      setCurrentCount(value);
    });
  }, []);

  return (
    <div>
      <h2>Microfrontend 1</h2>
      <h5>
        This counter is federated and should stay in sync with Microfrontend 2
      </h5>
      <div>Counter: {currentCount}</div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default function mount(container: Element) {
  createRoot(container).render(<FederatedModule />);
}
