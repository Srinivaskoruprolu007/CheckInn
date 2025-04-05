import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const useLogin = () => {
  const navigate = useNavigate();
  
  const { mutate: userLogin, isPending: isLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: async ({ email, password }) => {
      return await login({ email, password });
    },
    onSuccess: (data) => {
      toast.success("Login successful");
      navigate("/");
    },
    onError: (err) => {
      console.error("Login error:", err);
      toast.error("Invalid email or password. Please try again.");
    },
  });

  return { userLogin, isLogin };
};

export default useLogin;
