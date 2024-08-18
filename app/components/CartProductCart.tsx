import React, { useContext } from "react";
import { CartModel } from "../Models/CartModel";
import Image from "next/image";
import { ProductModel } from "../Models/ProductModel";
import { CartContext } from "../providers/CartProvider";

function CartProductCart({ cart }: { cart: CartModel }) {
  const cartContext = useContext(CartContext);
  const handleProductFromCart = (id: number) => {
    cartContext?.removeCart(id);
  };

  const handleCartQuantity = (id: number, quantity: number) => {
    cartContext?.updateQuantity(id, quantity);
  };
  return (
    <div className="flex flex-col border shadow-md p-4 rounded gap-3 mt-4">
      <div className="flex flex-row gap-4">
        <div>
          <Image src={cart.image} alt={cart.title} width={60} height={60} />
        </div>
        <div>
          <p>{cart.title}</p>
          <p className="mt-2">
            <span>Price: </span>
            <span>${cart.price}</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 product-price">
        <p
          className="h-10 flex flex-row justify-center items-center bg-amber-600 text-white px-3 shadow rounded hover:bg-amber-500 cursor-pointer"
          onClick={() => handleProductFromCart(cart.id)}
        >
          Remove from cart
        </p>
        <div className="flex flex-row justify-center items-center">
          <p>
            <span
              onClick={() => handleCartQuantity(cart.id, -1)}
              className="cursor-pointer p-3  bg-amber-600 text-white rounded-tl-xl rounded-bl-xl"
            >
              -
            </span>
            <span className="p-3 border-t border-b ">{cart.quantity}</span>
            <span
              onClick={() => handleCartQuantity(cart.id, 1)}
              className="cursor-pointer p-3  bg-amber-600 text-white rounded-tr-xl rounded-br-xl"
            >
              +
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartProductCart;
