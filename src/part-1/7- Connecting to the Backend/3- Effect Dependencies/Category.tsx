interface Props {
  onChange: (category: string) => void;
}

export default function Category({ onChange }: Props) {
  return (
    <>
      <select
        className="select"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
    </>
  );
}
