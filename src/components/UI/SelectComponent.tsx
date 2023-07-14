import React from "react";

interface SelectProps {
  className: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const SelectComponent: React.FC<SelectProps> = ({
  className,
  value,
  onChange,
  options,
}) => {
  return (
    <select className={className} value={value} onChange={onChange}>
      {options.map((option) => {
        return <option value={option}>{option}</option>;
      })}
    </select>
  );
};

export default SelectComponent;
