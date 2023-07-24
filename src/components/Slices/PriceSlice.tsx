// PriceSlice.tsx
import React, { useState, ChangeEvent } from "react";
import { PriceSlice as PriceSliceType } from "../../types/types";
import Input from "../UI/InputComponent";
import ButtonComponent from "../UI/ButtonComponent";
import ErrorComponent from "../ErrorComponent";
import { testIdHandler } from "../../utils/pageBuilderUtils";

interface Props {
  slice: PriceSliceType;
  onUpdate: (
    id: string,
    field: keyof PriceSliceType,
    value: string | number
  ) => void;
  onRemove: (id: string) => void;
}

const PriceSlice: React.FC<Props> = ({ slice, onUpdate, onRemove }) => {
  const { title: initialTitle, price: initialPrice } = slice;

  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   // Save data to localStorage whenever title or price change
  //   localStorage.setItem(`slice-${slice.id}`, JSON.stringify(slice));
  // }, [title, price, slice]);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (newTitle !== "") {
      setError("");
      onUpdate(slice.id, "title", newTitle);
    } else {
      setError("Title cannot be empty");
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(parseFloat(e.target.value))) {
      setError("Cant be special symbols");
    } else {
      const newPrice = parseFloat(e.target.value);
      const regex = /^[0-9\b]+$/;
      setPrice(newPrice);
      if (regex.test(e.target.value) && e.target.value !== "") {
        setError("");
        onUpdate(slice.id, "price", newPrice);
      }
    }
  };

  const testHandler = (field: string) => {
    return testIdHandler(slice.type, field);
  };

  return (
    <div className="price-slice">
      <div className="price-slice-header">
        <label>Price slide</label>
        <ButtonComponent onRemove={onRemove} id={slice.id} type="remove" />
      </div>
      <div className="price-slice-content">
        <Input
          type="text"
          value={title}
          onChangeHandler={handleTitleChange}
          placeHolder="text input"
          label="Title"
          testId={testHandler("title")}
        />
        <Input
          type="number"
          value={price}
          min={-8}
          onChangeHandler={handlePriceChange}
          placeHolder="1"
          label="Price"
          testId={testHandler("price")}
        />
      </div>
      <div className="error-container">
        {error && <ErrorComponent message={error} />}
      </div>
    </div>
  );
};

export default PriceSlice;
