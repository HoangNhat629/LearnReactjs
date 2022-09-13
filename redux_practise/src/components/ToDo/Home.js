import React, { useEffect } from "react";
import productAPI from "../../api/productAPI";
import ToDoForm from "./ToDoForm/index";
export default function Home() {
  useEffect(() => {
    const fetchProduct = async () => {
      const params = {
        _limit: 10,
      }; //Giới hạn lấy 10 data
      const productList = await productAPI.getAll(params);
      console.log(productList);
    };
    fetchProduct();
  }, []);
  const handleToDoFormSubmit = (value) => {
    console.log("Form Submit", value);
  };
  return (
    <>
      <div>What to do</div>
      <ToDoForm onSubmit={handleToDoFormSubmit} />
    </>
  );
}
