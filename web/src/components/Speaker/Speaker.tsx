import React from "react";
import { useSpeaker } from "../../hooks/useSpeaker";
import Input from "../Input/Input";
import { ISpeakerProps } from "./speaker.types";

function Speaker(props: ISpeakerProps) {
  const { handleChange } = useSpeaker(props);

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
