import { useState } from "react";

export default function Customer() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    setCustomer({
      // Creates a new customer object
      ...customer,
      address: {
        // Creates a new address object, copying properties from the original address
        ...customer.address,
        zipCode: 999, // Updates the zip code in the new address object
      },
    });
  };

  return (
    <>
      <button onClick={handleClick}>Update Zip Code</button>
      <span>{customer.address.zipCode}</span>
    </>
  );
}
