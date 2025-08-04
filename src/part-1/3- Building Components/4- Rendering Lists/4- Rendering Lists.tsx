/**
 * Why React needs the 'key' prop explicitly:
 *
 * React maintains a virtual representation of your UI known as the "Virtual DOM" to efficiently manage updates.
 * However, React has no inherent way of knowing the true identity or uniqueness of items in dynamic lists.
 *
 * Without keys, consider the example:
 * Initial render:
 *   ["New York", "San Francisco", "Tokyo"]
 * Second render reordered list:
 *   ["Tokyo", "New York", "London"]
 *
 * Without keys, React incorrectly assumes:
 * - "New York" updated to "Tokyo"
 * - "San Francisco" updated to "New York"
 * - "Tokyo" updated to "London"
 *
 * Due to this assumption, your UI may update incorrectly or inefficiently,
 * causing unexpected behaviors such as losing state or unnecessary re-rendering of your components.
 *
 * When unique keys are added to each element:
 * Initial render:
 *   ["New York", "San Francisco", "Tokyo"] with keys ["New York", "San Francisco", "Tokyo"]
 *
 * Second render reordered list:
 *   ["Tokyo", "New York", "London"] with keys ["Tokyo", "New York", "London"]
 *
 * React can efficiently:
 * - Detect "Tokyo" and "New York" are the same elements, just reordered.
 * - Identify "London" as a genuinely new added element.
 * - Remove "San Francisco" properly.
 *
 * As a result, React will update the DOM precisely, maintaining internal state consistency, enhanced performance,
 * and accurate UI behaviors.
 *
 * That's why React explicitly needs you to provide the 'key' prop, clearly identifying each item individually.
 */

export default function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <ul className="list-inside list-decimal">
      {items.map((item) => (
        // 'key' prop explicitly tells React the unique identity of each list item,
        // helping React efficiently track each item, perform optimal updates, and maintain correct UI behavior.
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
