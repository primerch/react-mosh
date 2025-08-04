import "./App.css";
import { useState } from "react";
import Category from "./Category.tsx";
import ProductList from "./ProductList.tsx";

function App() {
  const [category, setCategory] = useState<string>("");

  return (
    <>
      <Category onChange={(category) => setCategory(category)} />
      <ProductList category={category} />
    </>
  );
}

export default App;
