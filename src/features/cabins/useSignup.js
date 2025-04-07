import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

const useSignup = () => {
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signUp({ email, password, fullName }),
    onSuccess: () => {
      toast.success("User successfully created");
    },
  });
  return { signup, isLoading };
};

export default useSignup;
