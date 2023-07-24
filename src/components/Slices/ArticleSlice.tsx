import React, { useState, ChangeEvent } from "react";
import { ArticleSlice as ArticleSliceType } from "../../types/types";
import Input from "../UI/InputComponent";
import ErrorComponent from "../ErrorComponent";
import SelectComponent from "../UI/SelectComponent";
import ButtonComponent from "../UI/ButtonComponent";
import TextAreaComponent from "../UI/TextAreaComponent";
import "../..//styles//ArticleSlice.scss";
import {
  testIdHandler,
} from "../../utils/pageBuilderUtils";

interface Props {
  slice: ArticleSliceType;
  onUpdate: (id: string, field: keyof ArticleSliceType, value: string) => void;
  onRemove: (id: string) => void;
}

const ArticleSlice: React.FC<Props> = ({ slice, onUpdate, onRemove }) => {
  const {
    id,
    title: initialTitle,
    content: initialContent,
    color: initialColor,
  } = slice;
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [color, setColor] = useState(initialColor || "red");
  const [error, setError] = useState("");
  const titleInputLabel = "title";
  const contentInputLabel = "content";
  const colorInputLabel = "color";

  // useEffect(() => {
  //   // Save data to localStorage whenever title, content, or color change
  //   localStorage.setItem(`slice-${id}`, JSON.stringify(slice));
  // }, [title, content, color, id, slice]);

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

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    if (newContent !== "") {
      setError("");
      onUpdate(id, "content", newContent);
    } else {
      setError("Content cannot be empty");
    }
  };

  const handleColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    if (newColor !== "") {
      setError("");

      onUpdate(id, "color", newColor);
    } else {
      setError("Color cannot be empty");
    }
  };

  const colorClassName = (color: string) => {
    return `article-slice-content-select--color article-slice-content-select--color-${color}`;
  };

  const testHandler = (field: string) => {
    return testIdHandler(slice.type, field);
  };

  return (
    <div className="article-slice" data-testid='article-slice'>
      <div className="article-slice-header">
        <label>Article Slice</label>
        <ButtonComponent onRemove={onRemove} id={slice.id} type="remove" />
      </div>
      <div className="article-slice-content">
        <Input
          type="text"
          value={title}
          onChangeHandler={handleTitleChange}
          placeHolder={titleInputLabel}
          label={titleInputLabel}
          testId= {testHandler(titleInputLabel)}
        />
        <TextAreaComponent
          value={content}
          onChange={handleContentChange}
          placeHolder={contentInputLabel}
          testId={testHandler(contentInputLabel)}
        />
        <SelectComponent
          className={colorClassName(color)}
          value={color}
          onChange={handleColorChange}
          options={["red", "blue", "yellow", "green"]}
          testId={testHandler(colorInputLabel)}
        />
      </div>
      <div className="error-container">
        {error && <ErrorComponent message={error} />}
      </div>
    </div>
  );
};

export default ArticleSlice;
