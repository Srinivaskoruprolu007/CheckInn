import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import Textarea from "../../ui/Textarea";

import { useForm } from "react-hook-form";

import useCreateCabin from "./useCreateCabin";
import useEditCabin from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {}, onClose }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  const { createCabin, isCreating } = useCreateCabin();
  const { editCabin, isEditing } = useEditCabin();
  const onSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession) {
      editCabin(
        { newCabin: { ...data, image: image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onClose?.();
          },
        }
      );
    } else {
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onClose?.();
          },
        }
      );
    }
  };
  const onError = (errors) => {};
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onClose ? "modal" : "regular"}
    >
      <FormRow label={"Cabin Name"} errors={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
          disabled={isCreating || isEditing}
        />
      </FormRow>
      <FormRow label={"Maximum capacity"} errors={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", { required: "This field is required" })}
          disabled={isCreating || isEditing}
        />
      </FormRow>

      <FormRow label={"Regular price"} errors={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", { required: "This field is required" })}
          disabled={isCreating || isEditing}
        />
      </FormRow>

      <FormRow label={"Discount"} errors={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            min: {
              value: 0,
              message: "Discount should be 0 or more",
            },
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
          disabled={isCreating || isEditing}
        />
      </FormRow>

      <FormRow
        label={"Description for website"}
        errors={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", { required: "This field is required" })}
          disabled={isCreating || isEditing}
        />
      </FormRow>

      <FormRow label={"Cabin photo"} errors={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={() => onClose?.()}>
          Cancel
        </Button>
        <Button disabled={isCreating || isEditing}>
          {isEditSession ? "Edit " : "Add new"} cabin
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
