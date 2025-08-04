import "./App.css";
import { useState } from "react";
import { produce } from "immer";
import ExpenseFilter from "./ExpenseFilter.tsx";
import ExpenseList from "../11- Building ExpenseList/ExpenseList.tsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 5, category: "Groceries" },
    { id: 2, description: "Eggs", amount: 10, category: "Groceries" },
    { id: 3, description: "Electricity", amount: 100, category: "Utilities" },
    { id: 4, description: "Movies", amount: 15, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  const handleOnSelectCategory = (category: string) =>
    setSelectedCategory(category);

  const handleOnDelete = (id: number) => {
    // 1. using filter method - creates new array excluding the expense with matching id
    // setExpenses(expenses.filter((expense) => expense.id !== id));
    //
    // 2. using immer - allows mutative syntax on draft while maintaining immutability
    setExpenses(
      produce((draft) => {
        const deletedIndex = draft.findIndex((expense) => expense.id === id);
        if (deletedIndex !== -1) {
          draft.splice(deletedIndex, 1);
        }
      }),
    );
  };
  return (
    <>
      <ExpenseFilter onSelectCategory={handleOnSelectCategory} />
      <ExpenseList expenses={visibleExpenses} onDelete={handleOnDelete} />
    </>
  );
}

export default App;
