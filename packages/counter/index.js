let counter = 0;
let callbacks = [];

export function increment() {
  counter++;
  callbacks.forEach((cb) => cb(counter));
}

export function onIncrement(cb) {
  callbacks.push(cb);
}
