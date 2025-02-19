import React from "react";
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

  return (
    <>
      <button onClick={getProducts} className="px-5 by-2 bg-red-300 rounded">
        Call Product API
      </button>
      <hr />
      <div>
        <ul>
          {products.length > 0 ? (
            products.map((p) => (
              <li
                key={Math.random()}
                className="w-1/4  mb-3 p-5 bg-red-200 rounded"
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
