import { type InputHTMLAttributes } from "react";
import "./FormInput.css";

type FormInputProperties = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    errorMessage: string;
    isInputValid: () => boolean;
  };

export const FormInput = (props: FormInputProperties) => {
  const { label, errorMessage, isInputValid, ...inputProps } = props;

  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        {...inputProps}
        className={isInputValid() ? "" : "invalid-input"}
      />

      {isInputValid() ? <></> : <span>{errorMessage}</span>}
    </div>
  );
};

export default FormInput;