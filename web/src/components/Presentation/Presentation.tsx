import React, { FormEvent, useState } from "react";
import { request } from "../../utils/request";
import Input from "../Input/Input";
import Speaker from "../Speaker/Speaker";
import "./style.css";
import { toast } from "react-toastify";
import Button from "../Button/Button";
import { ICreatePresentationProps, initialState } from "./presentation.types";

function Presentation() {
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
        console.log(res);

        toast.success("Presentation created successfully");

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
          <h4 className="title">Presentation</h4>
          <form id={"form"} onSubmit={handleSubmit}>
            <Input
              field="presentation"
              name="Name"
              handleChange={handleChange}
            />
            <Input field="details" name="Details" handleChange={handleChange} />
            <Input
              field="room"
              type={"number"}
              name="Room"
              handleChange={handleChange}
            />
            <h4 className="title">Speaker</h4>
            <Speaker setValues={setValues} />

            <Button text="Create" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Presentation;
