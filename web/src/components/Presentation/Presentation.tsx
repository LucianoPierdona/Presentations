import Input from "../Input/Input";
import Speaker from "../Speaker/Speaker";
import "./style.css";
import Button from "../Button/Button";
import { usePresentation } from "../../hooks/usePresentation";

function Presentation() {
  const { handleChange, handleSubmit, setValues } = usePresentation();

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

            <Button text="Create" type={"submit"} />
          </form>
        </div>
      </div>
    </>
  );
}

export default Presentation;
