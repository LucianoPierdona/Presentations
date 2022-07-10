import React, { FormEvent, useState } from "react";
import { request } from "../../utils/request";
import Input from "../Input/Input";

import { toast } from "react-toastify";
import Button from "../Button/Button";

export interface ICreateAttendeeProps {
  name: string;
  email: string;
  company: string;
}

const initialState: ICreateAttendeeProps = {
  name: "",
  company: "",
  email: "",
};

function Attendee() {
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
      .catch((err) => {
        err.response.data.message.map((message: string) => {
          toast.error(message);
        });
      });
  };

  return (
    <>
      <div className="container">
        <div>
          <h4 className="title">Attendee</h4>
          <form id={"form"} onSubmit={handleSubmit}>
            <Input field="name" name="Name" handleChange={handleChange} />
            <Input field="email" name="Email" handleChange={handleChange} />
            <Input field="company" name="Company" handleChange={handleChange} />

            <Button text="Create" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Attendee;
