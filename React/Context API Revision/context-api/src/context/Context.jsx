import { createContext, useState } from "react";

export const userContext = createContext();

const Context = (props) => {
  const [users, setUsers] = useState([
    { id: 0, username: "Sasnak", city: "Kathmandu" },
    { id: 1, username: "Ovan", city: "Patan" },
    { id: 2, username: "Manoj", city: "Bhaktapur" },
    { id: 3, username: "Krishna", city: "Pokhara" },
    { id: 4, username: "Balen", city: "Syangya" },
    { id: 5, username: "Sagar", city: "Dhangadi" },
  ]);
  console.log(props);
  return (
    <userContext.Provider value={{ users, setUsers }}>
      {props.children}
      {/* props.children vaneko context ko vitra vako hai from
      main */}
    </userContext.Provider>
  );
};

export default Context;
