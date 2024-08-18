"use client";
import React, { useContext } from "react";
import { ProductModel } from "@/app/Models/ProductModel";
import Image from "next/image";
import { CartContext } from "../providers/CartProvider";
import { CartModel } from "../Models/CartModel";
import { ModalContext } from "../providers/ModalProvider";

function ProductCard({ product }: { product: ProductModel }) {
  const cartContext = useContext(CartContext);
  const modalContext = useContext(ModalContext);

  const handleAddToCart = (product: ProductModel) => {
    let cartList = cartContext?.cartList;

    if (cartList && cartList?.length >= 0) {
      const cart = cartList.find((f) => f.id == product.id);
      if (!cart) {
        let newCart: CartModel = {
          id: product.id,
          image: product.image,
          price: product.price,
          quantity: 1,
          title: product.title,
        };
        cartContext?.addCart(newCart);
        modalContext?.handlesetStatus(true);
      } else {
        cartContext?.removeCart(product.id);
      }
    }
  };

  return (
    <div
      className="grid border shadow-md p-4 rounded gap-3 mt-4"
      title={product.title}
    >
      <div className="justify-self-center">
        <Image
          src={product.image}
          alt={product.title}
          width={110}
          height={110}
        />
      </div>
      <div className="grid mt-3 flex-col ">
        <p>{product.title}</p>
        <p className="flex flex-row mt-3 justify-between items-center product-buy-price">
          <span>
            <span className="mr-1">Price:</span>
            <span>{product.price}</span>
          </span>
          <p
            className="h-10 flex flex-row justify-center items-center bg-amber-600 text-white px-3 shadow rounded hover:bg-amber-500 cursor-pointer"
            onClick={() => handleAddToCart(product)}
          >
            {cartContext?.cartList.find((f) => f.id == product.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </p>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
