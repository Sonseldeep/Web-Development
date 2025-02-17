import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    const apt = "https://fakestoreapi.com/products";
    axios
      .get(apt)
      .then((products) => {
        console.log();
        setProducts(products.data);
      })
      .catch((err) => console.error(err));
  };

  const addProducts = () => {
    const apt = "https://fakestoreapi.com/products";
    axios
      .post(apt, {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="pt-[5%] pl-[5%]">
      <button onClick={getProducts} className="px-5 by-2 bg-red-300 rounded">
        Call Product API
      </button>
      <br />
      <br />

      <button onClick={addProducts} className="px-5 by-2 bg-red-300 rounded">
        Save New Product in API
      </button>

      <hr className="my-10" />
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
  );
};

export default App;
