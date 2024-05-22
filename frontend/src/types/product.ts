import { Category } from "./category";

export type Product = {
    id: number;
    image: string;
    title: string;
    text: string;
    price: number;
    category: Category;
  };