import React from "react";

interface InputProps {
  type: string;
  value: string | number;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  min?: number;
  max?: number;
  label: string;
  error?: string;
  testId: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  onChangeHandler,
  placeHolder,
  min,
  max,
  testId
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
          data-testid={testId}
        />
      );
    } else {
      return (
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          placeholder={placeHolder}
          data-testid={testId}
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
