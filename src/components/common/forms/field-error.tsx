const FieldError = ({ error }: any) => {
  if (!error) return null;

  return <p>{error.message}</p>;
};

export default FieldError;
