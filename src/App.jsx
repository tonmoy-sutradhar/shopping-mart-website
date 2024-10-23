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
      const newProducts = [...selectProducts, product];
      setSelectproducts(newProducts);
    }
  };
  console.log(selectProducts);

  return (
    <>
      <Navbar selectProducts={selectProducts}></Navbar>

      <div className="flex justify-around mt-5 border border-b-teal-950">
        <div className="w-1/2">
          <Allproducts
            handleSelectedProduct={handleSelectedProduct}
          ></Allproducts>
        </div>
        <div className="w-1/2">
          <CartContainer
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
