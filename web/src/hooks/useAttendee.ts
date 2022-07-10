import { useState, FormEvent } from "react";
import { toast } from "react-toastify";
import {
  ICreateAttendeeProps,
  initialState,
} from "../components/Attendee/atendee.types";
import { handleRequestErrorMessage } from "../utils/handle-request-error";
import { request } from "../utils/request";

export const useAttendee = () => {
  const [values, setValues] = useState<ICreateAttendeeProps>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await request
      .post("/attendees", values)
      .then((res) => {
        toast.success("Attendee created successfully");

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
