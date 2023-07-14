import React, {useState} from "react";
import ErrorComponent from "../ErrorComponent";

interface InputProps {
  type: string;
  value: string | number;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  min?: number;
  max?: number;
  label: string;
  error?:  string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  onChangeHandler,
  placeHolder,
  min,
  max,
  error,
}) => {
  const renderInput = () => {
    if (type === "number") {
      return (
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          placeholder={placeHolder}
          min={min ? min : 0}
          max={max ? max : 100}
        />        
      );
    } else {
      return (
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          placeholder={placeHolder}
        />
      );
    }
  };

  return (
    <>
      <label className="input-label">{`${
        label.charAt(0).toUpperCase() + label.slice(1)
      }`}</label>
      {renderInput()}
        {/* {error && <ErrorComponent message={error} />} */}
    </>
  );
};

export default Input;
