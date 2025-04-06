import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSignup from "../cabins/useSignup";
import SpinnerMini from "../../ui/SpinnerMini";

const SignupForm = () => {
  const { register, formState, handleSubmit, getValues, reset } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();

  const onSubmit = (data) => {
    // Handle form submission here
    signup(
      {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      },
      {
        onSettled: reset,
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords do not match",
          })}
        />
      </FormRow>

      <FormRow>
        <Button type="button" variation="secondary" disabled={isLoading}>
          Cancel
        </Button>
        <Button type="submit" variation="primary" disabled={isLoading}>
          {isLoading ? <SpinnerMini /> : "Sign up"}
        </Button>
      </FormRow>
    </Form>
  );
};

export default SignupForm;
