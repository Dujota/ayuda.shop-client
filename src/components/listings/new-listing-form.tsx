// Hook Form
import { useForm } from "react-hook-form";

// Types
import type {
  ListingTypeIndexProps,
  NewListingFormValues,
} from "@/types/listing";
import type { SubmitHandler } from "react-hook-form";

//Component
import FieldError from "../common/forms/field-error";
import { useSession } from "next-auth/react";
import { createListing } from "@/lib/listings/mutations";

const NewListingForm = ({ types }: ListingTypeIndexProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewListingFormValues>();
  const { data: session } = useSession();

  const onSubmit: SubmitHandler<NewListingFormValues> = async ({
    type,
    description,
    title,
  }) => {
    if (session?.user?.accessToken) {
      const data = {
        type_id: type,
        description,
        title,
      };

      const newListing = await createListing({ data });
      debugger;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {types?.map((type, idx) => {
        return (
          <label htmlFor="type" key={idx}>
            {type.tag} &nbsp;
            <input
              {...register("type", { required: "Please choose one" })}
              type="radio"
              value={type.id}
            />
          </label>
        );
      })}
      {errors.type && <FieldError error={errors.type} />}
      <br />
      <label htmlFor="title">
        Title: &nbsp;
        <input
          {...register("title", {
            required: "In a few words, describe the offer",
            minLength: { value: 10, message: "Minimum 10 characters" },
            maxLength: { value: 40, message: "Maximum 40 characters" },
          })}
          placeholder="Short Description that others can see"
        />
        {errors.title && <FieldError error={errors.title} />}
      </label>
      <br />
      <label htmlFor="description">
        Description:
        <br />
        <textarea
          {...register("description", {
            minLength: {
              value: 50,
              message:
                "Let us know about your project with at least 50 characters",
            },
            maxLength: {
              value: 300,
              message: "At the moment we only allow a max of 300 characters",
            },
            required: "We need some details about this listing",
          })}
          placeholder="Tell us more details about your project"
        />
        {errors.description && <FieldError error={errors.description} />}
      </label>
      <br />
      <input type="submit" value="Create a new Listing!" />
    </form>
  );
};

export default NewListingForm;
