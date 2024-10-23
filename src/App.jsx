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
  console.log(isActive);
  return (
    <>
      <Navbar></Navbar>

      <div className="flex justify-around items-center mt-5">
        <Allproducts></Allproducts>
        <CartContainer
          isActive={isActive}
          handleIsActive={handleIsActive}
        ></CartContainer>
      </div>
    </>
  );
}

export default App;
