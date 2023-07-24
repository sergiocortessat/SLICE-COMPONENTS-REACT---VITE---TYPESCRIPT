import React from "react";

interface TextAreaComponentProp {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeHolder: string;
  testId: string;
}

const TextAreaComponent: React.FC<TextAreaComponentProp> = ({
  value,
  onChange,
  placeHolder,
  testId,
}) => {
  return (
    <textarea
      className="textarea"
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
      data-testid={testId}
    />
  );
};

export default TextAreaComponent;
