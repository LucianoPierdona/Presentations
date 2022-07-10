export interface IInputProps {
  name: string;
  field: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute;
}
