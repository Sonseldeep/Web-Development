import React, { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

const App = () => {
  const [users, setUsers] = useState([1, 2, 3]);
  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center">
      <div className="container mx-auto ">
        <Cards users={users} />

        <Form />
      </div>
    </div>
  );
};

export default App;
