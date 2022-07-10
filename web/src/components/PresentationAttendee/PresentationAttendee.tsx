import { useEffect } from "react";
import "./style.css";

import Button from "../Button/Button";
import Select from "react-select";

import { usePresentationAttendee } from "../../hooks/usePresentationAttendee";

function PresentationAttendee() {
  const {
    attendees,
    handleSubmit,
    onSelect,
    presentations,
    fetchPresentationsAndAttendees,
  } = usePresentationAttendee();

  useEffect(() => {
    fetchPresentationsAndAttendees();

    setInterval(() => {
      fetchPresentationsAndAttendees();
    }, 15000);
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h4 className="title">Add Attendee to Presentation</h4>
          {presentations.length > 0 && attendees.length > 0 ? (
            <form id={"form"} onSubmit={handleSubmit}>
              <div className="radio-container">
                <p className="radio-container-title">Presentation</p>
                {presentations.length && (
                  <Select
                    options={presentations}
                    onChange={(e) => onSelect(e, "presentation")}
                  />
                )}
              </div>
              <div className="radio-container">
                <p className="radio-container-title">Attendee</p>
                {attendees.length && (
                  <Select
                    options={attendees}
                    onChange={(e) => onSelect(e, "attendee")}
                  />
                )}
              </div>
              <Button text="Add" type="submit" />
            </form>
          ) : (
            <p>Please create a Presentation and an Attendee first</p>
          )}
        </div>
      </div>
    </>
  );
}

export default PresentationAttendee;
