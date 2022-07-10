import React, { FormEvent, useEffect, useState } from "react";
import { request } from "../../utils/request";
import "./style.css";

import { toast } from "react-toastify";
import Button from "../Button/Button";
import Select, { SingleValue } from "react-select";
import { IPresentation } from "../Presentation/presentation.types";
import { IAttendee } from "../Attendee/atendee.types";
import {
  handleChangeType,
  ICreatePresentationAttendeeProps,
  ISelectProps,
} from "./presentationAttendee.types";

function PresentationAttendee() {
  const [values, setValues] = useState<ICreatePresentationAttendeeProps>({});
  const [presentations, setPresentations] = useState<ISelectProps[]>([]);
  const [attendees, setAttendees] = useState<ISelectProps[]>([]);

  const onSelect = (
    event: SingleValue<ISelectProps>,
    type: handleChangeType
  ) => {
    const { value } = event!;

    const field = type === "presentation" ? "presentationId" : "attendeeId";

    setValues((oldValues) => ({
      ...oldValues,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.presentationId || !values.attendeeId) {
      toast.error("Please fill all fields");
      return;
    }

    await request
      .put(
        `/presentation/${values.presentationId}/attendees/${values.attendeeId}`
      )
      .then((res) => {
        toast.success("Attendee added to presentation successfully");
        return res;
      })
      .catch((err) => {
        const { message } = err.response.data;

        toast.error(message);
      });
  };

  useEffect(() => {
    Promise.all([
      request.get<IPresentation[]>("/presentation"),
      request.get<IAttendee[]>("/attendees"),
    ]).then(([resPresentation, resAttendee]) => {
      const formattedPresentations = resPresentation.data.map(
        (presentation) => ({
          value: presentation.id.toString(),
          label: presentation.presentation,
        })
      );
      const formattedAttendees = resAttendee.data.map((attendee) => ({
        value: attendee.id.toString(),
        label: attendee.name,
      }));
      setPresentations(formattedPresentations);
      setAttendees(formattedAttendees);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h4 className="title">Add Attendee to Presentation</h4>
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
        </div>
      </div>
    </>
  );
}

export default PresentationAttendee;
