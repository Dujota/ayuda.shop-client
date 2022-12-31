import type {
  ListingTypeIndexProps,
  NewListingFormValues,
} from "@/types/listing";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

const NewListingForm = ({ types }: ListingTypeIndexProps) => {
  const { register, handleSubmit } = useForm<NewListingFormValues>();

  const onSubmit: SubmitHandler<NewListingFormValues> = (data) =>
    alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {types?.map((type, idx) => {
        return (
          <label htmlFor="type" key={idx}>
            {type.tag}
            <input
              {...register("type", { required: true })}
              type="radio"
              value={type.id}
            />
          </label>
        );
      })}
      <br />
      <input
        {...register("title", { required: true, minLength: 10, maxLength: 40 })}
        placeholder="Short Description that others can see"
      />
      <br />
      <textarea
        {...register("description", {
          minLength: 50,
          maxLength: 300,
          required: true,
        })}
        placeholder="Tell us more details about your project"
      />
      <br />
      <input type="submit" />
    </form>
  );
};

export default NewListingForm;
