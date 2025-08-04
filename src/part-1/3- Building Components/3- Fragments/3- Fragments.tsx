export default function ListGroup() {
  return (
    <>
      <h1>List</h1>
      <ul className="list-inside list-disc">
        <li>An item</li>
        <li>A second item</li>
        <li>A third item</li>
        <li>A fourth item</li>
        <li>And a fifth one</li>
      </ul>
    </>
  );
}

// Alternatively, you can explicitly import and use React.Fragment
// import { Fragment } from "react";

// export default function ListGroup() {
//   return (
//     <Fragment>
//       <h1>List</h1>
//       <ul className="list-inside list-disc">
//         <li>An item</li>
//         <li>A second item</li>
//         <li>A third item</li>
//         <li>A fourth item</li>
//         <li>And a fifth one</li>
//       </ul>
//     </Fragment>
//   );
// }
