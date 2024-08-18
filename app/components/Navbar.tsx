"use client";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { CartContext } from "../providers/CartProvider";

function Navbar() {
  const router = useRouter();
  const cartContext = useContext(CartContext);
  return (
    <div className="bg-amber-600 text-white h-14 flex flex-row  justify-center items-center shadow-xl">
      <nav className="flex flex-row max-w-screen-lg w-full items-center justify-between">
        <h1
          className="text-2xl font-semibold px-1 py-1 cursor-pointer"
          onClick={() => router.push("/")}
        >
          Zipkart
        </h1>
        <ul className="flex flex-row">
          <li
            className="flex flex-row gap-1 px-2 py-1 cursor-pointer"
            onClick={() => router.push("/cart")}
          >
            <span>Cart</span>
            <span>{cartContext?.cartList.length}</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
