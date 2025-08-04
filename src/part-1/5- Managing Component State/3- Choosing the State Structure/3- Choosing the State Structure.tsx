import { useState } from "react";

export default function Test() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  const [isLoading, setLoading] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setPerson({ firstName: "Reacher", lastName: "W" });
        }}
      >
        SHOW NAME
      </button>
      <p>{`Your name is: ${person.firstName} ${person.lastName}`}</p>
    </>
  );
}
