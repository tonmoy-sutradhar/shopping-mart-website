// export default Cart;
const Cart = ({ selectProducts, handleDelete }) => {
  return (
    <div>
      {selectProducts.map((product) => (
        <div
          key={product.id}
          className="flex justify-center items-center gap-12 border-2 border-blue-700 max-w-fit ml-36 mt-10 rounded-lg p-3 "
        >
          <img
            className="w-36 rounded-lg"
            src={product.image}
            alt={product.name}
          />
          <h1 className="text-xl font-bold">{product.name}</h1>
          <button
            onClick={() => handleDelete(product.id)}
            className="border border-sky-400 p-2 rounded-lg bg-sky-400 text-black font-bold "
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
