import { useForm } from "react-hook-form";
// TODO: Is this even something we need?

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input type="undefined" placeholder="Password" {...register} />
      <input type="undefined" placeholder="Confirm Password" {...register} />

      <input type="submit" />
    </form>
  );
}
