import { useState } from "react";
import "./App.css";
import Allproducts from "./Components/Allproducts/Allproducts";
import CartContainer from "./Components/CartContainer/CartContainer";
import Navbar from "./Components/Header/Navbar";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });

  const handleIsActive = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        status: "about",
      });
    }
  };

  const [selectProducts, setSelectproducts] = useState([]);

  const handleSelectedProduct = (product) => {
    const isexist = selectProducts.find((p) => p.id == product.id);

    if (isexist) {
      alert("Besi Chalaki Koiro na Monu");
    } else {
      handleAddIncreasePrice(product.price);
      const newProducts = [...selectProducts, product];
      setSelectproducts(newProducts);
    }
  };

  const handleDelete = (id) => {
    handleDecrisePrice(id);
    const removeProduct = selectProducts.filter((p) => p.id != id);
    setSelectproducts(removeProduct);
  };

  // for show price
  const [price, setPrice] = useState(0);

  const handleAddIncreasePrice = (tk) => {
    setPrice(price + tk);
  };

  const handleDecrisePrice = (id) => {
    const product = selectProducts.find((p) => p.id == id);
    setPrice(price - product.price);
  };

  return (
    <>
      <Navbar price={price} selectProducts={selectProducts}></Navbar>

      <div className="flex justify-around mt-5 border border-b-teal-950">
        <div className="w-1/2">
          <Allproducts
            handleSelectedProduct={handleSelectedProduct}
          ></Allproducts>
        </div>
        <div className="w-1/2">
          <CartContainer
            handleDelete={handleDelete}
            selectProducts={selectProducts}
            isActive={isActive}
            handleIsActive={handleIsActive}
          ></CartContainer>
        </div>
      </div>
    </>
  );
}

export default App;
