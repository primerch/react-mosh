// 1. JSX (JavaScript XML): Returns markup-like syntax for React components
//    - Component names should use PascalCase (e.g., Message, MyComponent).

// 2. Use '.tsx' extension when writing React components, and '.ts' for standard TypeScript files.

function Message() {
  const name = "Reacher";

  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

// 3. Modules:
// - Each file (.ts/.tsx) is treated as an independent module.
// - Modules keep their content private unless explicitly exported.
// - export default makes this Message component available to import into other modules.
export default Message;
