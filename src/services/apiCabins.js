import supabase from "./supabase";
import { PAGE_COUNT } from "../utils/constants";
export const getCabins = async ({ filter, sortBy, page }) => {
  let query = supabase.from("cabins").select("*", { count: "exact" });
  if (filter !== null) {
    query =
      filter.value === "no-discounts"
        ? query.lte(filter.field, 0)
        : query.gt(filter.field, 0);
  }
  if (sortBy) {
    query = query.order(sortBy.field, { ascending: sortBy.value });
  }

  if (page) {
    query = query.range((page - 1) * PAGE_COUNT, page * PAGE_COUNT - 1);
  }
  const { data, error, count } = await query;
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return { data, count };
};

export const deletecabin = async (id) => {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  return true;
};

export async function createEditCabin(newCabin, id) {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/edit cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}
