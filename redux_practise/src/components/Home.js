import React, { useEffect } from "react";
import productAPI from "../api/productAPI"
export default function Home() {
  useEffect(() => {
    const fetchProduct = async () => {
      const params={
        _limit:10
      }//Giới hạn lấy 10 data
      const productList = await productAPI.getAll(params);
      console.log(productList)
    };
    fetchProduct();
  }, []);
  return <div>Home</div>;
}
