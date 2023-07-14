import { Slice, HeroSlice, ArticleSlice, PriceSlice } from "../types/types";

export const loadPersistedSlices = (): Slice[] => {
  const persistedSlices = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("slice-")) {
      const slice = JSON.parse(localStorage.getItem(key) as string);
      persistedSlices.push(slice);
    }
  }
  return persistedSlices;
};

export const saveSlicesToLocalStorage = (slices: Slice[]): void => {
  slices.forEach((slice) => {
    localStorage.setItem(`slice-${slice.id}`, JSON.stringify(slice));
  });
};

export const addSlice = (prevSlices: Slice[], newSlice: Slice): Slice[] => {
  const updatedSlices = [...prevSlices, newSlice];
  saveSlicesToLocalStorage(updatedSlices);
  return updatedSlices;
};

export const removeSlice = (prevSlices: Slice[], id: string): Slice[] => {
  const updatedSlices = prevSlices.filter((slice) => slice.id !== id);
  localStorage.removeItem(`slice-${id}`);
  return updatedSlices;
};

export const updateSlice = (
  prevSlices: Slice[],
  id: string,
  field: keyof HeroSlice | keyof ArticleSlice | keyof PriceSlice,
  value: string | number
): Slice[] => {
  const newUpdateSlice = prevSlices.map((slice) => {
    if (slice.id === id) {
      return {
        ...slice,
        [field]: value,
      };
    }
    return slice;
  });
  saveSlicesToLocalStorage(newUpdateSlice);
  return newUpdateSlice;
};
