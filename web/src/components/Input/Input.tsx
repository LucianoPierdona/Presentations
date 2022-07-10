import "./style.css";

export interface IInputProps {
  name: string;
  field: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute;
}

function Input({ name, field, handleChange, type = "text" }: IInputProps) {
  return (
    <div className="omrs-input-group">
      <label className="omrs-input-underlined">
        <input type={type} name={field} onChange={handleChange} required />
        <span className="omrs-input-label">{name}</span>
      </label>
    </div>
  );
}

export default Input;
