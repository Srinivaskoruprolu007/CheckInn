import { useMutation, useQuery } from "@tanstack/react-query";
import { updateSettings as updateSettingsApi } from "../../services/apiSettings";

const useUpdateSettings = () => {
  const { mutate: updateSettings, isPending: isEditing } = useMutation({
    mutationKey: ["settings"],
    mutationFn: updateSettingsApi,
  });

  return { updateSettings, isEditing };
};

export default useUpdateSettings;
