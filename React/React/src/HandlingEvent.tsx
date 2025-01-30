// import { MouseEvent } from "react";

import { useState } from "react";

const HandlingEvent = () => {
  let country = ["Nepal", "X", "Y", "z"];
  //   const handleClick = (event: MouseEvent) => {
  //     console.log(event);
  //   };

  //   const handleEvent = (event: MouseEvent) => {
  //     console.log(event);
  //   };
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List:</h1>
      {country.length === 0 && <p>No data in the list</p>}

      <ul className="list-group">
        {country.map((x, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active "
                : "list-group-item"
            }
            key={Math.random()}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
};

export default HandlingEvent;
