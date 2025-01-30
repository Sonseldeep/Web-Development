import { useState } from "react";

interface Props {
  countries: string[];
  title: string;
  onSelection: (country: string) => void;
}

const PassingFunctionviaProps = ({ countries, title, onSelection }: Props) => {
  const [selectIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{title}</h1>
      {countries.length === 0 && <p>No data in items</p>}
      <ul className="list-group">
        {countries.map((country, index) => (
          <li
            className={
              selectIndex === index ? "list-group-item active" : "list-group"
            }
            key={Math.random()}
            onClick={() => {
              setSelectedIndex(index);
              onSelection(country);
            }}
          >
            {country}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PassingFunctionviaProps;
