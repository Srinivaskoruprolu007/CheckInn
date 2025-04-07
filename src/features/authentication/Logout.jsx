import ButtonIcon from "../../ui/ButtonIcon";
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
    <ButtonIcon
      variation="danger"
      onClick={handleLogout}
      disabled={isLogouting}
    >
      {isLogouting ? (
        <SpinnerMini />
      ) : (
        <>
          <HiArrowLeftEndOnRectangle />
        </>
      )}
    </ButtonIcon>
  );
};

export default Logout;
