import useCheckout from "../features/check-in/useCheckout";
import Button from "./Button";
const CheckoutButton = ({bookingId}) => {
  const { checkout, isCheckout } = useCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      disabled={isCheckout}
      onClick={() => checkout(bookingId)}
    >
      Checkout
    </Button>
  );
};

export default CheckoutButton;
