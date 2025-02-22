import React from "react";

const App = () => {
  return (
    <div className="h-screen w-screen flex ">
      <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <a
          className="py-2 px-6 border rounded border-blue-400 text-blue-600"
          href="/create"
        >
          Add New Product
        </a>
        <hr className="w-[80%] my-3" />
        <h1 className="text-2xl w-[80%] mb-3">Category Filter</h1>
        <ul className=" w-[80%]">
          <li className=" mb-3 flex items-center">
            <span className=" mr-2  h-[15px] w-[15px] rounded-full bg-blue-300"></span>
            cat 1
          </li>

          <li className=" mb-3 flex items-center">
            <span className=" mr-2  h-[15px] w-[15px] rounded-full bg-green-300"></span>
            cat 2
          </li>
          <li className=" mb-3 flex items-center">
            <span className=" mr-2  h-[15px] w-[15px] rounded-full bg-red-300"></span>
            cat 3
          </li>
        </ul>
      </nav>
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap gap-5 overflow-x-hidden overflow-y-auto">
        <div className="  card shadow rounded h-[30vh] w-[18%] flex-col  flex  justify-center items-center">
          <div
            className="w-full h-[80%] bg-contain bg-no-repeat bg-center mb-5 hover:scale-110  "
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h1 className="hover:text-blue-400">Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
