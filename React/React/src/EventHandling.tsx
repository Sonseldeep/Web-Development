import { useState } from "react";

const EventHandling = () => {
  let items = ["New York", "London", "Italy", "Tokiyo", "San Francisco"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>Lists:</h1>
      <ul>
        {items.length === 0 && <p> No data in list</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-grop-item active"
                : "list-group-item"
            }
            key={Math.random()}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventHandling;
