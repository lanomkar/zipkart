"use client";
import { useState, useContext, createContext } from "react";
import { ProductModel } from "../Models/ProductModel";
import { CartModel } from "../Models/CartModel";

export interface ICartContext {
  cartList: CartModel[];
  addCart: (cartList: CartModel) => void;
  removeCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}
export const CartContext = createContext<ICartContext | null>(null);

export default function CartProvider({ children }: any) {
  const [cartList, setCartList] = useState<CartModel[]>([]);

  const addCart = (newCart: CartModel) => {
    setCartList((prevCart: CartModel[]) => {
      return [newCart, ...prevCart];
    });
  };

  const removeCart = (id: number) => {
    let upddatedcarts = cartList.filter((f) => f.id != id);
    setCartList(upddatedcarts);
  };

  const updateQuantity = (id: number, quantity: number) => {
    let updatedCart = cartList.map((cart) => {
      if (cart.id == id) {
        if (cart.quantity + quantity >= 0) {
          cart.quantity += quantity;
        } else {
          cart.quantity = 0;
        }
      }
      return cart;
    });
    setCartList(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addCart, removeCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
