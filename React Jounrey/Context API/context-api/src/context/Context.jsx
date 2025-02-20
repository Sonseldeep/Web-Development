import { createContext, useState } from "react";
export const UserContext = createContext();

const Context = (props) => {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: "John",
      email: "john@xyz.com",
      city: "USA",
    },
    {
      id: 1,
      name: "Bob",
      email: "bob@xyz.com",
      city: "NYC",
    },
    {
      id: 2,
      name: "Jack",
      email: "jack@xyz.com",
      city: "LA",
    },
  ]);

  console.log(props);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default Context;
