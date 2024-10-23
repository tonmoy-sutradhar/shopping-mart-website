import "./SingleProducts.css";

const SingleProduct = ({ product }) => {
  const { name, image, description, price, category, isFeature } = product;

  return (
    <div className="card text-center ml-9">
      <img className="w-full rounded-lg" src={image} alt="" />
      <h1 className="text-2xl pt-3 pb-2 font-bold">product name: {name}</h1>
      <div className="text-left ml-5 ">
        <p className="text-xl">Description: {description}</p>
        <p className="text-2xl">Price: ${price}</p>
        <p>Category: {category}</p>
        <p>{isFeature ? "Available" : "Not Available"}</p>
        <button className=" mt-2 border-2  bg-sky-300 p-2 rounded-lg text-black font-bold">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
