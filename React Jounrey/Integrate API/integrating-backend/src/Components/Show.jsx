import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Show = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    const apt = "https://fakestoreapi.com/products";
    axios
      .get(apt)
      .then((products) => {
        setProducts(products.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <hr />
      <div>
        <ul className="flex flex-wrap gap-4 mt-10 justify-center ">
          {products.length > 0 ? (
            products.map((p) => (
              <li
                key={Math.random()}
                className="w-1/4  mb-3 p-5 bg-green-200 font-semibold rounded"
              >
                {p.title}
              </li>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </ul>
      </div>
    </>
  );
};

export default Show;
