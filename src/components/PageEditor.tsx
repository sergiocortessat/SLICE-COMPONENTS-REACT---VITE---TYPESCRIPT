import React from "react";
import { Slice, SliceUnion, Slices } from "../types/types";
import HeroSliceComponent from "./Slices/HeroSlice";
import ArticleSliceComponent from "./Slices/ArticleSlice";
import PriceSliceComponent from "./Slices/PriceSlice";
import ButtonComponent from "./UI/ButtonComponent";
import AddSVG from "../assets/add.svg";
import "../styles/PageEditor.scss";
import useSliceHandler from "../hooks/useSliceHandler";

const PageBuilder: React.FC = () => {
  const { slices, handleAddSlice, handleRemoveSlice, handleUpdateSlice } = useSliceHandler();

  // const renderSliceComponent = (slice: Slices) => {
  //   switch (slice.type) {
  //     case "hero":
  //       return (
  //         <HeroSliceComponent
  //           slice={slice}
  //           onUpdate={handleUpdateSlice}
  //           onRemove={handleRemoveSlice}
  //         />
  //       );
  //     case "article":
  //       return (
  //         <ArticleSliceComponent
  //           slice={slice}
  //           onUpdate={handleUpdateSlice}
  //           onRemove={handleRemoveSlice}
  //         />
  //       );
  //     case "price":
  //       return (
  //         <PriceSliceComponent
  //           slice={slice}
  //           onUpdate={handleUpdateSlice}
  //           onRemove={handleRemoveSlice}
  //         />
  //       );
  //     default:
  //       return null;
  //   }
  // };

  const buttons = ["hero", "article", "price"];

  const renderSliceComponentV2 = (slice: Slice) => {
    const sliceComponentMap = {
      hero: HeroSliceComponent,
      article: ArticleSliceComponent,
      price: PriceSliceComponent,
    };
    const Component = sliceComponentMap[slice.type];
    return (
      <Component
        slice={slice as SliceUnion}
        onUpdate={handleUpdateSlice}
        onRemove={handleRemoveSlice}
      />
    );
  };

  return (
    <div className="page-builder">
      <div className="slices">
        <h3>Your Slices</h3>
        <div className="slices-available" data-testid="slices-container">
          {slices.map((slice) => (
            <div className="slice" key={slice.id}>
              {renderSliceComponentV2(slice)}
            </div>
          ))}
        </div>
        <h3>Add Slices</h3>
        <div className="slices-add">
          {buttons && buttons.map((button) => (
            <div className="slices-add--button-container" key={button}>
              <ButtonComponent
                className={`button-${button}-slice`}
                onAdd={handleAddSlice}
                type={"add"}
                value={button as Slice["type"]}
                img={AddSVG}
                name={`${button.charAt(0).toUpperCase() + button.slice(1)}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageBuilder;
