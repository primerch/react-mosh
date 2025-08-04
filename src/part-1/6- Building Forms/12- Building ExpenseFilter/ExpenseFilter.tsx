import categories from "../14- Integrating with React Hook Form and Zod/categories.ts";

interface Props {
  onSelectCategory: (category: string) => void;
}

export default function ExpenseFilter({ onSelectCategory }: Props) {
  return (
    <select
      className="select"
      onChange={(event) => {
        onSelectCategory(event.target.value);
      }}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
