import { useState, FormEvent } from "react";
import { toast } from "react-toastify";
import {
  ICreatePresentationProps,
  initialState,
} from "../components/Presentation/presentation.types";
import { handleRequestErrorMessage } from "../utils/handle-request-error";
import { request } from "../utils/request";

export const usePresentation = () => {
  const [values, setValues] = useState<ICreatePresentationProps>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isNumber = event.target.type === "number";

    const { value } = event.target;

    setValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: isNumber ? Number(value) : value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await request
      .post("/presentation", values)
      .then((res) => {
        toast.success("Presentation created successfully");

        setValues(initialState);
      })
      .catch(handleRequestErrorMessage);
  };

  return {
    values,
    setValues,
    handleChange,
    handleSubmit,
  };
};
