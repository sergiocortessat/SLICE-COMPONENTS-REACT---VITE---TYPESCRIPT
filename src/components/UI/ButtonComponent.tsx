import React from "react";
import {
  Slice,
  SliceType,
} from "../../types/types";

interface ButtonProps {
  type: string;
  value?: SliceType;
  onAdd?: (type: Slice["type"]) => void;
  onRemove?: (id: string) => void;
  name?: string;
  id?: string;
  img?: string;
  className?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  type,
  value,
  onRemove,
  onAdd,
  name,
  id,
  img,
  className,
}) => {
  // help me to return a button deppending on the type. it can be of type remove or of type add.
  const handleAdd = () => {
    if (onAdd && value) {
      onAdd(value);
    }
  };

  const handleRemove = () => {
    if (onRemove && id) {
      onRemove(id);
    }
  };
  const renderButton = () => {
    switch (type) {
      case "remove":
        return <button onClick={() => handleRemove()}>Remove</button>;
      case "add":
        return (
          <>
            <button onClick={() => handleAdd()} className={className}>
              <img src={img} />
            </button>
            <p>{name}</p>
          </>
        );
      default:
        return null;
    }
  };

  return <>{renderButton()}</>;
};

export default ButtonComponent;
