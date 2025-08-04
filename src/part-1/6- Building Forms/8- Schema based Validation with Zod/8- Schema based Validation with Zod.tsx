import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { error: "Name must be at least 3 characters" }),
  age: z
    .number({ error: "Age field is required." })
    .min(18, { error: "Age must be at least 18" }),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="mb-3">
          <label htmlFor="name" className="input">
            <input
              {...register("name")}
              type="text"
              id="name"
              className="input"
            />
          </label>
          {errors.name && <p className="text-error">{errors.name.message}</p>}
        </div>
      </div>
      <div>
        <div className="mb-3">
          <label htmlFor="age" className="input">
            <input
              {...register("age", { valueAsNumber: true })}
              type="number"
              id="age"
              className="input"
            />
          </label>
          {errors.age && <p className="text-error">{errors.age.message}</p>}
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
