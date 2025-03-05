import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { asyncgetproducts } from "../store/actions/ProductActions";
const Products = () => {
  const { products } = useSelector((state) => state.ProductReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetproducts()); // asyncgetproducts lai ni dispatch use garne
  }, []);

  return (
    <div className="m-auto container p-10 bg-red-100">
      <h1 className="text-2xl font-bold text-red-900">Products List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
