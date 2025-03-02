import React, { useState } from "react";

const App = () => {
  const [item, setItem] = useState("Add items");
  const [data, setData] = useState([]);

  const addItems = () => {
    if (item.trim()) {
      setData([...data, { item: item }]);
      setItem("");
    }
  };

  const deleteItem = (itemToDelete) => {
    setData(data.filter((d) => d.item !== itemToDelete));
  };

  return (
    <div className="main-container flex justify-center items-center h-screen w-screen">
      <div className="todo-list bg-zinc-300 h-[40%] w-[40%]  flex overflow-auto">
        <div className="inside-todo-list p-4 ">
          <h1 className="text-3xl font-extrabold">To Do List</h1>
          <input
            className="bg-amber-50 rounded font-semibold mt-10 p-2 "
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button
            onClick={addItems}
            className="ml-5 bg-blue-600 text-white rounded px-3 py-2 font-semibold hover:bg-blue-400"
          >
            {" "}
            Add
          </button>

          <ul>
            {data.map((d, id) => (
              <li className="mt-2" key={id}>
                {d.item}
                <button
                  onClick={() => deleteItem(d.item)}
                  className="bg-red-400 rounded p-1 text-white font-semibold ml-2"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
