import Form from "../../ui/Form";
import { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRowVertical from "../../ui/FormRowVertical";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/Spinner";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userLogin, isLogin } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    userLogin(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label={"Email address"}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
          disabled={isLogin}
        />
      </FormRowVertical>
      <FormRowVertical label={"Password"}>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          disabled={isLogin}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLogin}>
          {isLogin ? <SpinnerMini /> : "Login"}
        </Button>
      </FormRowVertical>
    </Form>
  );
};
export default LoginForm;
