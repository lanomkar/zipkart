"use client";
import React, { useState, useEffect, useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";

export function PopupModal() {
  const modalContext = useContext(ModalContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("COMMING SETTIMEOUT");
      modalContext?.handlesetStatus(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [modalContext?.status]);
  console.log("status", modalContext?.status);
  return (
    <>
    {modalContext?.status && (<div   className="flex flex-row px-3 py-2 rounded bg-green-500 text-white fixed bottom-7 right-7">
      <p>Product has added to Cart.</p>
    </div>)}
    </>
  );
}
