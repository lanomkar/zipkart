"use client";
import { useState, useContext, createContext } from "react";
import { ProductModel } from "../Models/ProductModel";

export interface IModalContext {
  status: boolean;
  handlesetStatus: (status: boolean) => void;
}
export const ModalContext = createContext<IModalContext | null>(null);

export default function ModalProvider({ children }: any) {
  const [status, setStatus] = useState<boolean>(false);

  const handlesetStatus = (status: boolean) => {
    setStatus(status);
  };
  return (
    <ModalContext.Provider value={{ status, handlesetStatus }}>
      {children}
    </ModalContext.Provider>
  );
}
