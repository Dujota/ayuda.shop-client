const FieldError = ({ error }: any) => {
  if (!error) return null;

  if (error?.message) {
    return <p>{error.message}</p>;
  }

  return <p>{error}</p>;
};

export default FieldError;
