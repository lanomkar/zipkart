"use client";
import React, { useContext } from "react";
import { CartContext } from "../providers/CartProvider";
import CartProductCart from "../components/CartProductCart";
import { CartModel } from "../Models/CartModel";

function CartPage() {
  const cartContext = useContext(CartContext);

  const calculateTotalCosts = (cartList: CartModel[] | undefined) => {
    return (
      cartList
        ?.reduce(
          (accumulator, currentValue) =>
            accumulator +
            Number((currentValue.price * currentValue.quantity).toFixed(2)),
          0
        )
        ?.toFixed(2) || 0
    );
  };
  return (
    <div className="flex flex-row  w-full justify-center">
      <div className="flex flex-col max-w-screen-lg w-full">
        <div className="grid grid-cols-2 cart-divider">
          <div className="p-4  mt-2">
            <h2 className="text-black flex flex-row justify-center text-2xl my-4">
              Cart
            </h2>
            <div className="mt-4">
              {cartContext?.cartList.map((cart) => {
                return <CartProductCart cart={cart} key={cart.id} />;
              })}
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-black flex flex-row justify-center text-2xl my-4">
              Product Summary
            </h2>
            <hr />
            <div>
              {cartContext?.cartList.map((cart) => {
                return (
                  <div
                    className="flex flex-row justify-between mt-3"
                    key={cart.id}
                  >
                    <div>{cart.title}</div>
                    <div className="flex flex-row gap-2">
                      <div>{cart.quantity}</div>
                      <div>{"X"}</div>
                      <div>{cart.price}</div>
                      <div>{" : "}</div>
                      <div>{(cart.price * cart.quantity).toFixed(2)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-row justify-between mt-4  border bg-slate-300 px-2 py-1 text-black">
              <div>Total Costs: </div>
              <div>{calculateTotalCosts(cartContext?.cartList)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
