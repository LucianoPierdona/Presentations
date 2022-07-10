import Input from "../Input/Input";

import Button from "../Button/Button";
import { useAttendee } from "../../hooks/useAttendee";

function Attendee() {
  const { handleChange, handleSubmit } = useAttendee();

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
