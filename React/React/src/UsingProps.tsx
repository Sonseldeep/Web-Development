import { useState } from "react";

interface Props {
  names: string[];
  title: string;
  onSelection: (name: string) => void;
}

const UsingProps = ({ names, title, onSelection }: Props) => {
  const [selectIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{title}</h1>

      <ul className="list-group">
        {names.map((name, index) => (
          <li
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={Math.random()}
            onClick={() => {
              setSelectedIndex(index);
              onSelection(name);
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsingProps;
