import { ICreatePresentationProps } from "../Presentation/presentation.types";

export interface ISpeakerProps {
  setValues: React.Dispatch<React.SetStateAction<ICreatePresentationProps>>;
}

export interface ISpeaker {
  id: number;
  name: string;
  company: string;
  email: string;
  bio: string;
}
