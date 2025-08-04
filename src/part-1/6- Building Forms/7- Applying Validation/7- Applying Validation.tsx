import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="input">
          <span>Name</span>
          <input
            {...register("name", { required: true, minLength: 3 })}
            type="text"
            id="name"
            className="input"
          />
        </label>
        {errors.name?.type === "required" && (
          <p className="text-error">The name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-error">The name must be at least 3 characters</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="input">
          <span>Age</span>
          <input {...register("age")} type="text" id="age" className="input" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
