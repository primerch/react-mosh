// Declaring count outside the component makes it impure because it persists and shares state across renders and component instances.
// Keeping count inside the component keeps it pure, as it resets on every render and doesn't produce side effects.

export default function Message() {
  let count = 0; // Pure: local to the render, doesn't retain state between renders
  count++;
  return <div>Message {count}</div>;
}
