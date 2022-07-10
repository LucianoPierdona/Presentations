import React from "react";
import Input from "../Input/Input";
import { ISpeakerProps } from "./speaker.types";

function Speaker({ setValues }: ISpeakerProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((oldValues) => ({
      ...oldValues,
      speaker: {
        ...oldValues.speaker,
        [event.target.name]: event.target.value,
      },
    }));
  };

  return (
    <>
      <Input field="name" name="Name" handleChange={handleChange} />
      <Input field="email" name="Email" handleChange={handleChange} />
      <Input field="company" name="Company" handleChange={handleChange} />
      <Input field="bio" name="Bio" handleChange={handleChange} />
    </>
  );
}

export default Speaker;
