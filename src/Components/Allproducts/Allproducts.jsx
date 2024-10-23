import { useEffect, useState } from "react";
import "./Allproducts.css";
import SingleProduct from "../SingleProduct/SingleProduct";

const Allproducts = ({ handleSelectedProduct }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">All-products</h1>
      {products.map((p) => (
        <SingleProduct
          handleSelectedProduct={handleSelectedProduct}
          key={p.id}
          product={p}
        ></SingleProduct>
      ))}
    </div>
  );
};

export default Allproducts;
