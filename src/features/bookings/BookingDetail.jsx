import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { useMoveBack } from "../../hooks/useMoveBack";
import { HiArrowDownOnSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare, HiMiniTrash } from "react-icons/hi2";

import useFetchBooking from "./useFetchBooking";
import useCheckout from "../check-in/useCheckout";
import useDeleteBooking from "./useDeleteBooking";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading, error } = useFetchBooking();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const { checkout, isCheckout } = useCheckout();
  const navigate = useNavigate();
  const moveBack = useMoveBack();
  if (isLoading) return <Spinner />;
  if (!booking) return <Empty resource={"booking"} />;
  const { status, id: bookingId } = booking;
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  const handleCheckout = () => {
    checkout(bookingId);
  };
  const handleDelete = () => {
    deleteBooking(bookingId);
  };
  return (
    <Modal>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>
      <Row>
        <BookingDataBox booking={booking} />
      </Row>

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button
            icon={<HiArrowDownOnSquare />}
            onClick={() => navigate(`/checkin/${bookingId}`)}
          >
            Check-in
          </Button>
        )}
        {status === "checked-in" && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={handleCheckout}
            disabled={isCheckout}
          >
            Check-out
          </Button>
        )}
        <Modal.Open opens={"delete"}>
          <Button variation="danger">Delete</Button>
        </Modal.Open>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
      <Modal.Window name={"delete"}>
        <ConfirmDelete
          resourceName={"booking"}
          disabled={isDeleting}
          onConfirm={handleDelete}
        />
      </Modal.Window>
    </Modal>
  );
}

export default BookingDetail;
