// TODO: make it handle also generic messages
/**
 *
 * React Hook Form field error ui
 * https://react-hook-form.com/api/useform/seterror
 *
 *
 * multiple api errors:
 *
 * {
          [
            {
              type: "manual",
              name: "username",
              message: "Double Check This"
            },{
              type: "manual",
              name: "firstName",
              message: "Triple Check This"
            }
          ].forEach(({ name, type, message }) =>
            setError(name, { type, message })
 *
 * single field erros:  setError("lastName", {
      types: {
        required: "This is required",
        minLength: "This is minLength"
      }
    });
 *
 */

const FieldError = ({ error }: any) => {
  if (!error) return null;

  if (error?.message) {
    return <p>{error.message}</p>;
  }

  // assumes a base string error
  return <p>{error}</p>;
};

export default FieldError;
