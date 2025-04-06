import { Button } from "bootstrap";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
const UpdatePasswordForm = () => {
  const { register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label={"New password(min 8 chars)"}
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
      </FormRow>
      <FormRow label={"Confirm password"}>
        <Input
          type="password"
          id="passwordConfirm"
          autoComplete="new-password"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords do not match",
          })}
        />
      </FormRow>
      <FormRow>
        <Button>Cancel</Button>
        <Button>Update</Button>
      </FormRow>
    </Form>
  );
};
export default UpdatePasswordForm;
