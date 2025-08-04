export default function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  items = []; // For demonstration: array intentionally emptied.

  return (
    <>
      <h1>List</h1>

      {/* 1. Render "<p>No item found</p>" only when array is empty (length === 0).
          If length isn't 0, nothing renders here. */}
      {items.length === 0 && <p>No item found</p>}

      <ul>
        {/* 2. Map through items array to render each item as <li>. If items is empty, this results in an empty <ul> with no <li> inside. */}
        {/* 3. Summary: What Happens Under the Hood:
            +----------------------+--------------------------------------------------------------+---------------------------------------------------------+
            | Step                 | Explanation                                                  | Example                                                 |
            +----------------------+--------------------------------------------------------------+---------------------------------------------------------+
            | JSX Syntax (React)   | A mapping produces an array of React elements.               | items.map(item => <li key={item}>{item}</li>)          |
            | React Virtual DOM    | Arrays automatically flattened into children by React.       | [<li>NY</li>,<li>SF</li>,<li>TO</li>]                   |
            |                      |                                                              | ↓ flattened internally                                  |
            |                      |                                                              | <li>NY</li><li>SF</li><li>TO</li>                       |
            | Browser Actual DOM   | Array structure isn't visible; DOM elements rendered directly.| <ul><li>NY</li><li>SF</li><li>TO</li></ul>              |
            +----------------------+--------------------------------------------------------------+---------------------------------------------------------+
            */}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div>
        {/* 4. Examples demonstrating JSX rendering of JavaScript falsy values */}
        {false} {/* ❌ "false" renders nothing */}
        {null} {/* ❌ "null" renders nothing */}
        {undefined} {/* ❌ "undefined" renders nothing */}
        {""} {/* ❌ empty string "" renders nothing */}
        {0} {/* ✅ number "0" renders as "0" */}
        {-0} {/* ✅ negative zero "-0" renders as "0" */}
        {0n} {/* ✅ BigInt zero "0n" renders as "0" */}
        {NaN} {/* ✅ NaN renders as "NaN" */}
      </div>
    </>
  );
}
