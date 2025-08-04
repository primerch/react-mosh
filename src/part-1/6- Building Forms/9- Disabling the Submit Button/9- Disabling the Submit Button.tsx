import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Form() {
  const schema = z.object({
    name: z
      .string()
      .min(3, { error: "length should be at least 3 characters" }),
    age: z.number(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="input">
          <span>Name</span>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="input"
          />
        </label>
        {errors.name && <p className="text-error">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="input">
          <span>Age</span>
          <input
            {...register("age", { valueAsNumber: true })}
            type="number"
            id="age"
            className="input"
          />
        </label>
        {errors.age && <p className="text-error">{errors.age.message}</p>}
      </div>
      <button type="submit" disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
