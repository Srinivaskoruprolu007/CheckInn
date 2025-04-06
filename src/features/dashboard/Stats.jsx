import React from "react";
import Stat from "./Stat";
import { HiOutlineBriefcase } from "react-icons/hi";
import {
  HiOutlineBanknotes,
  HiOutlineLockOpen,
  HiOutlineUsers,
} from "react-icons/hi2";
import { formatCurrency, formatPercentage } from "../../utils/helpers";

const Stats = ({ bookings, confirmedStays }) => {
  const totalBookings = bookings.length;
  const totalSales = bookings.reduce((acc, booking) => {
    return acc + booking.totalPrice;
  }, 0);

  const totalCheckIns = confirmedStays.length;

  const totalOccupancy = totalCheckIns / totalBookings;
  return (
    <>
      <Stat
        title={"bookings"}
        color={"blue"}
        icon={<HiOutlineBriefcase />}
        value={totalBookings}
      />
      <Stat
        title={"sales"}
        color={"green"}
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(totalSales)}
      />
      <Stat
        title={"Check-ins"}
        color={"yellow"}
        icon={<HiOutlineLockOpen />}
        value={totalCheckIns}
      />
      <Stat
        title={"Occupancy"}
        color={"indigo"}
        icon={<HiOutlineUsers />}
        value={formatPercentage(totalOccupancy)}
      />
    </>
  );
};

export default Stats;
