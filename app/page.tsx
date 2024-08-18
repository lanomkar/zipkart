"use client";
import Image from "next/image";
// import Products from '@/app/database/product.json'
import { useContext, useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { ProductModel } from "./Models/ProductModel";
import axios from "axios";
import Loader from "./components/Loader";
import { ProductContext } from "./providers/ProductProvider";

export default function Home() {
  const productContext = useContext(ProductContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getPrductList() {
      setLoading(true);
      try {
        const productResponse = await axios.get("/database/product.json");
        if (
          productResponse &&
          productResponse.data &&
          productResponse.data.length > 0
        ) {
          productContext?.addproducts(productResponse.data);
        }
        setLoading(false);
      } catch (ex) {
        console.log("Error while getting products list", ex);
        setLoading(false);
      }
    }
    getPrductList();
  }, []);

  return (
    <div className="flex flex-row  w-full justify-center mt-2">
      <div className="flex flex-col max-w-screen-lg w-full">
        <h2 className="text-black flex flex-row justify-center text-2xl my-4">
          Products
        </h2>
        {loading ? (
          <div className="flex flex-row justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 prodcuts-list">
            {productContext?.products &&
              productContext.products.length > 0 &&
              productContext.products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </div>
        )}
      </div>
    </div>
  );
}
