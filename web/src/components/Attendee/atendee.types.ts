export interface ICreateAttendeeProps {
  name: string;
  email: string;
  company: string;
}

export const initialState: ICreateAttendeeProps = {
  name: "",
  company: "",
  email: "",
};

export interface IAttendee {
  id: number;
  name: string;
  company: string;
  email: string;
}
