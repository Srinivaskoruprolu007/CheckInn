import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filteredField={"discount"}
        options={["all", "with-discounts", "no-discounts"]}
      />
      <SortBy
        options={[
          {
            value: "name-asc",
            label: "Sort By Name (A-Z)",
          },
          {
            value: "name-desc",
            label: "Sort By Name (Z-A)",
          },
          {
            value: "regularPrice-asc",
            label: "Sort By Price (low first)",
          },
          {
            value: "regularPrice-desc",
            label: "Sort By Price (high first)",
          },
          {
            value: "maxCapacity-asc",
            label: "Sort By Capacity (low first)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort By Capacity (high first)",
          },
        ]}
      />
    </TableOperations>
  );
};

export default CabinTableOperations;
