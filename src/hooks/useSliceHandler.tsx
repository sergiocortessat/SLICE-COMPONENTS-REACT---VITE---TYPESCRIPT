import { useState, useEffect } from "react";
import { Slice, HeroSlice, ArticleSlice, PriceSlice } from "../types/types";
import { loadPersistedSlices, addSlice, removeSlice, updateSlice } from "../utils/pageBuilderUtils";

const useSliceHandler = () => {
  const [slices, setSlices] = useState<Slice[]>([]);

  useEffect(() => {
    const persistedSlices = loadPersistedSlices();
    setSlices(persistedSlices);
  }, []);

  const handleAddSlice = (type: Slice["type"]) => {
    const newSlice: Slice = {
      id: Date.now().toString(),
      type: type,
    };
    setSlices((prevSlices) => addSlice(prevSlices, newSlice));
  };

  const handleRemoveSlice = (id: string) => {
    setSlices((prevSlices) => removeSlice(prevSlices, id));
  };

  const handleUpdateSlice = (
    id: string,
    field: keyof HeroSlice | keyof ArticleSlice | keyof PriceSlice,
    value: string | number
  ) => {
    setSlices((prevSlices) => updateSlice(prevSlices, id, field, value));
  };

  return { slices, handleAddSlice, handleRemoveSlice, handleUpdateSlice };
};

export default useSliceHandler;
