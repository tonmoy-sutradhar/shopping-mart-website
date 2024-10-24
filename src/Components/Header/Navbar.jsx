import "./Navbar.css";
const Navbar = ({ selectProducts, price }) => {
  return (
    <div className="flex justify-around items-center bg-sky-300 p-4">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold">Shopping Mart ❤</h1>
      </div>
      <div className="flex justify-center items-center gap-7 text-2xl font-bold">
        <p>HOME</p>
        <p>PRODUCT</p>
        <p>CART {selectProducts.length}</p>
        <p>$ {price}</p>
      </div>
    </div>
  );
};

export default Navbar;
// 🕉
