import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

const Home = () => {
  const [products] = useContext(ProductContext);

  return products ? (
    <>
      <Nav />

      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto m-5 gap-3   ">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/details/${product.id}`}
            className="  card shadow rounded h-[30vh] w-[18%] flex-col  flex  justify-center items-center mr-5 mb-10"
          >
            <div
              className="w-full h-[80%] bg-contain bg-no-repeat bg-center mb-5 hover:scale-110  "
              style={{
                backgroundImage: `url(${product.image})`,
              }}
            ></div>
            <h1 className="hover:text-blue-400">{product.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
