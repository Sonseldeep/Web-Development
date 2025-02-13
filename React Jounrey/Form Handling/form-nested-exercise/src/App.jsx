import React, { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

const App = () => {
  const [users, setUsers] = useState([]);
  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };
  const handleRemove = (id) => {
    setUsers(() => users.filter((item, index) => index != id));
  };
  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center">
      <div className="container mx-auto ">
        <Cards handleRemove={handleRemove} users={users} />

        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
};

export default App;
