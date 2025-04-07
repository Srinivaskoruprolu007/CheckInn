import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

const useTodayActivity = () => {
  const { data: stays, isPending } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"],
  });
  return {
    stays,
    isPending,
  };
};

export default useTodayActivity;
