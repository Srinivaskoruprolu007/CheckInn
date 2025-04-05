import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

const SignupForm = () => {
  return (
    <Form>
      <FormRow label={"Full name"} errors={""}>
        <Input type="text" id="fullName" />
      </FormRow>

      <FormRow label={"Email address"} errors={""}>
        <Input type="email" id="email" />
      </FormRow>

      <FormRow label={"Password (min 8 characters) "} errors={""}>
        <Input type="password" id="password" />
      </FormRow>

      <FormRow label={"Confirm password"} errors={""}>
        <Input type="password" id="passwordConfirm" />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>

        <Button variation="primary" type="submit">
          Sign up
        </Button>
      </FormRow>
    </Form>
  );
};
export default SignupForm;
