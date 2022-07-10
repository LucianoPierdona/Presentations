import "./style.css";

export interface IButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}

function Button({ text, type = "button" }: IButtonProps) {
  return (
    <div className="btns">
      <button type={type} className="btn btn-confirm">
        {text}
      </button>
    </div>
  );
}

export default Button;
