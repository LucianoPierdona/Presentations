import { ISpeakerProps } from "../components/Speaker/speaker.types";

export const useSpeaker = ({ setValues }: ISpeakerProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((oldValues) => ({
      ...oldValues,
      speaker: {
        ...oldValues.speaker,
        [event.target.name]: event.target.value,
      },
    }));
  };

  return {
    handleChange,
  };
};
