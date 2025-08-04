import { useEffect } from "react";

export default function ProductList({ category }: { category: string }) {
  // useEffect(() => {
  //   // Runs only once (on mount)
  //   console.log("Fetching Products in", category);
  //   setProducts(["Clothing", "Household"]);
  // }, []);

  useEffect(() => {
    // Runs on mount and whenever 'category' changes
    console.log("Fetching Products in", category);
  }, [category]);

  return <></>;
}
