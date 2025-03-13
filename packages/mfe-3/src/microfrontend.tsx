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
      <h2>Microfrontend 3</h2>
      <h5>
        This microfrontend is not sharing the counter library, and so its count
        should be independent.
      </h5>
      <div>Counter: {currentCount}</div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default function mount(container: Element) {
  createRoot(container).render(<FederatedModule />);
}
