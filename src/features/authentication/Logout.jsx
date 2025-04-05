import Button from "../../ui/Button";
import { HiArrowLeftEndOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Spinner from "../../ui/Spinner";
import SpinnerMini from "../../ui/SpinnerMini";

const Logout = () => {
  const { userLogout, isLogouting } = useLogout();
  isLogouting && <Spinner />;
  const handleLogout = () => {
    userLogout();
  };
  return (
    <Button variation="danger" onClick={handleLogout} disabled={isLogouting}>
      {isLogouting ? (
        <SpinnerMini />
      ) : (
        <>
          <HiArrowLeftEndOnRectangle /> <span>logout</span>
        </>
      )}
    </Button>
  );
};

export default Logout;
