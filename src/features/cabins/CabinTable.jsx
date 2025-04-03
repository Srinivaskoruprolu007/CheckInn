import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useFetchCabins from "./useFetchCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";

function CabinTable() {
  const { isLoading, cabins } = useFetchCabins();

  if (isLoading) return <Spinner />;
  if (!cabins?.length) return <Empty resource="cabins" />;
  let length;
  if (cabins.length > 0) {
    length = cabins.length;
  }

  // // 1) FILTER
  // const filterValue = searchParams.get("discount") || "all";

  // let filteredCabins;
  // if (filterValue === "all") filteredCabins = cabins;
  // if (filterValue === "no-discounts")
  //   filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  // if (filterValue === "with-discounts")
  //   filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // // 2) SORT
  // const sortBy = searchParams.get("sort") || "startDate-asc";
  // const [field, direction] = sortBy.split("-");
  // const modifier = direction === "asc" ? 1 : -1;
  // const sortedCabins = filteredCabins?.sort(
  //   (a, b) => (a[field] - b[field]) * modifier
  // );
  // commented as we developed in api side

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={cabins}
          // data={filteredCabins}
          data={cabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
        <Table.Footer>
          <Pagination length={length} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default CabinTable;
