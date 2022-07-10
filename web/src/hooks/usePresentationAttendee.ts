import { useState, FormEvent } from "react";
import { SingleValue } from "react-select";
import { toast } from "react-toastify";
import { IAttendee } from "../components/Attendee/atendee.types";
import { IPresentation } from "../components/Presentation/presentation.types";
import {
  ICreatePresentationAttendeeProps,
  ISelectProps,
  handleChangeType,
} from "../components/PresentationAttendee/presentationAttendee.types";
import { handleRequestErrorMessage } from "../utils/handle-request-error";
import { request } from "../utils/request";

export const usePresentationAttendee = () => {
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
      .catch(handleRequestErrorMessage);
  };

  const fetchPresentationsAndAttendees = async () => {
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
  };

  return {
    values,
    setValues,
    presentations,
    setPresentations,
    attendees,
    setAttendees,
    onSelect,
    handleSubmit,
    fetchPresentationsAndAttendees,
  };
};
