export interface ICreatePresentationAttendeeProps {
  presentationId?: number;
  attendeeId?: number;
}

export interface ISelectProps {
  value: string;
  label: string;
}

export type handleChangeType = "presentation" | "attendee";
