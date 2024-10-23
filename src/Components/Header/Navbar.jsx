import "./Navbar.css";
const Navbar = ({ selectProducts }) => {
  return (
    <div className="flex justify-around items-center bg-sky-300 p-4">
      <div>
        <img
          className="w-16"
          src="https://img.icons8.com/?size=100&id=vDxnU7BBsG1I&format=png&color=000000"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center gap-7 text-2xl font-bold">
        <p>HOME</p>
        <p>PRODUCT</p>
        <p>CART {selectProducts.length}</p>
        <p>$ 500</p>
      </div>
    </div>
  );
};

export default Navbar;
