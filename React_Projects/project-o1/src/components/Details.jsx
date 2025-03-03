import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";
import Loading from "./Loading";

const Details = () => {
  const { id } = useParams();
  const [products, setProducts] = useContext(ProductContext);

  const [product, setproduct] = useState(null);
  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     console.log(data);
  //     setproduct(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  useEffect(() => {
    if (!product) {
      setproduct(products.filter((p) => p.id == id)[0]);
    }
  }, []);

  return product ? (
    <div className="w-[70%] h-full  m-auto p-[10%] flex items-center  gap-10 ">
      <img
        className="h-[50%]  object-contain "
        src={`${product.image}`}
        alt=""
      />
      <div className="content">
        <h1 className="text-5xl">{product.title}</h1>
        <h3 className="mt-3 text-zinc-400 font-semibold">{product.category}</h3>
        <h2 className="text-red-300 mt-3 font-semibold">Rs. {product.price}</h2>
        <p className="mt-3 font-semibold">{product.description}</p>
        <Link className="mt-5 mr-5 py-2 inline-block px-5 border rounded border-blue-200 text-blue-300">
          Edit
        </Link>
        <Link className=" inline-block  py-2 px-5 border rounded border-red-200 text-red-300">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
