let count = 0;

// React Strict Mode explanation:
// In development, React Strict Mode intentionally invokes components twice (for certain functions) to help identify impure or unsafe code patterns.
// This makes it easier to spot side effects, such as mutations to variables outside the component scope.

export default function Message() {
  count++;
  // When using Strict Mode, you'll see two console logs for each render:
  //   - The first log is the initial render.
  //   - The second (often grayed out in the console) is a development-only re-invocation to help catch potential issues.
  console.log("Message called", count);
  return <div>Message {count}</div>;
}
