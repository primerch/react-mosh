import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../14- Integrating with React Hook Form and Zod/categories.ts";

const schema = z.object({
  description: z
    .string()
    .min(3, { error: "Description should be at least 3 characters." }),
  amount: z.number({ error: "Amount is required." }),
  category: z.string().min(1, { error: "Category is required." }),
});

type FormData = z.infer<typeof schema>;

export default function ExpenseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      category: "",
    },
  });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
      <div className="mb-5">
        <div className="mb-3">
          <label htmlFor="description">Description</label>
        </div>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="input"
        />
        {errors.description && (
          <p className="text-error">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-5">
        <div className="mb-3">
          <label htmlFor="amount">Amount</label>
        </div>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="text"
          id="amount"
          className="input"
        />
        {errors.amount && <p className="text-error">{errors.amount.message}</p>}
      </div>
      <div className="mb-5">
        <div className="mb-3">
          <label htmlFor="category">Category</label>
        </div>
        <select className="select" id="category" {...register("category")}>
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-error">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}
