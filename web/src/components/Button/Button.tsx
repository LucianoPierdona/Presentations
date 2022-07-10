import { IButtonProps } from "./button.types";
import "./style.css";

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
