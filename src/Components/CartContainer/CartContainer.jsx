import About from "../About/About";
import Cart from "../Cart/Cart";
import "./CartContainer.css";

const CartContainer = ({ handleIsActive, isActive }) => {
  // console.log(handleIsActive);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Cart-Container</h1>

      <div className="flex justify-around items-center text-xl font-bold mt-5">
        <div>
          <button
            onClick={() => handleIsActive("cart")}
            className={`${isActive.cart ? "btn active" : "btn"}`}
          >
            CART
          </button>
        </div>
        <div>
          <button
            onClick={() => handleIsActive("about")}
            className={`${isActive.cart ? "btn" : "active btn"}`}
          >
            ABOUT
          </button>
        </div>
      </div>

      {isActive.cart ? <Cart></Cart> : <About></About>}
    </div>
  );
};

export default CartContainer;
