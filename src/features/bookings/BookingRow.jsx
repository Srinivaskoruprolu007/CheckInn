import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";


import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import { CgEye } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { HiArrowDownOnSquare , HiArrowUpOnSquare, HiMiniTrash} from "react-icons/hi2";
import useCheckout from "../check-in/useCheckout";
import useDeleteBooking from "./useDeleteBooking";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests,
    cabins,
  },
}) {
  const navigate = useNavigate();
  const {checkout, isCheckout} = useCheckout()
  const {isDeleting, deleteBooking} = useDeleteBooking();
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  const handleCheckout = () =>  {
    checkout(bookingId)
  }
  const handleDelete = () => {
    deleteBooking(bookingId)
  }
  return (
    <Modal>

    <Table.Row>
      <Cabin>{cabins?.name}</Cabin>

      <Stacked>
        <span>{guests?.fullName}</span>
        <span>{guests?.email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>
      <Menus>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<CgEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See Details
            </Menus.Button>
            {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
                >
                Check-in
              </Menus.Button>
            )}
            {status === "checked-in" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={handleCheckout}
                disabled={isCheckout}
                >
                Check-out
              </Menus.Button> 
            )}
            <Modal.Open opens="delete">
            <Menus.Button 
              icon={<HiMiniTrash/>} 
              >
              Delete
            </Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName={"booking"}
                disabled={isDeleting}
                onConfirm={handleDelete}
              />
            </Modal.Window>
      </Menus>
    </Table.Row>
  </Modal>
  );
}

export default BookingRow;
