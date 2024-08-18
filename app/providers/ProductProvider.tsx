"use client";
import { useState, useContext, createContext } from "react";
import { ProductModel } from "../Models/ProductModel";

export interface IProductContext {
  products: ProductModel[];
  addproducts: (products: ProductModel[]) => void;
}
export const ProductContext = createContext<IProductContext | null>(null);

export default function ProductProvider({ children }: any) {
  const [products, setProducts] = useState<ProductModel[]>([]);

  const addproducts = (products: ProductModel[]) => {
    setProducts(products);
  };
  return (
    <ProductContext.Provider value={{ products, addproducts }}>
      {children}
    </ProductContext.Provider>
  );
}
