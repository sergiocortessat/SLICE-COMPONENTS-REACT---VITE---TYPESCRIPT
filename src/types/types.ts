// types.ts
export type SliceType = "hero" | "article" | "price";

export type Slices = HeroSlice | ArticleSlice | PriceSlice;

export interface Slice {
  id: string;
  type: SliceType;
}

export interface HeroSlice extends Slice {
  type: "hero";
  title: string;
  subtitle: string;
}

export interface ArticleSlice extends Slice {
  type: "article";
  title: string;
  subtitle: string;
  color: string;
  content: string;
}

export interface PriceSlice extends Slice {
  type: "price";
  title: string;
  price: number;
}

export type SliceUnion = HeroSlice & ArticleSlice & PriceSlice;
