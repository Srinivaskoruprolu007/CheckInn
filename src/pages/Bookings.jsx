import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingsTable from "../features/bookings/BookingsTable";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
      </Row>
      <BookingsTable />
    </>
  );
}

export default Bookings;
