import React, { useState, ChangeEvent } from "react";
import { HeroSlice as HeroSliceType } from "../../types/types";
import Input from "../UI/InputComponent";
import ButtonComponent from "../UI/ButtonComponent";
import ErrorComponent from "../ErrorComponent";

interface Props {
  slice: HeroSliceType;
  onUpdate: (id: string, field: keyof HeroSliceType, value: string) => void;
  onRemove: (id: string) => void;
}

const HeroSlice: React.FC<Props> = ({ slice, onUpdate, onRemove }) => {
  const { title: initialTitle, subtitle: initialSub } = slice;
  const [title, setTitle] = useState(initialTitle);
  const [subtitle, setSubtitle] = useState(initialSub);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   // Save data to localStorage whenever title or subtitle change
  //   localStorage.setItem(`slice-${slice.id}`, JSON.stringify(slice));
  // }, [title, subtitle, slice]);


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

  const handleSubtitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSubTitle = e.target.value;
    setSubtitle(newSubTitle);
    if (newSubTitle !== "") {
      setError("");
      onUpdate(slice.id, "subtitle", newSubTitle);
    } else {
      setError("SubTitle cannot be empty");
    }
  };

  return (
    <div className="hero-slice">
      <div className="hero-slice-header">
        <label>Hero Slice</label>
        <ButtonComponent onRemove={onRemove} id={slice.id} type="remove" />
      </div>
      <div className="hero-slice-content">
          <Input
            type="text"
            value={title}
            onChangeHandler={handleTitleChange}
            placeHolder="Title"
            label="Title"
            error={error}
          />
          <Input
            type="text"
            value={subtitle}
            onChangeHandler={handleSubtitleChange}
            placeHolder="Subtitle"
            label="Subtitle"
          />
      </div>
      <div className="error-container">
        {error && <ErrorComponent message={error} />}
      </div>
    </div>
  );
};

export default HeroSlice;
