export interface ICreatePresentationProps {
  presentation: string;
  details: string;
  room: number;
  speaker: {
    name: string;
    email: string;
    company: string;
    bio: string;
  };
}

export const initialState: ICreatePresentationProps = {
  presentation: "",
  details: "",
  room: 0,
  speaker: {
    name: "",
    email: "",
    company: "",
    bio: "",
  },
};

export interface IPresentation {
  id: number;
  presentation: string;
  details: string;
  room: number;
}
